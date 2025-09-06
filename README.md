# Camp Explorer Static Site

This repository contains a simple single-page application (SPA) for exploring nearby amenities around a campground. It features three main views: **Explore**, **Map**, and **Settings**. The site is built using vanilla HTML, CSS and JavaScript, and it leverages Leaflet.js and OpenStreetMap tiles for the map.

The application is packaged inside the `camp-explorer.zip` archive. A GitHub Actions workflow is configured to extract the site from this archive and deploy it to GitHub Pages whenever changes are pushed to the `main` branch.

## Features

- **Explore tab:** lists categories such as coffee shops, bakeries, restaurants, bars and ice cream shops.
- **Map tab:** displays an interactive map centered on Cummins Ferry RV Park & Campground (37.8897, −84.7683). Category toggles let you filter what appears on the map.
- **Settings tab:** provides a placeholder for additional user preferences (e.g. sorting by campground or current GPS).

## Development

To run the site locally without GitHub Pages, extract the contents of the `camp-explorer.zip` archive:

```bash
unzip camp-explorer.zip
cd camp-explorer
open index.html
```

No build step is required—everything runs directly in the browser.

## Deployment

The included GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically extracts the site from `camp-explorer.zip` and publishes it to GitHub Pages. After pushing changes to the `main` branch, navigate to **Settings → Pages** in your repository to find the live URL.
