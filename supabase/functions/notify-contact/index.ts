import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RECIPIENTS = [
  "tyronne@biofrontier.co.za",
  "petrus@biofrontier.co.za",
];

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { name, email, company, operation_type, message } = await req.json();

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1a3a2a; border-bottom: 2px solid #22c55e; padding-bottom: 10px;">
          New BioFrontier Enquiry
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr><td style="padding: 8px; font-weight: bold; color: #555;">Name:</td><td style="padding: 8px;">${name}</td></tr>
          <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold; color: #555;">Email:</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding: 8px; font-weight: bold; color: #555;">Company:</td><td style="padding: 8px;">${company || "N/A"}</td></tr>
          <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold; color: #555;">Operation Type:</td><td style="padding: 8px;">${operation_type}</td></tr>
        </table>
        <div style="margin-top: 20px; padding: 16px; background: #f4f4f4; border-radius: 8px;">
          <h3 style="margin: 0 0 8px; color: #555;">Message:</h3>
          <p style="margin: 0; white-space: pre-wrap;">${message}</p>
        </div>
        <p style="margin-top: 24px; font-size: 12px; color: #999;">
          This email was sent from the BioFrontier website contact form.
        </p>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "BioFrontier <noreply@biofrontier.co.za>",
        to: RECIPIENTS,
        subject: `New Enquiry from ${name} — ${operation_type}`,
        html: htmlBody,
        reply_to: email,
      }),
    });

    if (!res.ok) {
      const errorData = await res.text();
      console.error("Resend error:", errorData);
      throw new Error(`Resend API error: ${res.status}`);
    }

    const data = await res.json();
    return new Response(JSON.stringify({ success: true, id: data.id }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending notification:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
