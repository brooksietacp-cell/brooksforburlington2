# Campaign Link Tracking — Quick Reference

Add `?utm_source=...` to your website URL when sharing it through different channels.
This lets you see in Vercel Analytics which outreach methods are driving the most traffic.
The UTM data also gets attached to every form submission in Formspree, so you'll know
how each volunteer or contact found your site.

## Ready-to-Use Links

### Social Media
- **Facebook post:** `https://brooksforburlington.com?utm_source=facebook&utm_medium=social`
- **Facebook ad:** `https://brooksforburlington.com?utm_source=facebook&utm_medium=paid`
- **X / Twitter:** `https://brooksforburlington.com?utm_source=twitter&utm_medium=social`
- **Instagram bio:** `https://brooksforburlington.com?utm_source=instagram&utm_medium=social`
- **Nextdoor:** `https://brooksforburlington.com?utm_source=nextdoor&utm_medium=social`

### Email
- **Email blast:** `https://brooksforburlington.com?utm_source=email&utm_medium=email&utm_campaign=volunteer_drive`
- **Personal email:** `https://brooksforburlington.com?utm_source=personal_email&utm_medium=email`

### Print & Offline
- **Door-knocking flyer:** `https://brooksforburlington.com?utm_source=flyer&utm_medium=print&utm_campaign=doorknock`
- **Yard sign (QR code):** `https://brooksforburlington.com?utm_source=yard_sign&utm_medium=offline`
- **Mailer:** `https://brooksforburlington.com?utm_source=mailer&utm_medium=print`
- **Business card:** `https://brooksforburlington.com?utm_source=business_card&utm_medium=print`

### Events
- **Town Meeting handout:** `https://brooksforburlington.com?utm_source=town_meeting&utm_medium=event`
- **Coffee shop meet-and-greet:** `https://brooksforburlington.com?utm_source=coffee_meetup&utm_medium=event`

### Text Messages
- **Text to supporters:** `https://brooksforburlington.com?utm_source=sms&utm_medium=text`

## How It Works

When someone visits your site via one of these links, the UTM parameters are:
1. **Visible in Vercel Analytics** as referral/campaign data
2. **Saved in the browser session** so they persist even if the visitor navigates to sub-pages
3. **Attached to form submissions** — every volunteer signup and contact message in Formspree will include the UTM fields, so you can see exactly which channel brought that person in

## Tips

- For QR codes on print materials, use one of the offline links above and generate a QR code at any free QR generator (e.g., qr-code-generator.com)
- Keep `utm_source` short and lowercase with underscores — it makes the analytics cleaner
- You can add `utm_campaign` to group related efforts (e.g., `&utm_campaign=final_week`)
