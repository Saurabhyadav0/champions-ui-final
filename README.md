# Champions UI

A modern React application built with Tailwind CSS and React Router for managing champion information and inquiries.

## Project Overview

Champions UI is a React-based web application that provides an intuitive interface for browsing framework information, submitting inquiries, and tracking status updates. The application uses React Router for navigation and Tailwind CSS for a responsive, modern design.

### Features

- **Home Page**: Landing page with overview information
- **Framework Page**: Display and manage champion framework details
- **Inquiry Page**: Submit inquiries and feedback
- **Status Page**: Track the status of submissions
- **Responsive Design**: Built with Tailwind CSS for mobile and desktop support
- **Modern Components**: Reusable components including Button, Layout, and Navigation

## Prerequisites

- **Node.js** v18 or higher – [Download Node.js](https://nodejs.org/)
- **npm** v9 or higher (comes with Node.js)

## Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone https://github.com/Krishnasingh020/champions-ui
   cd champions-ui
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Available Commands

### Development

Start the development server:
```bash
npm start
```

Opens [http://localhost:3000](http://localhost:3000) in your browser. The app will automatically reload when you make changes.

### Testing

Run the test suite in interactive watch mode:
```bash
npm test
```

### Production Build

Build the app for production:
```bash
npm run build
```

Creates a `build` folder with optimized production files ready for deployment. The build is minified with hashed filenames.

## Project Structure

```
champions-ui/
├── public/                 # Static assets
│   ├── index.html         # Main HTML file
│   └── ...
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Button.jsx
│   │   ├── FooterNav.jsx
│   │   └── Layout.jsx
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── Framework.jsx
│   │   ├── Inquiry.jsx
│   │   └── Status.jsx
│   ├── styles/           # Global styles
│   │   └── globals.css
│   ├── App.js           # Main App component
│   └── index.js         # Entry point
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Project dependencies
```

## Technologies Used

- **React** (v19.2) - UI library
- **React Router DOM** (v7.13) - Client-side routing
- **Tailwind CSS** (v3.4) - Utility-first CSS framework
- **PostCSS** - CSS transformation tool
- **React Scripts** (v5.0) - Build and development tools

## Getting Started for Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

4. Make changes to the files in `src/` - the app will automatically reload

## Building for Production

1. Install with locked versions: `npm ci` (or `npm install`).
2. Create an optimized production build: `npm run build`.
3. The `build/` directory is ready for deployment. The `postbuild` script verifies the build folder.

Optional: run `npm audit fix` to apply non-breaking security updates; review with `npm audit` first.

## Deployment

No `.env` or environment variables are required. Deployment-ready out of the box.

```bash
npm ci
npm run build
```

Serve or upload the `build/` folder to any static host.

**No environment variables or config required.** Clone, install, build, and deploy.

| Platform      | Notes |
|---------------|--------|
| **Vercel**    | Connect repo; `vercel.json` is included (build + SPA rewrites). Deploy with zero config. |
| **Netlify**   | Build: `npm run build`, publish: `build` |
| **GitHub Pages** | Build: `npm run build` → deploy `build/` (e.g. gh-pages branch or Action) |
| **Any static host** | Upload the contents of `build/` to your web server |
| **Local preview**   | `npx serve -s build` |

## Learn More

- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)

## License

This project is private.

## Support

For issues or questions, please contact the development team.
