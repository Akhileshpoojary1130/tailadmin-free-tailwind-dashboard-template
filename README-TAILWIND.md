# TailAdmin - Tailwind CSS v4 with Live Server

This project has been converted to use Tailwind CSS v4 with the CLI build process, removing Alpine.js dependencies and making it compatible with Live Server.

## Setup Instructions

### 1. Install Tailwind CSS v4
```bash
npm install tailwindcss @tailwindcss/cli
```

### 2. Build CSS
Run the Tailwind CLI to build your CSS file:
```bash
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

### 3. Run with Live Server
1. Install Live Server extension in VS Code
2. Right-click on any HTML file in the `src` folder
3. Select "Open with Live Server"

## Project Structure

```
src/
├── input.css          # Tailwind CSS input file
├── output.css         # Generated CSS file (created after build)
├── index.html         # Dashboard page
├── profile.html       # Profile page
└── images/           # Image assets
```

## Features

- ✅ Tailwind CSS v4 with CLI build process
- ✅ No Alpine.js dependencies
- ✅ Live Server compatible
- ✅ Dark mode support
- ✅ Responsive design
- ✅ Mobile sidebar navigation
- ✅ Same design and colors as original

## Pages Converted

1. **index.html** - Dashboard with metrics cards and charts
2. **profile.html** - User profile page with personal information

## How to Use

1. Run the Tailwind CLI build command in terminal:
   ```bash
   npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
   ```

2. Open any HTML file with Live Server

3. The CSS will automatically rebuild when you make changes to the input.css file

## Key Changes Made

- Removed all Alpine.js (`x-data`, `x-init`, `@click`, etc.) attributes
- Added vanilla JavaScript for interactive functionality
- Maintained all original styling and colors
- Added proper CSS structure with Tailwind v4
- Implemented mobile-responsive sidebar navigation
- Added dark mode toggle functionality

## Browser Support

Works in all modern browsers that support CSS Grid and Flexbox.