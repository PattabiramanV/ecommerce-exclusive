// Utilities to generate branded email templates for Exclusive
// Inline CSS for better email client compatibility

export function welcomeEmail({ name = "there", siteName = "Exclusive", websiteUrl = "http://localhost:5173" }) {
  const subject = `Welcome to ${siteName} 🎉`;

  const primary = "#ef4444"; // Tailwind red-500
  const textColor = "#111827"; // gray-900
  const subText = "#6b7280"; // gray-500
  const bg = "#f9fafb"; // gray-50
  const card = "#ffffff";

  const html = `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>${subject}</title>
      <style>
        @media (prefers-color-scheme: dark) {
          body { background: #0b0f14 !important; }
          .card { background: #0f172a !important; }
          .text { color: #e5e7eb !important; }
          .muted { color: #94a3b8 !important; }
        }
      </style>
    </head>
    <body style="margin:0;padding:0;background:${bg};font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td align="center" style="padding:32px 12px;">
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:640px;">
              <tr>
                <td style="padding-bottom: 16px; text-align:center;">
                  <div style="font-size:24px; font-weight:700; color:${textColor};">
                    <span style="display:inline-block; width:10px; height:10px; background:${primary}; border-radius:9999px; margin-right:8px; vertical-align:middle;"></span>
                    ${siteName}
                  </div>
                </td>
              </tr>
              <tr>
                <td class="card" style="background:${card}; border-radius:12px; box-shadow: 0 1px 2px rgba(0,0,0,0.06); padding:28px;">
                  <h1 class="text" style="margin:0 0 8px 0; font-size:22px; line-height:1.3; color:${textColor};">Welcome, ${name}!</h1>
                  <p class="muted" style="margin:0 0 18px 0; color:${subText}; font-size:14px;">Your account has been created successfully.</p>

                  <p class="text" style="margin:0 0 18px 0; color:${textColor}; font-size:15px;">We're excited to have you on board. Start exploring exclusive deals and the latest arrivals curated just for you.</p>

                  <div style="text-align:center; margin: 24px 0;">
                    <a href="${websiteUrl}" style="display:inline-block; background:${primary}; color:#ffffff; text-decoration:none; padding:12px 20px; border-radius:8px; font-weight:600;">Start Shopping</a>
                  </div>

                  <hr style="border:none; border-top:1px solid #e5e7eb; margin: 24px 0;" />

                  <p class="muted" style="margin:0 0 8px 0; color:${subText}; font-size:12px;">If you didn’t create this account, you can safely ignore this email.</p>
                  <p class="muted" style="margin:0; color:${subText}; font-size:12px;">Questions? Reply to this email — we’re here to help.</p>
                </td>
              </tr>
              <tr>
                <td style="padding-top:16px; text-align:center;">
                  <p class="muted" style="margin:0; color:${subText}; font-size:12px;">© ${new Date().getFullYear()} ${siteName}. All rights reserved.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>`;

  const text = `Welcome to ${siteName} - Your account is ready!\n\nHi ${name},\n\nYour account has been created successfully. Start shopping now: ${websiteUrl}\n\nIf you didn’t create this account, ignore this email.`;

  return { subject, html, text };
}

export function resetPasswordEmail({ resetUrl, siteName = "Exclusive" }) {
  const subject = `${siteName} - Password Reset Request`;

  const primary = "#ef4444";
  const textColor = "#111827";
  const subText = "#6b7280";
  const bg = "#f9fafb";
  const card = "#ffffff";

  const html = `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>${subject}</title>
      <style>
        @media (prefers-color-scheme: dark) {
          body { background: #0b0f14 !important; }
          .card { background: #0f172a !important; }
          .text { color: #e5e7eb !important; }
          .muted { color: #94a3b8 !important; }
        }
      </style>
    </head>
    <body style="margin:0;padding:0;background:${bg};font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td align="center" style="padding:32px 12px;">
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:640px;">
              <tr>
                <td style="padding-bottom: 16px; text-align:center;">
                  <div style="font-size:24px; font-weight:700; color:${textColor};">
                    <span style="display:inline-block; width:10px; height:10px; background:${primary}; border-radius:9999px; margin-right:8px; vertical-align:middle;"></span>
                    ${siteName}
                  </div>
                </td>
              </tr>
              <tr>
                <td class="card" style="background:${card}; border-radius:12px; box-shadow: 0 1px 2px rgba(0,0,0,0.06); padding:28px;">
                  <h1 class="text" style="margin:0 0 8px 0; font-size:22px; line-height:1.3; color:${textColor};">Reset your password</h1>
                  <p class="muted" style="margin:0 0 18px 0; color:${subText}; font-size:14px;">We received a request to reset your password. Valid for 10 minutes.</p>

                  <div style="text-align:center; margin: 24px 0;">
                    <a href="${resetUrl}" style="display:inline-block; background:${primary}; color:#ffffff; text-decoration:none; padding:12px 20px; border-radius:8px; font-weight:600;">Reset Password</a>
                  </div>

                  <p class="muted" style="margin:0 0 8px 0; color:${subText}; font-size:12px;">If you didn't request this, please ignore this email.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>`;

  const text = `Reset your password for ${siteName}.\n\nClick here: ${resetUrl}\n\nIf you didn't request this, ignore this email.`;

  return { subject, html, text };
}
