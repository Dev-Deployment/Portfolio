// next.config.ts
const isProd = process.env.NODE_ENV === 'production'

export default {
  output: 'export',                 // <-- creates static site in /out
  trailingSlash: true,              // <-- ensures /page/index.html works on Pages
  images: { unoptimized: true },    // <-- make next/image static-friendly
  // If you're using a *project* page (username.github.io/<repo>), fill in your repo name:
  basePath: isProd ? 'https://github.com/Dev-Deployment/Portfolio' : undefined,
  assetPrefix: isProd ? 'https://github.com/Dev-Deployment/Portfolio' : undefined,
}
