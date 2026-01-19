# Karen Turman Website

Personal website built with Zola and Tailwind CSS v4.
Live site: [karenturman.com](https://karenturman.com)

## Prerequisites

- [Zola](https://www.getzola.org/documentation/getting-started/installation/) v0.22.0+
- [Node.js](https://nodejs.org/) v20+
- npm (comes with Node.js)

## Access

Secrets and services are managed through an admin email, ask another developer for access.

## Setup

```bash
git clone https://github.com/[username]/karenturman.git
cd karenturman
npm install
```

## Development

- `npm run css:build` - Build and minify Tailwind CSS
- `npm run css:watch` - Watch CSS and rebuild on changes
- `npm run server` - Start Zola dev server
- `npm run dev` - Run CSS watch + Zola server

## Build

```bash
npm run css:build
zola build
```

Output in `public/` directory.

## Deployment

Pushes to `main` branch trigger GitHub Actions workflow: `.github/workflows/main.yml`

Which builds the project and published to a `gh-pages` branch.
Github pages is configured to automatically deploy on commit to `gh-pages`.

Note a `TOKEN` secret in repository settings under the admin email.

## Project Structure

We are following the standard [zola project folder structure](https://www.getzola.org/documentation/getting-started/overview/).

## Dependencies

- Contact form: [web3forms.com](https://web3forms.com/)
