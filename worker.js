// DevTemple FAQ AI Tutor — Cloudflare Worker
// Deploy to: Cloudflare Workers
// Env var needed: GEMINI_API_KEY

const FAQ = `
=== DEVTEMPLE PLATFORM KNOWLEDGE BASE ===

ABOUT DEVTEMPLE
DevTemple (devtem.org) is the ultimate marketplace for premium digital assets, developer tools, creative resources, and marketing kits. It is a dual-sided platform — creators sell digital products and earn, while buyers get instant downloads of vetted resources.
- 2,000+ products, 500+ creators
- Buyers get instant digital downloads after purchase
- Sellers earn up to 85% royalties (after 30% service fee)
- Referral program: earn 7% commission (10% for Pro members) on every referred sale — no caps, lifetime rewards
- Free developer utilities: Image Compressor, Image Format Converter, Color Picker (devtem.org)
- Social: Facebook, X (@DevtempT12979), GitHub (fscss-ttr), YouTube (@devtem_org)

KEY PAGES & LINKS
- Marketplace / Browse: devtem.org/home
- Sign up / Login: devtem.org/signup
- Dashboard: devtem.org/dashboard
- Upload a product: devtem.org/dashboard#/pen/
- Rewards & Referrals: devtem.org/dashboard#/reward/
- Settings: devtem.org/dashboard#/settings/
- Get Started guide: devtem.org/get-started
- FAQ: devtem.org/faq
- Contact: devtem.org/contact (support form + office@devtem.org)
- Terms: devtem.org/terms
- Privacy Policy: devtem.org/terms/privacy
- Refund Policy: devtem.org/terms#payment-refunds-heading
- About: devtem.org/about
- Blog: devtem.org/blog
- Image Compressor: devtem.org/image-compressor
- Color Picker: devtem.org/color-picker

=== DEVTEMPLE FAQ ===

GENERAL
Q: What is DevTemple?
A: DevTemple is a digital marketplace for developers, creators, and businesses to buy and sell high-performance digital assets. It serves both creators who want to monetize their skills and professionals looking for production-ready tools.

Q: How do I get started?
A: Create an account with your name, email, bio, photo, and skill. Browse the marketplace, purchase items via Paystack, and if you're a creator, upload your own products to sell.

Q: What are the Community Guidelines?
A: Treat others with respect — no harassment or hate speech. Upload only original or properly licensed content. Provide accurate product descriptions. No fake reviews or rating manipulation. Report suspicious activity. No violence, illegal activity, or IP theft promotion. One account per person. Get approval before posting ads.

Q: How do I report a product?
A: Email office@devtem.org with the direct link to the product and a clear description of the issue. DevTemple reviews all reports within 24–48 hours and may suspend or remove the listing.

Q: How does DevTemple investigate reports?
A: Reports are reviewed within 24–48 hours. Actions range from Temporary Suspension (pulled from public view while creator is contacted), Permanent Deletion (for stolen/destructive/fraudulent content), to Account Ban (for malicious uploads or systematic spamming).

---
ACCOUNTS & PROFILES
Q: How do I create an account?
A: Provide your full name, valid email address, bio, photo, skill, and a secure password. Passwords are encrypted and never stored in plaintext.

Q: What are my account responsibilities?
A: Keep login credentials secure, report unauthorized access immediately, keep account info accurate, comply with Terms and Privacy Policy, and follow applicable laws (NDPR, GDPR, CCPA).

Q: Can I have multiple accounts?
A: No. DevTemple enforces a "One Account, One You" policy. Multiple accounts may result in suspension.

Q: How do I update my profile?
A: Go to Dashboard > Settings to update your profile details. Keep your email current to receive important notifications.

Q: Can I unsubscribe from a creator?
A: Yes. Go to their profile card and tap the "Subscribed" button to unfollow. It reverts to the default "Subscribe" state instantly.

---
FOR BUYERS
Q: How do I purchase items?
A: Browse the marketplace, review products carefully, add to cart, proceed to checkout, and complete payment via Paystack. Do not close the checkout window until payment is fully processed.

Q: What should I check before purchasing?
A: Read the product description thoroughly, examine cover images and previews, check license terms, verify compatibility, and review seller ratings.

Q: What if I have issues with a purchased item?
A: Contact the seller through the messaging system first. If unresolved, report harmful content using the report button. For technical issues preventing access, contact DevTemple support. Refunds may be considered for inaccessible content.

Q: What happens if I close the payment window early?
A: Your purchase may not be recorded, it can be hard to trace or refund, and you might be charged without receiving the product. Always wait for the confirmation and redirection back to DevTemple.

Q: What does subscribing to a creator mean?
A: It's a free way to follow creators. You're added to their subscriber base and get notified whenever they drop new templates, private packages, or software updates.

Q: How do I subscribe to a creator?
A: From a product page — click the blue "Subscribe" badge next to the creator's username below the item price. From their profile — click the "Subscribe" button below their profile summary.

Q: How do I support group products?
A: Select the product, click "Add to Cart". To contribute more than the base amount, adjust the quantity in your cart, then proceed to checkout.

---
FOR SELLERS
Q: How do I become a seller?
A: Create a DevTemple account, navigate to the seller dashboard, complete seller verification, then start uploading original or licensed content. Go to Dashboard > Upload.

Q: What are the earnings and withdrawal details?
A: A 30% service fee applies to all sales. Minimum withdrawal is ₦18,000. Maximum is ₦250,000 per request. Bank details must be accurate. All withdrawals are processed manually. Contact support if your withdrawal delays beyond 2 weeks.

Q: What is the 30% service charge?
A: It covers platform maintenance, payment processing, customer support, marketing, and security. Example: sell a product for $10, you receive $7.

Q: How and when do I get paid?
A: Submit a withdrawal request. Payouts follow a monthly schedule. Earnings are after the 30% service fee. Payouts may be delayed if an account or sale is under review. Contact support within 30 days if there's an issue.

Q: What are content requirements for sellers?
A: Upload only original or properly licensed content. Provide accurate descriptions. Include a clear cover image. Use real product screenshots. Avoid misleading visuals. Price products fairly. Follow Community Guidelines.

Q: How do I get verified?
A: Go to your dashboard, complete your personal information, and click "Save Changes." Once reviewed, your account will be verified. You can sell without verification, but a verified badge builds buyer trust.

Q: Why get verified?
A: A verified badge shows buyers your account details have been reviewed. Verified sellers get more visibility, attract more buyers, and enjoy faster sales.

Q: What does "Hide from home page" mean?
A: Enables private product selling — your product is excluded from global listings and only accessible via your dashboard or direct link. Ideal for exclusive items or client deliveries. Note: still must comply with community guidelines. This setting is permanent once published.

Q: When should I use the "AI-generated content" tag?
A: Enable it if your product (code, images, or text) was significantly created or enhanced using AI tools like ChatGPT or Midjourney. Product settings cannot be edited after posting.

Q: Can I edit a product after publishing?
A: No. Product details and settings cannot be edited once live. If you made a serious error, delete the post and re-upload it.

Q: How do I sell private packages to specific clients?
A: Use the "Hide from home page" feature. Ideal for client delivery, exclusive sales, or secure transactions where buyers still benefit from DevTemple's encrypted checkout.

Q: What digital resources are prohibited?
A: Malicious/broken code (viruses, malware, backdoors), stolen or plagiarized assets, misleading products (fake previews or non-working features), and content promoting scams, fraud, explicit themes, or unsafe behavior.

Q: What are the most common violations?
A: Spamming/duplicate listings, fee evasion (linking buyers outside DevTemple's checkout), and misusing "Hide from Home Page" to bypass guidelines.

Q: Do hidden/private packages have to follow the rules?
A: Yes. All private files are processed under the same safety terms. Any private product violating guidelines will be flagged and removed.

Q: How do I see my subscribers as a creator?
A: Your subscriber count is shown on your store cards. Click the "Subscribers" count to open a modal showing profile pictures, display names, and handles of your active subscribers.

Q: How does the "Notify your subscribers" feature work?
A: Toggle the "Notify your subscribers" switch in product settings when publishing. On clicking "Publish Project", DevTemple automatically sends an email notification to all your subscribers with access details.

Q: Why is the notification toggle disabled?
A: The email broadcast toggle requires at least 1 active subscriber on your profile. Once someone subscribes, the toggle is dynamically unlocked for subsequent uploads.

Q: Are there restrictions on subscriber notifications?
A: Once published with notifications enabled, emails are sent instantly and cannot be changed. Rapid duplicate uploads to re-trigger notifications will be flagged and may lead to suspension.

---
PRIVACY & SECURITY
Q: What information does DevTemple collect?
A: Account info (name, email, country), payment history via Paystack, and usage data (cookies, session data, analytics). Passwords are only stored encrypted.

Q: How is my data protected?
A: Encryption of sensitive info, secure payment handling via Paystack, regular security assessments, and limited access to personal data. Users should also protect their own credentials.

Q: What are my privacy rights?
A: Under GDPR/CCPA: access your data, update/correct it, request deletion, receive portable data, opt out of data sharing (DevTemple doesn't sell your data), restrict processing, and object to processing based on legitimate interests.

Q: How are cookies used?
A: Essential cookies (session management), analytics cookies (platform performance), and preference cookies (user settings). You can manage cookie preferences.

Q: What should I do if my payment is failed or stuck?
A: Share with support: the payment method used, the Paystack transaction ID or reference code, and the asset name you were purchasing.

Q: Who should I contact for payment issues?
A: Check your transaction email first. For Paystack issues (failed/double charges), contact Paystack support. For other issues or missing purchased content, contact DevTemple support with transaction details and screenshots.

---
REFERRAL PROGRAM
Q: How does the referral/affiliate program work?
A: Copy your unique referral link from Dashboard > Rewards. Share it with creators and developers. When someone purchases through your link, you earn a 7% commission automatically on every item they buy.

Q: Where can I see my referral earnings?
A: Under "Available Reward Balance" at the top of your rewards dashboard. Referral earnings are independent from your vendor/store balance. Go to Dashboard > Rewards.

Q: How do I withdraw my reward earnings?
A: Click the blue "Withdraw" button next to your balance. Fill in the secure form: Country, Bank Name, Account Name, Account Number. Click "Submit Withdrawal" to send to the admin team.

Q: Are there limits or conditions on reward payouts?
A: Account name must match your legal bank account details. You can add address/notes for specialized banking. Promoting your affiliate link via spamming, misleading descriptions, or bots is strictly prohibited and will result in permanent forfeiture of rewards.

---
PREMIUM PRO
Q: What is DevTemple Premium Pro?
A: A paid membership for serious creators and developers. Gives faster verification, higher affiliate commissions (10% vs 7%), exclusive seller features, and priority notifications.

Q: What is the Pro Blue Verified Badge?
A: Upgrading to Pro starts verification immediately. Your profile shows a Blue Verified Badge during review — no waiting in a queue. Pro members get faster, priority review. Eligible accounts may advance to a Gold Verified Badge based on profile completeness and platform activity.

Q: How does Pro affect affiliate earnings?
A: Free accounts earn 7% commission on referrals. Pro members earn 10%. Likes, downloads, purchases, and interactions all contribute to your rewards balance. Pro members can also run rewards campaigns.

Q: What exclusive features do Pro members get?
A: Verified Seller Features (tools only for verified accounts), Priority Notifications (first to know about platform updates and opportunities), and Increased Visibility (better product ranking and buyer trust).

Q: How much does Premium Pro cost?
A: Yearly plan: ₦46,920/year (saves ₦8,280 vs monthly — 15% off). Monthly plan: ₦4,600/month (coming soon). The yearly plan is recommended.

---
ACCOUNT DEACTIVATION
Q: Why was my account deactivated?
A: If your account has been deactivated, you'll temporarily lose access to your dashboard, payouts, listings, reviews, and referral benefits. Frequent causes include:
- Invalid, misleading, or trademarked/copyrighted username or display name
- Excessive violations reported by users or flagged by moderation
- Content that violates guidelines (offensive, misleading, or prohibited)
- Manipulation of pricing, rates, or platform benefits
- Unrelated or spam link in the portfolio URL field
- AI-generated content submitted without the required AI label disclosure
- Multiple violations of asset submission guidelines
- Unresolved licensing or copyright disputes regarding hosted tools
- Irregular or suspicious activity during payout processing

Q: My account was deactivated — what should I do next?
A: What happens if unresolved: pending payouts will be frozen, listed assets will be unpublished, repeated violations may result in a permanent ban, and accounts inactive in appeal for 30+ days may be permanently closed.
What you should do: Review the Terms of Service at devtem.org/terms to pinpoint potential violations. Gather your developer profile details including your dynamic Account ID shown on the deactivation notice. Submit a formal review request to the DevTemple administration team at office@devtem.org.

---
TERMS & POLICIES SUMMARY
Q: What are DevTemple's Terms and Conditions?
A: DevTemple's Terms (effective 1 Jan 2026, devtem.org/terms) cover: General Terms (accurate account creation, NDPR/GDPR/CCPA compliance), User Agreement, Account Responsibilities, Content Requirements (no malicious code, real identity, accurate descriptions, no external links in content), Payment Terms (via Paystack, final sales, disputes within 30 days), Content Licensing, Cookies & Tracking, Dispute Resolution (governed by Nigerian law, arbitration in Lagos), and Community Guidelines.

Q: What is DevTemple's Privacy Policy?
A: DevTemple's Privacy Policy (effective 18 Sep 2025, devtem.org/terms/privacy) explains: data collected (name, email, country, payment history via Paystack, usage/cookie data), how it's used (platform functionality, transactions, analytics, communication), data sharing (not sold; Paystack handles payments under confidentiality), cookies (essential, analytics, functional), and your GDPR/CCPA rights (access, rectification, deletion, portability, opt-out). Data Protection Officer email: safety@devtem.org.

Q: What is DevTemple's refund policy?
A: All sales are final. Refunds are only considered if purchased content is technically inaccessible. See devtem.org/terms#payment-refunds-heading for full details.

Q: What file requirements exist for uploads?
A: ZIP files must contain only relevant product files — no personal photos, sensitive info, malicious code, viruses, backdoors, unrelated assets, or stock images unless they are part of the product. Profile must use real identity — no fake names, impersonation, or misleading info. Descriptions must be clear with no clickbait language or external links. Showcase images must accurately represent the actual product.

Q: What are DevTemple's Community Guidelines?
A: Treat others with respect. No harassment, hate speech, or discrimination. Upload only original or licensed work. Be honest about what you're offering. No review rigging or fake accounts. One account per creator/team. No unapproved ads or spam. Respect intellectual property. No payment scams or refund abuse. Violations lead to warnings, content removal, suspension, or permanent bans.

---
CONTACT & SUPPORT
Q: How do I contact DevTemple support?
A: Via the contact form at devtem.org/contact — select a topic (purchase issue, technical support, report content, account help, refund request, creator support, or other). Or email directly: office@devtem.org. Support typically responds within 24 hours.

Q: What social media is DevTemple on?
A: Facebook: facebook.com/profile.php?id=61582984827911 | X/Twitter: @DevtempT12979 | GitHub: github.com/fscss-ttr | YouTube: @devtem_org

---
FREE TOOLS
Q: Does DevTemple offer free tools?
A: Yes — free browser-based developer utilities at devtem.org: Image Format Converter (JPG/PNG/WEBP), Image Compressor (reduce file size without quality loss), and Color Picker & Extractor (hex, RGB, palette extraction from images).

---
GET STARTED GUIDE
Q: How does buying work?
A: Browse at devtem.org/home. Add to cart and checkout securely via Paystack — instant digital download. Subscribe to creators to get notified when they upload new products. All products are reviewed before listing.

Q: How does selling work?
A: Go to Dashboard → Upload (devtem.org/dashboard#/pen/). Set price, add cover image, description, and tags. Product goes live immediately. Earn verification badges as you grow (Blue → Gold). Build subscribers — they get email notifications every time you upload.

Q: How do the rewards and badges work?
A: Share your referral link and earn 7% on every order placed through it (10% for Pro members). Complete your profile to get your Blue Verified Badge. Stay active — sell, post, engage — to unlock the Gold Verified Badge. Badges increase search visibility and buyer trust. No cap on referral earnings.

---
Data Protection: safety@devtem.org
Website: https://devtem.org
Last updated: 20 May 2026
`;

const SYSTEM_PROMPT = `You are the DevTemple AI Tutor — a friendly, knowledgeable assistant for the DevTemple digital marketplace platform (devtem.org).

Your job is to help users understand how DevTemple works by answering questions based strictly on the FAQ knowledge base below.

Rules:
- Only answer based on the FAQ content provided. Do not make up features or policies.
- If a question is not covered in the FAQ, say: "I don't have that information yet. For further help, reach out to office@devtem.org or visit devtem.org."
- Be warm, concise, and helpful. Use plain language.
- For links, always reference devtem.org paths (e.g. /dashboard, /signup).
- Never mention Gemini, Google, or any AI provider.
- If asked who you are: "I'm the DevTemple AI Tutor, here to help you navigate the DevTemple marketplace."

${FAQ}`;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // Serve frontend
    if (request.method === 'GET' && url.pathname === '/') {
      return new Response(getHTML(), {
        headers: { 'Content-Type': 'text/html;charset=UTF-8' }
      });
    }

    // Chat endpoint
    if (request.method === 'POST' && url.pathname === '/chat') {
      try {
        const { history = [], message } = await request.json();

        if (!message) {
          return new Response(JSON.stringify({ error: 'Message is required.' }), {
            status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          });
        }

        const contents = [
          ...history,
          { role: 'user', parts: [{ text: message }] }
        ];

        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${env.GEMINI_API_KEY}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
              contents
            })
          }
        );

        const data = await geminiRes.json();

        if (!geminiRes.ok) {
          return new Response(JSON.stringify({ error: data.error?.message || 'Gemini error.' }), {
            status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          });
        }

        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "I didn't catch that, could you rephrase?";

        return new Response(JSON.stringify({ reply }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });

      } catch (err) {
        return new Response(JSON.stringify({ error: 'Internal error: ' + err.message }), {
          status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }
    }

    return new Response('Not found', { status: 404 });
  }
};

function getHTML() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>DevTemple AI Tutor</title>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#07090f;
  --surface:#0d1220;
  --surface2:#121929;
  --border:#1c2840;
  --accent:#2563eb;
  --accent-light:rgba(37,99,235,0.15);
  --accent-glow:rgba(37,99,235,0.3);
  --text:#e2e8f4;
  --muted:#5a6e92;
  --dim:#2a3650;
  --user-bg:#0f1f3d;
  --bot-bg:#0a1628;
}
html,body{height:100%;background:var(--bg);color:var(--text);font-family:system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:15px}
body::before{content:'';position:fixed;inset:0;background:radial-gradient(ellipse 80% 50% at 50% -10%,rgba(37,99,235,0.08) 0%,transparent 60%);pointer-events:none}
#app{position:relative;max-width:700px;margin:0 auto;height:100vh;display:flex;flex-direction:column;padding:18px 16px}
header{display:flex;align-items:center;gap:12px;padding-bottom:16px;border-bottom:1px solid var(--border);flex-shrink:0}
.logo{width:40px;height:40px;border-radius:10px;background:var(--accent) url(https://devtem.org/assets/images/logo.png) no-repeat center;background-size:cover;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:16px;color:transparent;flex-shrink:0;box-shadow:0 0 20px var(--accent-glow)}
.htext h1{font-size:17px;font-weight:700;letter-spacing:-0.2px}
.htext p{font-size:12px;color:var(--muted);font-weight:300}
.badge{margin-left:auto;font-size:11px;color:var(--accent);background:var(--accent-light);border:1px solid rgba(37,99,235,0.3);padding:4px 10px;border-radius:20px;font-weight:500;display:flex;align-items:center;gap:6px}
#messages{flex:1;overflow-y:auto;padding:18px 2px;display:flex;flex-direction:column;gap:10px;scroll-behavior:smooth}
#messages::-webkit-scrollbar{width:3px}
#messages::-webkit-scrollbar-thumb{background:var(--border);border-radius:2px}
.row{display:flex;gap:8px;animation:pop 0.28s cubic-bezier(.34,1.56,.64,1)}
@keyframes pop{from{opacity:0;transform:translateY(8px) scale(.97)}to{opacity:1;transform:none}}
.row.user{flex-direction:row-reverse}
.av{width:28px;height:28px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0;margin-top:2px}
.av.b{background:var(--accent) url(https://devtem.org/assets/images/logo.png) no-repeat center;background-size:cover;color:transparent;}
.av.u{background:var(--user-bg);border:1px solid #1e3a6e;color:#7aabf0}
.bubble{max-width:80%;padding:10px 14px;border-radius:14px;font-size:14px;line-height:1.65;white-space:pre-wrap;word-break:break-word}
.bubble.bot{background:var(--bot-bg);border:1px solid var(--border);border-bottom-left-radius:3px;color:#c8d8f0}
.bubble.user{background:var(--user-bg);border:1px solid #1a3a6e;border-bottom-right-radius:3px;color:#bdd4f5}
.welcome{text-align:center;padding:48px 20px 20px;color:var(--muted)}
.welcome .icon-svg{width:48px;height:48px;margin:0 auto 14px;display:flex;justify-content:center}
.welcome .icon-svg svg{width:48px;height:48px;stroke:var(--accent);stroke-width:1.5;fill:none}
.welcome h2{font-size:20px;font-weight:700;color:var(--text);margin-bottom:8px;letter-spacing:-0.2px}
.welcome p{font-size:13.5px;font-weight:300;max-width:340px;margin:0 auto 20px}
.chips{display:flex;flex-wrap:wrap;gap:6px;justify-content:center}
.chip{font-size:12px;padding:6px 12px;border-radius:20px;border:1px solid var(--border);color:var(--muted);background:var(--surface);cursor:pointer;transition:all .2s}
.chip:hover{border-color:var(--accent);color:var(--accent);background:var(--accent-light)}
.typing-row{display:flex;gap:8px}
.tdots{background:var(--bot-bg);border:1px solid var(--border);border-bottom-left-radius:3px;padding:12px 16px;border-radius:14px;display:flex;gap:4px;align-items:center}
.dot{width:5px;height:5px;border-radius:50%;background:var(--accent);animation:bop 1.1s ease infinite}
.dot:nth-child(2){animation-delay:.18s}.dot:nth-child(3){animation-delay:.36s}
@keyframes bop{0%,80%,100%{transform:translateY(0);opacity:.4}40%{transform:translateY(-5px);opacity:1}}
#input-area{padding-top:14px;border-top:1px solid var(--border);flex-shrink:0}
.wrap{display:flex;gap:8px;background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:7px 7px 7px 14px;transition:border-color .2s,box-shadow .2s}
.wrap:focus-within{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-light)}
#inp{flex:1;background:transparent;border:none;outline:none;color:var(--text);font-family:inherit;font-size:14px;padding:5px 0;min-width:0}
#inp::placeholder{color:var(--dim)}
#btn{width:36px;height:36px;border-radius:8px;border:none;background:var(--accent);color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .2s,transform .15s,box-shadow .2s}
#btn:hover{background:#1d4ed8;box-shadow:0 0 14px var(--accent-glow)}
#btn:active{transform:scale(.9)}
#btn:disabled{background:var(--border);cursor:not-allowed;box-shadow:none}
#btn svg{width:16px;height:16px}
.foot{text-align:center;font-size:11px;color:var(--dim);margin-top:8px}
.foot a{color:var(--accent);text-decoration:none}
@media(max-width:480px){#app{padding:10px 8px}.bubble{max-width:88%}}
</style>
</head>
<body>
<div id="app">
  <header>
    <div class="logo">DT</div>
    <div class="htext">
      <h1>DevTemple AI Tutor</h1>
      <p>Answers from the official FAQ</p>
    </div>
    <div class="badge">
      <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
        <circle cx="5" cy="5" r="4" fill="#10b981"/>
      </svg>
      Online
    </div>
  </header>
  <div id="messages">
    <div class="welcome" id="welcome">
      <div class="icon-svg">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
          <path d="M8 12h8M12 8v8"/>
          <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/>
        </svg>
      </div>
      <h2>Ask me anything about DevTemple</h2>
      <p>I know the platform inside out — sellers, buyers, payments, Pro membership, referrals, and more.</p>
      <div class="chips">
        <button class="chip" data-question="How do withdrawals work?">💰 Withdrawals</button>
        <button class="chip" data-question="What is Premium Pro?">⭐ Premium Pro</button>
        <button class="chip" data-question="How do I become a seller?">📦 Become seller</button>
        <button class="chip" data-question="What is the referral program?">🔗 Referral program</button>
        <button class="chip" data-question="How do I get verified?">✅ Get verified</button>
      </div>
    </div>
  </div>
  <div id="input-area">
    <div class="wrap">
      <input id="inp" type="text" placeholder="Ask a question about DevTemple…" autocomplete="off"/>
      <button id="btn" aria-label="Send">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
      </button>
    </div>
    <p class="foot">DevTemple AI Tutor · <a href="https://devtem.org" target="_blank">devtem.org</a></p>
  </div>
</div>
<script>
const msgs=document.getElementById('messages');
const inp=document.getElementById('inp');
const btn=document.getElementById('btn');
let history=[];

inp.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();send()}});

document.querySelectorAll('.chip').forEach(chip=>{
  chip.addEventListener('click',()=>{
    inp.value=chip.getAttribute('data-question')||chip.textContent.replace(/[⭐💰📦🔗✅]/g,'').trim();
    send();
  });
});

async function send(){
  const text=inp.value.trim();
  if(!text)return;
  document.getElementById('welcome')?.remove();
  addMsg('user',text);
  inp.value='';
  btn.disabled=true;
  const tid=typing();
  try{
    const res=await fetch('/chat',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({history,message:text})
    });
    const data=await res.json();
    if(!res.ok)throw new Error(data.error||'Something went wrong.');
    history.push({role:'user',parts:[{text}]});
    history.push({role:'model',parts:[{text:data.reply}]});
    rmTyping(tid);
    addMsg('bot',data.reply);
  }catch(e){rmTyping(tid);addMsg('bot','⚠️ '+e.message);}
  finally{btn.disabled=false;inp.focus();}
}

function addMsg(who,text){
  const row=document.createElement('div');
  row.className='row '+who;
  const av=document.createElement('div');
  av.className='av '+(who==='bot'?'b':'u');
  av.textContent=who==='bot'?'DT':'U';
  const b=document.createElement('div');
  b.className='bubble '+who;
  b.textContent=text;
  row.appendChild(av);row.appendChild(b);
  msgs.appendChild(row);
  msgs.scrollTop=msgs.scrollHeight;
}

function typing(){
  const id='t'+Date.now();
  const row=document.createElement('div');
  row.className='typing-row';row.id=id;
  const av=document.createElement('div');
  av.className='av b';av.textContent='DT';
  const d=document.createElement('div');
  d.className='tdots';
  d.innerHTML='<div class="dot"></div><div class="dot"></div><div class="dot"></div>';
  row.appendChild(av);row.appendChild(d);
  msgs.appendChild(row);msgs.scrollTop=msgs.scrollHeight;
  return id;
}
function rmTyping(id){document.getElementById(id)?.remove()}
</script>
</body>
</html>`;
}

