import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const RECIPIENTS = [
  "tyronne@biofrontier.co.za",
  "petrus@biofrontier.co.za",
];

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const body = await req.json();

    // Verify this is a legitimate database webhook payload
    const record = body?.record;
    if (!record || !record.id || !record.email || !record.name || !record.message) {
      return new Response(
        JSON.stringify({ error: "Invalid request" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Verify the record actually exists in the database
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabaseClient = createClient(supabaseUrl, supabaseServiceKey);

    const { data: dbRecord, error: dbError } = await supabaseClient
      .from("contact_submissions")
      .select("id")
      .eq("id", record.id)
      .single();

    if (dbError || !dbRecord) {
      console.error("Record not found in database:", record.id);
      return new Response(
        JSON.stringify({ error: "Invalid request" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { name, email, company, operation_type, message } = record;

    // Server-side input validation
    if (typeof name !== "string" || name.length > 100 ||
        typeof email !== "string" || email.length > 255 ||
        typeof message !== "string" || message.length > 5000 ||
        (company && (typeof company !== "string" || company.length > 200)) ||
        (operation_type && typeof operation_type !== "string")) {
      return new Response(
        JSON.stringify({ error: "Invalid input" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "Notification could not be sent." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company || "N/A");
    const safeOperation = escapeHtml(operation_type || "N/A");
    const safeMessage = escapeHtml(message);

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1a3a2a; border-bottom: 2px solid #22c55e; padding-bottom: 10px;">
          New BioFrontier Enquiry
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr><td style="padding: 8px; font-weight: bold; color: #555;">Name:</td><td style="padding: 8px;">${safeName}</td></tr>
          <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold; color: #555;">Email:</td><td style="padding: 8px;">${safeEmail}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; color: #555;">Company:</td><td style="padding: 8px;">${safeCompany}</td></tr>
          <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold; color: #555;">Operation Type:</td><td style="padding: 8px;">${safeOperation}</td></tr>
        </table>
        <div style="margin-top: 20px; padding: 16px; background: #f4f4f4; border-radius: 8px;">
          <h3 style="margin: 0 0 8px; color: #555;">Message:</h3>
          <p style="margin: 0; white-space: pre-wrap;">${safeMessage}</p>
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
        subject: `New Enquiry from ${safeName} — ${safeOperation}`,
        html: htmlBody,
        reply_to: email,
      }),
    });

    if (!res.ok) {
      const errorData = await res.text();
      console.error("Resend error:", errorData);
      return new Response(
        JSON.stringify({ error: "Notification could not be sent." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await res.json();
    return new Response(JSON.stringify({ success: true, id: data.id }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending notification:", error);
    return new Response(
      JSON.stringify({ error: "Notification could not be sent." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
