# KongClip Website

Official website for KongClip.

- Website: https://clip.webkong.top
- About: https://clip.webkong.top/about
- Repository: git@github.com:webkong/kongclip-webstie.git
- DMG download URL: https://github.com/webkong/kongclip-webstie/releases/latest/download/KongClip.dmg

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static output is generated in `dist/`.

## Publish Website

Push this `website` project to:

```bash
git@github.com:webkong/kongclip-webstie.git
```

The `public/CNAME` file configures GitHub Pages for:

```text
clip.webkong.top
```

The `public/404.html` file mirrors the app shell so direct visits to routes such as `/about` work on GitHub Pages.

From the project root, use:

```bash
./script/release.sh build-website
./script/release.sh push-website
```

## Publish DMG

When releasing KongClip, upload the installer as a GitHub Release asset named:

```text
KongClip.dmg
```

The website download buttons point to:

```text
https://github.com/webkong/kongclip-webstie/releases/latest/download/KongClip.dmg
```

From the project root, use:

```bash
./script/release.sh build-dmg
./script/release.sh push-dmg
```

If the GitHub CLI is not installed, `push-dmg` requires a token:

```bash
GITHUB_TOKEN=your_token ./script/release.sh push-dmg
```

Run the full flow with:

```bash
./script/release.sh all
```
