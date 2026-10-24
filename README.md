# Capital Industries website

A responsive static website built with HTML, CSS and JavaScript. It does not require a build step or third-party JavaScript packages.

## Run locally

Open `index.html` in a browser, or serve this folder with any static web server. For example, with Python installed:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Content and assets

- Company text, vision, mission, contact information, product list, PESO wording, logo and photographs were checked against the supplied `brocher.pdf`. Product photos are organized under `assets/images/products/`; the brochure logo and facility/cover images are in `assets/images/logo/`, `assets/images/about/` and `assets/images/hero/`.
- Replace brochure photographs with owner-approved current product and facility images before publishing if they are outdated or not approved for web use. Image references are centralized in the `products` and `galleryItems` arrays in `app.js`; card and gallery styling keeps image proportions consistent.
- The gallery contains brochure images, not a complete project-history list. Do not add claims about specific completed projects unless confirmed by Capital Industries.
- The brochure identifies the petroleum tanker product as PESO approved. That claim is limited to the petroleum tanker section; confirm the product-specific approval and current supporting documents before publication.
- The quote form validates fields in the browser and opens a prefilled email draft addressed to `capitalindustries77@gmail.com`. It does not send data to a server. Connect a secure server-side enquiry endpoint before representing the form as a submitted enquiry.
- Replace `capitalindustries.example` in `sitemap.xml` and `robots.txt` with the real site domain before deployment.

## Image inventory

| Asset | Brochure source |
| --- | --- |
| `assets/images/logo/capital-industries-brochure-logo.png` | Page 4 logo |
| `assets/images/hero/brochure-welding-fabrication.jpg` | Page 1 cover photo |
| `assets/images/about/capital-industries-facility.jpg` | Page 4 facility and tanker photo |
| `assets/images/products/capital-industries-petroleum-tanker.jpg` | Page 3 petroleum tanker |
| `assets/images/products/capital-industries-underground-storage-tank.jpg` | Page 3 underground storage tank |
| `assets/images/products/capital-industries-shipping-container.png` | Page 3 shipping container |
| `assets/images/products/capital-industries-water-tank.png` | Page 3 water tanker |
| `assets/images/products/capital-industries-trailer.jpg` | Page 3 trailer |
| `assets/images/products/capital-industries-lorry-cabin.jpg` | Page 3 lorry cabin |
| `assets/images/products/capital-industries-press-brake.jpg` | Page 3 shearing/press brake machine |
| `assets/images/products/capital-industries-mobile-dispenser.jpg` | Page 3 mobile dispenser |

`assets/images/image-fallback.svg` is used if a local image fails to load.
