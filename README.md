
# My Knowledge Blog

This project is a blog built with Astro, featuring a custom design and several advanced functionalities.

## Disclaimer

This project is provided as-is, without any warranty or guarantee of its functionality or suitability for any purpose. The author is not responsible for any damages or liabilities arising from the use of this code. Users are advised to review and test the code thoroughly before implementing it in their own projects.

## Implemented Features

- ✅ Responsive design with mobile-friendly navigation
- ✅ Blog post categorization and tagging system
- ✅ Search functionality for blog posts
- ✅ Category and tag filtering on the blog page
- ✅ Recent posts sidebar on the homepage
- ✅ Custom 404 and 500 error pages
- ✅ SEO optimizations including meta tags and structured data
- ✅ Commenting system (simulated, ready for backend integration)

## TODO Features

- [ ] Dark mode toggle
- [ ] Pagination for blog posts
- [ ] Author profiles
- [ ] Related posts suggestions
- [ ] Newsletter subscription
- [ ] Social media sharing buttons
- [ ] Reading time estimation for posts

## Getting Started

To get this project up and running on your local machine, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/my-knowledge-blog.git
   ```

2. Navigate to the project directory:
   ```
   cd my-knowledge-blog
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:4321` to see the blog.

## Project Structure

my-knowledge-blog/
│
├── public/
│ └── (static assets like images)
│
├── src/
│ ├── components/
│ │ └── (Astro components)
│ │
│ ├── content/
│ │ └── blog/
│ │ └── (Markdown files for blog posts)
│ │
│ ├── layouts/
│ │ └── (Layout components)
│ │
│ ├── pages/
│ │ └── (Astro pages)
│ │
│ └── styles/
│ └── global.css
│
├── astro.config.mjs
├── package.json
└── tsconfig.json

## Customization

1. Update site metadata in src/consts.ts
2. Modify the global styles in src/styles/global.css
3. Add or edit blog posts in src/content/blog/
4. Customize components in src/components/

## Deployment

To build the site for production:

npm run build

The built files will be in the dist/ directory, ready for deployment to your preferred hosting 

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and you can do whatever you want with it. However, please note that the author is not responsible for any consequences resulting from the use of this code.