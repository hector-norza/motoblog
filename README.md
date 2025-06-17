# MotoBlog

A modern, dynamic motorcycle blog built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- Responsive design with dark/light mode support
- Dynamic content with infinite scrolling
- Interactive motorcycle showcase with comparison feature
- Enhanced search with autocomplete and search history
- Animated UI components for a modern feel
- Optimized images with loading effects
- Reading progress indicator for blog posts
- Social sharing functionality

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/motoblog.git
   cd motoblog
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to GitHub Pages

This project is configured for easy deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment

1. Push your changes to the `main` branch:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. The GitHub Actions workflow will automatically build and deploy the site to the `gh-pages` branch.

3. Your site will be available at `https://yourusername.github.io/motoblog/`

### Manual Deployment

If you prefer to deploy manually:

1. Build the project:
   ```bash
   NEXT_PUBLIC_BASE_PATH=/motoblog npm run build
   ```

2. Export the static files:
   ```bash
   npm run export
   ```

3. Deploy the `out` directory to your hosting provider.

## Project Structure

- `/src/app`: Next.js app router pages
- `/src/components`: Reusable React components
- `/src/lib`: Utility functions and data
- `/src/content`: Blog posts and page content in MDX format
- `/public`: Static assets like images

## Customization

### Adding New Blog Posts

1. Create a new MDX file in `/src/content/posts/`
2. Add the required frontmatter:
   ```mdx
   ---
   title: "Your Post Title"
   date: "2025-06-15"
   category: "Category Name"
   tags: ["tag1", "tag2"]
   excerpt: "A brief description of your post"
   image: "/images/your-image.jpg"
   author: "Your Name"
   ---

   # Your Post Content
   ```

### Adding New Motorcycles

Edit the `/src/lib/motorcycle-data.ts` file to add new motorcycles to the showcase.

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [ContentLayer](https://contentlayer.dev/) - Content management
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Images from Unsplash and placeholder sources
- Icons from React Icons
- Fonts from Google Fonts