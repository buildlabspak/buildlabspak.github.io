# BuildLabs Pakistan

Live site: https://buildlabspak.github.io/

A static website (plain HTML, CSS and JS, no build step). All page content comes from one file, `content/site.json`, which `assets/js/app.js` loads and renders. Hosted on GitHub Pages: every push to `main` goes live in about a minute.

## Structure

| Path | What it is |
|---|---|
| `index.html` | Page skeleton and icons |
| `content/site.json` | **All text, links and image paths** |
| `assets/css/style.css` | Styling |
| `assets/js/app.js` | Renders `site.json` into the page |
| `uploads/` | Photos used by the site |
| `sw.js` | Service worker that caches images |
| `admin/` | Decap CMS editor (`/admin`) |

## Adding or changing images and content

### Option A: edit files directly (git)

1. Prepare the photo (see tips below) and put it in `uploads/`, e.g. `uploads/workshop-lahore.jpg`.
2. Open `content/site.json` and add an entry to the right list. The image path always starts with `/uploads/`.
3. Commit and push to `main`. The site updates in about a minute.

**Gallery** (`"gallery"`): add an object with just the image:

```json
{ "image": "/uploads/workshop-lahore.jpg" }
```

**Latest updates** (`"updates"`): add a title, text and optional image. Newest entries can go at the top or bottom; they show in list order.

```json
{
  "title": "Workshop at XYZ School",
  "text": "Short description.",
  "image": "/uploads/workshop-lahore.jpg"
}
```

**Team** (`"team"`): the order in the list is the order on the page. Use `/uploads/blank.png` if there is no photo yet.

```json
{
  "name": "Full Name",
  "role": "Role",
  "image": "/uploads/full-name.jpg",
  "message": "",
  "linkedin": "",
  "instagram": "",
  "whatsapp": ""
}
```

**Workshops** (`"workshopList"`) and **Catalogue** (`"catalogue"`) take `title`, `text` and an optional `image`.
Leave `"image": ""` for no image.

To hide a whole section, set `"show": false` for it under `"sections"`. Social links are the `"links"` block; empty values are hidden.

### Option B: the CMS (no git)

Go to https://buildlabspak.github.io/admin, log in with GitHub, edit the fields, upload images with the image picker, and save. The CMS commits to the repo for you.

> Note: `admin/config.yml` currently points at `repo: abdulhayee7/buildlabs-website`. This repo is `buildlabspak/buildlabspak.github.io`. Update that line, or CMS edits will not reach this site.

### Image tips (important for speed)

- **Resize before uploading.** Gallery photos: about 1600 px wide. Team photos: about 600 px tall. Aim for under 300 KB each. Phone and camera originals are several MB and make the site lag.
- **File names:** lowercase letters, numbers and dashes, no spaces (`emaan-noor.jpg`).
- Use `.jpg`, `.jpeg`, `.png` or `.webp`.
- **Replacing a photo under the same file name:** visitors' browsers cache images. Either use a new file name (easiest), or change `img2` to `img3` in `sw.js` so everyone re-downloads.
- **Check your JSON:** a missing comma or quote breaks the whole page. Paste it into any JSON validator before pushing.

### Quick resize with Python

```
py -m pip install pillow
py -c "from PIL import Image,ImageOps;p='uploads/photo.jpg';i=ImageOps.exif_transpose(Image.open(p)).convert('RGB');i.thumbnail((1600,1600));i.save(p,quality=82,optimize=True)"
```

## Run locally

Opening `index.html` directly will not load `site.json`; serve the folder instead:

```
py -m http.server 8000
```

Then visit http://localhost:8000.

## Forms (Web3Forms)

The notify-me, registration and contact forms all send to **build.labs111@gmail.com** through [Web3Forms](https://web3forms.com).

**One-time setup:** go to web3forms.com, enter `build.labs111@gmail.com`, and copy the access key they email you. Paste it into `content/site.json` as `"web3formsKey": "..."` (or in the CMS under Website). The key is safe to be public. Until it is set, the forms show "Form is not set up yet".

### Opening registration
The Registration quick card currently opens a "notify me" popup. When registration opens, set that card's `link` to `#register` in `quick` (in `site.json` or the CMS). The card then opens the registration form (name, email, phone, school, grade, workshop, message). Workshop choices come from `workshopList`.

### Publishing the schedule
Add entries to `"schedule"` in `site.json` and set the Schedule card's `link` to `#schedule`. The card then opens a popup listing each workshop:

```json
{
  "workshop": "Line Following Robot",
  "topic": "Sensors and PID basics",
  "date": "15 Nov 2026",
  "time": "10:00 AM - 1:00 PM",
  "venue": "ABC School Auditorium",
  "city": "Islamabad",
  "speaker": "Name",
  "contact": "03xx-xxxxxxx"
}
```

Empty fields are skipped.
