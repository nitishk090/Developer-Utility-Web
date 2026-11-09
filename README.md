# Developer Utility Web

Independent browser version of the Developer Utility desktop workspace. It reuses the React UI, styles, and browser-compatible utility logic from the Electron project; this folder has its own dependencies, Vite configuration, and web platform services.

## Run locally

```powershell
npm install
npm run dev
```

Open the URL Vite prints (by default `http://localhost:4173`). Run `npm run build` for a production build in `dist/`, or `npm run preview` to serve that build locally.

## Browser-specific behavior

- Clipboard access uses the browser Clipboard API and may require HTTPS (or localhost) and user permission.
- API Tester uses browser `fetch`. Cross-origin calls work only when the target server allows this site's origin through CORS; browser security restrictions cannot be bypassed client-side.
- Request import opens a local text file; export downloads the current request as a `.curl` file.
- Tool state and theme are kept in browser local storage.

## Deploy to Vercel

Import the `E:\DUW` folder as the project root (or deploy it with the Vercel CLI from that folder). Vercel uses `vercel.json` with `npm install` and `npm run build`; the static output directory is `dist`. No environment variables or server-side proxy are required.
