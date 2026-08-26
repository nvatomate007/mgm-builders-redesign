# MGM Builders Production Readiness

## Canonical source

The canonical editable source is `nvatomate007/mgm-builders-redesign` on `main`. The prior `gh-pages` branch is a compiled deployment artifact, not an independent source design.

## Preview form delivery

The frontend posts JSON to the same-origin `POST /api/contact` route. The route validates required fields, validates email/phone/ZIP formats, enforces an explicit contact-consent checkbox, rejects a honeypot field, limits request bodies, and waits for a successful downstream HTTP response before returning `accepted: true`.

The non-production Vercel preview uses an expiring Webhook.site endpoint created specifically for controlled testing. The page visibly states that preview submissions do not contact MGM Builders or any client recipient. Before production cutover:

1. Set `FORM_DELIVERY_URL` to an approved, verified HTTPS business-recipient or CRM endpoint.
2. Set `FORM_DELIVERY_MODE=approved-production-recipient`.
3. Remove the controlled-preview fallback URL from `api/contact.ts`.
4. Replace the preview-only notice and button copy.
5. Submit an approval-authorized end-to-end test and retain proof of receipt.
6. Add owner-approved privacy/legal copy for the final data-collection workflow.

## Public-record facts used

Florida Division of Corporations record `L19000277604` lists MGM BUILDERS LLC as active, with an effective date of November 7, 2019, and Douglas D. Oliver as authorized manager. Florida DBPR lists contractor license `CBC1263736` as current and active through August 31, 2028; the license is issued to Joseph Rene Dube, with J.R.D. Enterprises LLC shown as the DBA. The site attributes the license accordingly rather than implying that MGM BUILDERS LLC is the named license holder.

## Claims removed or neutralized

The launch candidate removes or neutralizes the prior 50+ years claim, $32 million airport project claim, 100% owner-managed claim, no-subcontractor claim, manufacturer certification/warranty claims, insurance claim, disputed Orlando office address, unverified hours, one-business-day response promise, free-estimate promise, unsourced testimonials, and “A DougABomb Company” label.

## Rollback

The remediation work is isolated in Git history. To roll back the preview, redeploy the prior known commit `0665b7a830932a74d55ec5bdf4f32632004501fe` or delete/disable the non-production Vercel project. Do not change `mgmfla.com` DNS or its mail-related DNS records during preview work.
