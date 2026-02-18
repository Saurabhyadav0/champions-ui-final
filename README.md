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

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

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

To create an optimized production build:

```bash
npm run build
```

The optimized files will be in the `build/` directory and ready for deployment.

## Deployment

The `build/` folder is ready to be deployed to any static hosting service:

- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Drag and drop the `build` folder
- **GitHub Pages**: Push the `build` folder to your gh-pages branch
- **Traditional Hosting**: Upload the `build` folder contents to your web server

## Learn More

- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)

## License

This project is private.

## Support

For issues or questions, please contact the development team.
