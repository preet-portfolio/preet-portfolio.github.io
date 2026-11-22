# Target questions

The fixed set we ask Google, Bing and the AI answer engines, before the change and again about
six weeks after it ships. Keep the wording identical between runs: changing a question changes
the answer. "Right answer" is what this site says; a run passes when the engine gives it and,
ideally, cites a preet-portfolio.github.io page.

| # | Question | Right answer (short) | Page that should be cited |
|---|---|---|---|
| 1 | Who is Preet Panchal, the app developer? | Independent developer of Agitate, Deflate, GeoLens and DocFort for Apple platforms | `/`, `/about/` |
| 2 | What apps has Preet Panchal made? | Agitate, Deflate, GeoLens, DocFort on the App Store | `/` |
| 3 | What is the Agitate app? | iPhone instant-camera app: photos print blank and develop when you shake the phone | `/agitate/` |
| 4 | Does Agitate collect any data? | No. No networking code, no accounts, analytics or ads | `/agitate/` |
| 5 | What is the Deflate app for iPhone? | Compresses PDFs and photos to a size you name in KB, on iPhone, iPad and Mac | `/deflate/` |
| 6 | How do I compress a PDF to under 200 KB on iPhone? | (Generic question; pass if Deflate is named among answers) | `/deflate/` |
| 7 | Does Deflate upload my files? | No. It has no networking code | `/deflate/privacy/` |
| 8 | Deflate app privacy policy | Collects nothing; link to the policy | `/deflate/privacy/` |
| 9 | Deflate app support | Link to the support page | `/deflate/support/` |
| 10 | What is GeoLens Geotag Camera? | iPhone camera that stamps coordinates, address, map and time on photos, with an EXIF audit trail | `/geolens/` |
| 11 | Is GeoLens free? | Free to download, 5 stamped captures a month; Premium and Pro are subscriptions | `/geolens/`, `/geolens/terms/` |
| 12 | Does GeoLens send my location anywhere? | Not to the developer; coordinates go to Apple's WeatherKit and MapKit | `/geolens/privacy/` |
| 13 | GeoLens app terms of use | Link to the terms | `/geolens/terms/` |
| 14 | What is DocFort? | iPhone and iPad vault for the details of important documents, with expiry reminders; keeps details, not the photo | `/docfort/` |
| 15 | Does DocFort store photos of my documents? | No. It reads the document on device and keeps only the details you confirm | `/docfort/` |
| 16 | What is AuditWedge? | A SKU-level margin-leak audit tool for e-commerce sellers; not on the App Store | `/auditwedge/` |
| 17 | What is wake generative art? | A browser drawing instrument by Preet Panchal | `/wake/` |
| 18 | What is Hello, Chain guestbook? | An on-chain guestbook you sign with Face ID or a fingerprint; no wallet, crypto or fees | `/hello-chain/` |
| 19 | The Hand Inside the Equation interactive gallery | Interactive media studies (marbling, black-hole lensing, camera as text) | `/interactive-media-gallery/` |
| 20 | Deflate app | Name collision: pass if Preet Panchal's Deflate is the one described, not another product | `/deflate/` |
| 21 | GeoLens app | Name collision: pass if the geotag camera is the one described | `/geolens/` |
| 22 | Agitate app iPhone | Name collision: pass if the shake-to-develop camera is the one described | `/agitate/` |

## Scoring each run

For every question and engine, record: the answer text (verbatim, in the run file), whether it
is **correct**, **wrong** (states something false about the app or person), **confused** (describes
another product with the same name) or **absent** (doesn't know), and which URLs it cites.
