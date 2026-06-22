import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const port = Number(process.env.PORT || 4173);
const root = "dist";
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".xml": "application/xml",
  ".txt": "text/plain",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".ico": "image/x-icon"
};

createServer(async (req, res) => {
  try {
    const url = new URL(req.url || "/", `http://localhost:${port}`);
    const pathname = decodeURIComponent(url.pathname);
    let file = normalize(join(root, pathname));
    if (pathname.endsWith("/")) file = join(file, "index.html");
    const ext = extname(file) || ".html";
    const body = await readFile(file);
    res.writeHead(200, { "Content-Type": types[ext] || "application/octet-stream" });
    res.end(body);
  } catch {
    const body = await readFile(join(root, "index.html"));
    res.writeHead(200, { "Content-Type": types[".html"] });
    res.end(body);
  }
}).listen(port, () => console.log(`Replica available at http://localhost:${port}`));
