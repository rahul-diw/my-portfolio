# Rahul Diwakar: portfolio

Static site (no build step). Open `index.html`, or deploy the folder as is.

## Structure
- `#hero` is ONE pinned, scroll-driven scene (a single GSAP ScrollTrigger on top of the existing Lenis):
  intro (name, statements, animated background) -> blue light transition -> featured projects one at a time
  (Pulse, Sony Sound Range, WarehouseFlow, SmartTask) -> the pin releases into About.
- On load only the intro and the animated background are visible; no project previews.
- `#work` ("The repo.") is now a compact project index of all five projects: hover = small preview, click = case study.
- Case-study modal, archive, About, Data, Experience, Contact, resume and navigation work as before.
- Respects `prefers-reduced-motion` (no pin; the featured projects become a normal static block under the hero).

## Showcase motion and performance
- Cinematic previews: a slow camera push-in and small pan per project, three real screenshots drifting at different speeds (depth), secondary layers revealed inside their own frames, a calm blue veil/glow during hand-offs, title and description landing in step with the plane.
- Cheap to render: no blur filters, no blend modes, transform/opacity only; the hero grid floor also scrolls with a transform. Showcase images are WebP (about half the size), sized with width/height, and loaded lazily (first project after the page has loaded, the next ones as you approach).
- Reduced motion: no pin, static layout, all layers visible.

## Project previews
There are no video files for these projects, so the previews are screenshots with a controlled "camera" push, layer parallax and layered reveals (they are not presented as videos).
If you later record real clips, add them in `build` data as `VID={'pu':'videos/pulse.mp4'}` style entries: they render as muted, looping, playsInline `<video>` and play only while their project is active.

## Deploy
Vercel: Framework "Other", no build command, output directory `.`
The "Live site" button of Pulse and Sony Sound Range stays hidden until their live URLs are filled in `index.html` (search for `"live": ""`).
Libraries load from CDN (GSAP, ScrollTrigger, Lenis, Google Fonts).
