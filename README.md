# Travii public site

This folder is standalone. When the copy is approved, move its contents into a
new public GitHub repository and enable GitHub Pages from the repository root.

## Test locally

From the Travii project root:

```sh
python3 -m http.server 4173 --directory site
```

Then open [http://localhost:4173](http://localhost:4173).

## Before publishing

1. Confirm that the support address in `site-config.js` is an inbox you monitor for support and privacy requests.
2. Review the policy against the final app behavior and publish the site.
3. Use the resulting `/privacy.html` URL in App Store Connect’s Privacy Policy field and `/support.html` URL as the Support URL.
