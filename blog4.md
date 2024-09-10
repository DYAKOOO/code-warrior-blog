# Table of Contents
- src/consts.ts
- src/env.d.ts
- src/types.ts
- src/styles/global.css
- src/components/Footer.astro
- src/components/Sidebar.astro
- src/components/Header.astro
- src/components/TagList.astro
- src/components/HeaderLink.astro
- src/components/FormattedDate.astro
- src/components/RecentPosts.astro
- src/components/BaseHead.astro
- src/layouts/Layout.astro
- src/layouts/BlogPost.astro
- src/pages/rss.xml.js
- src/pages/about.astro
- src/pages/500.astro
- src/pages/index.astro
- src/pages/404.astro
- src/pages/tags/[tags].astro
- src/pages/tags/index.astro
- src/pages/blog/[...slug].astro
- src/pages/blog/index.astro
- src/content/config.ts
- src/content/blog/first-post.md
- src/content/blog/markdown-style-guide.md
- src/content/blog/using-mdx.mdx

## File: src/consts.ts

- Extension: .ts
- Language: typescript
- Size: 224 bytes
- Created: 2024-09-09 11:08:29
- Modified: 2024-09-07 02:47:30

### Code

```typescript
// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Astro Blog';
export const SITE_DESCRIPTION = 'Welcome to my website!';

```

## File: src/env.d.ts

- Extension: .ts
- Language: typescript
- Size: 46 bytes
- Created: 2024-09-09 11:08:29
- Modified: 2024-09-07 02:47:30

### Code

```typescript
/// <reference path="../.astro/types.d.ts" />

```

## File: src/types.ts

- Extension: .ts
- Language: typescript
- Size: 68 bytes
- Created: 2024-09-09 12:45:34
- Modified: 2024-09-09 12:45:34

### Code

```typescript
export interface Category {
    name: string;
    count: number;
  }
```

## File: src/styles/global.css

- Extension: .css
- Language: unknown
- Size: 1207 bytes
- Created: 2024-09-09 16:01:34
- Modified: 2024-09-09 16:01:34

### Code

```unknown
/* src/styles/global.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Add any global styles here */
:root {
  --color-background: #f0f0de;
  --color-surface: #fdfdfd;
  --color-text-primary: #171717;
  --color-text-secondary: #686868;
  --color-link: #2A67FF;
  --color-accent: #ad33ad;  /* Updated to golden */
  --color-border: #e6e92b;
}

body {
  background-color: var(--color-background);
  color: var(--color-text-primary);
}

a {
  color: var(--color-link);
  transition: color 0.3s ease;
}

a:hover {
  color: var(--color-accent);
}

.content-section {
  border: 1px solid var(--color-accent);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.card {
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 1rem;
  transition: border-color 0.3s ease;
}

.card:hover {
  border-color: var(--color-accent);
}

@layer components {
  .btn, a, button, input[type="submit"] {
    @apply min-h-[44px] min-w-[44px] p-2 ;
  }
}

/* Styles for code snippets and LaTeX */
pre[class*="language-"] {
  @apply p-4 rounded-md overflow-x-auto text-sm md:text-base;
}

.katex-display {
  @apply overflow-x-auto py-2;
}

.katex {
  @apply text-sm md:text-base;
}
```

## File: src/components/Footer.astro

- Extension: .astro
- Language: unknown
- Size: 630 bytes
- Created: 2024-09-09 15:26:02
- Modified: 2024-09-09 15:26:02

### Code

```unknown
---
const currentYear = new Date().getFullYear();
---

<footer class="bg-surface text-text-secondary p-4 border-t-2 border-accent">
  <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
    <div class="mb-4 md:mb-0">
      <p>&copy; {currentYear} My Knowledge Blog. All rights reserved.</p>
    </div>
    <nav class="flex space-x-4">
      <a href="/about" class="hover:text-accent">About</a>
      <a href="https://twitter.com/yourusername" class="hover:text-accent">Twitter</a>
      <a href="https://github.com/yourusername" class="hover:text-accent">GitHub</a>
    </nav>
  </div>
</footer>
```

## File: src/components/Sidebar.astro

- Extension: .astro
- Language: unknown
- Size: 1190 bytes
- Created: 2024-09-09 15:42:44
- Modified: 2024-09-09 15:42:44

### Code

```unknown
---
const { tags, currentTag } = Astro.props;
---

<aside id="sidebar" class="bg-surface p-4 md:p-6 rounded-lg shadow-md hidden md:block">
  <h2 class="text-xl font-semibold mb-4 text-accent">Tags</h2>
  <div class="flex flex-wrap gap-2">
    {tags.map((tag) => (
      <a 
        href={`/blog?tag=${tag}`}
        class={`px-3 py-1 rounded-full text-sm transition duration-300 ${
          currentTag === tag 
            ? 'bg-accent text-surface' 
            : 'bg-background text-text-secondary hover:bg-accent hover:text-surface'
        }`}
      >
        {tag}
      </a>
    ))}
  </div>
</aside>

<button id="sidebarToggle" class="fixed bottom-4 right-4 bg-accent text-surface p-2 rounded-full md:hidden">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
</button>

<script>
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebarToggle');

  sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
  });
</script>
```

## File: src/components/Header.astro

- Extension: .astro
- Language: unknown
- Size: 1280 bytes
- Created: 2024-09-09 15:54:49
- Modified: 2024-09-09 15:54:49

### Code

```unknown
---
import HeaderLink from './HeaderLink.astro';
---

<header class="bg-surface text-text-primary p-4 shadow-sm border-b-2 border-accent sticky top-0 z-10">
  <div class="container mx-auto flex justify-between items-center">
    <a href="/" class="text-2xl font-bold text-accent">My Knowledge Blog</a>
    <nav class="hidden md:block">
      <HeaderLink href="/blog">Blog</HeaderLink>
      <HeaderLink href="/about">About</HeaderLink>
      <HeaderLink href="/tags">Tags</HeaderLink>
    </nav>
    <button id="mobileMenuToggle" class="md:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>
  </div>
  <nav id="mobileMenu" class="hidden mt-4 md:hidden">
    <HeaderLink href="/blog">Blog</HeaderLink>
    <HeaderLink href="/about">About</HeaderLink>
    <HeaderLink href="/tags">Tags</HeaderLink>
  </nav>
</header>

<script>
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
</script>
```

## File: src/components/TagList.astro

- Extension: .astro
- Language: unknown
- Size: 369 bytes
- Created: 2024-09-09 11:51:41
- Modified: 2024-09-09 11:51:41

### Code

```unknown
---
// src/components/TagList.astro
interface Props {
  tags: string[];
}

const { tags } = Astro.props;
---

<div class="flex flex-wrap gap-2">
  {tags.map((tag) => (
    <a 
      href={`/tags/${tag}`} 
      class="bg-gray-200 px-3 py-2 rounded-full text-sm text-gray-700 hover:bg-gray-300 transition duration-300 ease-in-out"
    >
      {tag}
    </a>
  ))}
</div>
```

## File: src/components/HeaderLink.astro

- Extension: .astro
- Language: unknown
- Size: 529 bytes
- Created: 2024-09-09 11:08:29
- Modified: 2024-09-07 02:47:30

### Code

```unknown
---
import type { HTMLAttributes } from 'astro/types';

type Props = HTMLAttributes<'a'>;

const { href, class: className, ...props } = Astro.props;

const { pathname } = Astro.url;
const subpath = pathname.match(/[^\/]+/g);
const isActive = href === pathname || href === '/' + subpath?.[0];
---

<a href={href} class:list={[className, { active: isActive }]} {...props}>
	<slot />
</a>
<style>
	a {
		display: inline-block;
		text-decoration: none;
	}
	a.active {
		font-weight: bolder;
		text-decoration: underline;
	}
</style>

```

## File: src/components/FormattedDate.astro

- Extension: .astro
- Language: unknown
- Size: 223 bytes
- Created: 2024-09-09 15:58:22
- Modified: 2024-09-09 15:58:22

### Code

```unknown
---
interface Props {
  date: Date;
}

const { date } = Astro.props;
---

<time datetime={date.toISOString()}>
  {date.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })}
</time>
```

## File: src/components/RecentPosts.astro

- Extension: .astro
- Language: unknown
- Size: 600 bytes
- Created: 2024-09-09 12:29:02
- Modified: 2024-09-09 12:29:02

### Code

```unknown
---
// src/components/RecentPosts.astro
import FormattedDate from './FormattedDate.astro';

const { posts } = Astro.props;
---

<div>
  <h2 class="text-2xl font-bold text-secondary mb-4">Recent Posts</h2>
  <ul class="space-y-4">
    {posts.map((post) => (
      <li>
        <a 
          href={`/blog/${post.slug}/`} 
          class="block p-2 bg-white rounded-md hover:bg-accent hover:text-secondary transition duration-300"
        >
          <h3 class="font-semibold">{post.data.title}</h3>
          <FormattedDate date={post.data.pubDate} />
        </a>
      </li>
    ))}
  </ul>
</div>


```

## File: src/components/BaseHead.astro

- Extension: .astro
- Language: unknown
- Size: 1645 bytes
- Created: 2024-09-09 11:08:29
- Modified: 2024-09-07 02:47:30

### Code

```unknown
---
// Import the global.css file here so that it is included on
// all pages through the use of the <BaseHead /> component.
import '../styles/global.css';

interface Props {
	title: string;
	description: string;
	image?: string;
}

const canonicalURL = new URL(Astro.url.pathname, Astro.site);

const { title, description, image = '/blog-placeholder-1.jpg' } = Astro.props;
---

<!-- Global Metadata -->
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<meta name="generator" content={Astro.generator} />

<!-- Font preloads -->
<link rel="preload" href="/fonts/atkinson-regular.woff" as="font" type="font/woff" crossorigin />
<link rel="preload" href="/fonts/atkinson-bold.woff" as="font" type="font/woff" crossorigin />

<!-- Canonical URL -->
<link rel="canonical" href={canonicalURL} />

<!-- Primary Meta Tags -->
<title>{title}</title>
<meta name="title" content={title} />
<meta name="description" content={description} />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content={Astro.url} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={new URL(image, Astro.url)} />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content={Astro.url} />
<meta property="twitter:title" content={title} />
<meta property="twitter:description" content={description} />
<meta property="twitter:image" content={new URL(image, Astro.url)} />

```

## File: src/layouts/Layout.astro

- Extension: .astro
- Language: unknown
- Size: 566 bytes
- Created: 2024-09-09 15:52:14
- Modified: 2024-09-09 15:52:14

### Code

```unknown
---
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import '../styles/global.css';

const { title } = Astro.props;
---

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title} | My Knowledge Blog</title>
  </head>
  <body class="flex flex-col min-h-screen bg-background text-text-primary">
    <Header />
    <main class="flex-grow container mx-auto px-4 py-8">
      <slot />
    </main>
    <Footer />
  </body>
</html>
```

## File: src/layouts/BlogPost.astro

- Extension: .astro
- Language: unknown
- Size: 1101 bytes
- Created: 2024-09-09 16:04:58
- Modified: 2024-09-09 16:04:58

### Code

```unknown
---
import FormattedDate from '../components/FormattedDate.astro';
const { post } = Astro.props;
---

<article class="bg-surface p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
  <div class="md:flex md:space-x-4">
    {post.data.heroImage && (
      <img src={post.data.heroImage} alt="" class="w-full md:w-48 h-32 object-cover rounded-md mb-4 md:mb-0" />
    )}
    <div class="flex-1">
      <h2 class="text-xl font-bold mb-2">
        <a href={`/blog/${post.slug}/`} class="text-link hover:text-accent">
          {post.data.title}
        </a>
      </h2>
      <FormattedDate date={post.data.pubDate} />
      <p class="text-text-secondary mb-4">{post.data.description}</p>
      <div class="flex flex-wrap gap-2">
        {post.data.tags.map((tag) => (
          <a 
            href={`/blog?tag=${encodeURIComponent(tag)}`}
            class="bg-background text-text-secondary px-2 py-1 rounded-full text-xs hover:bg-accent hover:text-surface transition duration-300"
          >
            {tag}
          </a>
        ))}
      </div>
    </div>
  </div>
</article>
```

## File: src/pages/rss.xml.js

- Extension: .js
- Language: javascript
- Size: 404 bytes
- Created: 2024-09-09 11:08:29
- Modified: 2024-09-07 02:47:30

### Code

```javascript
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}

```

## File: src/pages/about.astro

- Extension: .astro
- Language: unknown
- Size: 1342 bytes
- Created: 2024-09-09 14:49:54
- Modified: 2024-09-09 14:49:54

### Code

```unknown
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="About Me">
  <div class="max-w-2xl mx-auto bg-surface p-8 rounded-lg shadow-md">
    <h1 class="text-4xl font-bold mb-6 text-accent">About Me</h1>
    <img src="/your-profile-image.jpg" alt="Your Name" class="w-64 h-64 rounded-full mx-auto mb-6 object-cover" />
    <p class="text-text-secondary mb-4">
      Hello! I'm [Your Name], a passionate [Your Profession/Interest] with a keen interest in [Your Specialties].
    </p>
    <p class="text-text-secondary mb-4">
      On this blog, I share my thoughts, experiences, and insights on [Blog Topics]. My goal is to [Your Blog's Purpose].
    </p>
    <h2 class="text-2xl font-semibold mb-4 text-text-primary">My Expertise</h2>
    <ul class="list-disc list-inside mb-4 text-text-secondary">
      <li>Expertise 1</li>
      <li>Expertise 2</li>
      <li>Expertise 3</li>
    </ul>
    <h2 class="text-2xl font-semibold mb-4 text-text-primary">Connect With Me</h2>
    <div class="flex space-x-4">
      <a href="https://twitter.com/yourusername" class="text-link hover:text-accent">Twitter</a>
      <a href="https://linkedin.com/in/yourusername" class="text-link hover:text-accent">LinkedIn</a>
      <a href="https://github.com/yourusername" class="text-link hover:text-accent">GitHub</a>
    </div>
  </div>
</Layout>
```

## File: src/pages/500.astro

- Extension: .astro
- Language: unknown
- Size: 487 bytes
- Created: 2024-09-09 12:11:06
- Modified: 2024-09-09 12:11:06

### Code

```unknown
---
// src/pages/500.astro
import Layout from '../layouts/Layout.astro';
---

<Layout title="Error">
  <div class="container mx-auto px-4 py-16 text-center">
    <h1 class="text-4xl font-bold mb-4">Oops! Something went wrong</h1>
    <p class="mb-8">We're sorry, but we're having trouble processing your request. Please try again later.</p>
    <a href="/" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Go back to homepage
    </a>
  </div>
</Layout
```

## File: src/pages/index.astro

- Extension: .astro
- Language: unknown
- Size: 1445 bytes
- Created: 2024-09-09 15:00:02
- Modified: 2024-09-09 15:00:02

### Code

```unknown
---
// src/pages/index.astro
import Layout from '../layouts/Layout.astro';
import { getCollection } from 'astro:content';
import FormattedDate from '../components/FormattedDate.astro';
import RecentPosts from '../components/RecentPosts.astro';

const posts = (await getCollection('blog')).sort(
  (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
);

const recentPosts = posts.slice(0, 5);
---

<Layout title="My Blog">
  <div class="flex flex-col md:flex-row">
    <main class="w-full md:w-2/3 p-4">
      <h1 class="text-4xl font-bold text-primary mb-8">Welcome to My Blog</h1>
      <div class="space-y-8">
        {posts.map((post) => (
          <article class="bg-white shadow-md rounded-lg overflow-hidden">
            <a href={`/blog/${post.slug}/`} class="block hover:bg-gray-50 transition duration-300">
              <img src={post.data.heroImage} alt="" class="w-full h-48 object-cover" />
              <div class="p-4">
                <h2 class="text-2xl font-semibold text-secondary mb-2">{post.data.title}</h2>
                <FormattedDate date={post.data.pubDate} />
                <p class="text-gray-600 mt-2">{post.data.description}</p>
              </div>
            </a>
          </article>
        ))}
      </div>
    </main>
    <aside class="w-full md:w-1/3 p-4 bg-gray-100">
      <div class="sticky top-4">
        <RecentPosts posts={recentPosts} />
      </div>
    </aside>
  </div>
</Layout>


```

## File: src/pages/404.astro

- Extension: .astro
- Language: unknown
- Size: 456 bytes
- Created: 2024-09-09 12:16:25
- Modified: 2024-09-09 12:16:25

### Code

```unknown
---
// src/pages/404.astro
import Layout from '../layouts/Layout.astro';
---

<Layout title="404: Not Found">
  <div class="container mx-auto px-4 py-16 text-center">
    <h1 class="text-4xl font-bold mb-4">404: Page Not Found</h1>
    <p class="mb-8">Sorry, we couldn't find the page you're looking for.</p>
    <a href="/" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Go back to homepage
    </a>
  </div>
</Layout>
```

## File: src/pages/tags/[tags].astro

- Extension: .astro
- Language: unknown
- Size: 777 bytes
- Created: 2024-09-09 11:31:57
- Modified: 2024-09-09 11:31:57

### Code

```unknown
---
import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import Layout from '../../layouts/Layout.astro';

export async function getStaticPaths() {
  const notes = await getCollection('notes');
  const tags = [...new Set(notes.flatMap(note => note.data.tags))];
  
  return tags.map(tag => ({
    params: { tag },
    props: { notes: notes.filter(note => note.data.tags.includes(tag)) },
  }));
}

interface Props {
  notes: CollectionEntry<'notes'>[];
}

const { tag } = Astro.params;
const { notes } = Astro.props;
---

<Layout title={`Notes tagged with ${tag}`}>
  <h1>Notes tagged with "{tag}"</h1>
  <ul>
    {notes.map(note => (
      <li><a href={`/notes/${note.slug}`}>{note.data.title}</a></li>
    ))}
  </ul>
</Layout>
```

## File: src/pages/tags/index.astro

- Extension: .astro
- Language: unknown
- Size: 597 bytes
- Created: 2024-09-09 12:06:53
- Modified: 2024-09-09 12:06:53

### Code

```unknown
---
// src/pages/tags/index.astro
import Layout from '../../layouts/Layout.astro';
import { getCollection } from 'astro:content';

const posts = await getCollection('blog');
const tags = [...new Set(posts.flatMap((post) => post.data.tags))];
---

<Layout title="Tags">
  <h1 class="text-4xl font-bold mb-8">Tags</h1>
  <div class="flex flex-wrap gap-4">
    {tags.map((tag) => (
      <a 
        href={`/tags/${tag}`}
        class="bg-gray-200 px-4 py-2 rounded-full text-gray-700 hover:bg-gray-300 transition duration-300 ease-in-out"
      >
        {tag}
      </a>
    ))}
  </div>
</Layout>
```

## File: src/pages/blog/[...slug].astro

- Extension: .astro
- Language: unknown
- Size: 1147 bytes
- Created: 2024-09-09 15:35:44
- Modified: 2024-09-09 15:35:44

### Code

```unknown
---
import { getCollection } from 'astro:content';
import Layout from '../../layouts/Layout.astro';
import FormattedDate from '../../components/FormattedDate.astro';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post,
  }));
}

const post = Astro.props;
const { Content } = await post.render();
---

<Layout title={post.data.title}>
  <article class="max-w-3xl mx-auto">
    <h1 class="text-4xl font-bold mb-2">{post.data.title}</h1>
    <FormattedDate date={post.data.pubDate} />
    {post.data.heroImage && <img src={post.data.heroImage} alt="" class="w-full h-auto my-8 rounded-lg shadow-md" />}
    <div class="prose prose-lg max-w-none mt-8">
      <Content />
    </div>
    <div class="mt-8 flex flex-wrap gap-2">
      {post.data.tags.map((tag) => (
        <a 
          href={`/blog?tag=${tag}`}
          class="bg-background text-text-secondary px-3 py-1 rounded-full text-sm hover:bg-accent hover:text-surface transition duration-300"
        >
          {tag}
        </a>
      ))}
    </div>
  </article>
</Layout>
```

## File: src/pages/blog/index.astro

- Extension: .astro
- Language: unknown
- Size: 1268 bytes
- Created: 2024-09-09 16:10:27
- Modified: 2024-09-09 16:10:27

### Code

```unknown
---
import { getCollection } from 'astro:content';
import Layout from '../../layouts/Layout.astro';
import BlogPost from '../../layouts/BlogPost.astro';
import Sidebar from '../../components/Sidebar.astro';

const allPosts = await getCollection('blog');
const allTags = [...new Set(allPosts.flatMap(post => post.data.tags))];

// Get the tag from the URL query parameter
const tag = Astro.url.searchParams.get('tag');

// Filter posts based on the tag
let filteredPosts = tag
  ? allPosts.filter(post => post.data.tags.includes(tag))
  : allPosts;

// Sort posts by date (most recent first)
filteredPosts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
---

<Layout title={tag ? `Posts tagged with ${tag}` : "Blog"}>
  <div class="flex flex-col md:flex-row md:space-x-8">
    <main class="w-full md:w-2/3">
      <h1 class="text-3xl font-bold mb-6">
        {tag ? `Posts tagged with "${tag}"` : "All Blog Posts"}
      </h1>
      {filteredPosts.length === 0 ? (
        <p>No posts found with this tag.</p>
      ) : (
        <div class="space-y-8">
          {filteredPosts.map((post) => (
            <BlogPost post={post} />
          ))}
        </div>
      )}
    </main>
    <Sidebar tags={allTags} currentTag={tag} />
  </div>
</Layout>
```

## File: src/content/config.ts

- Extension: .ts
- Language: typescript
- Size: 399 bytes
- Created: 2024-09-09 15:01:40
- Modified: 2024-09-09 15:01:40

### Code

```typescript
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  'blog': blogCollection,
};	
```

## File: src/content/blog/first-post.md

- Extension: .md
- Language: markdown
- Size: 3570 bytes
- Created: 2024-09-09 15:39:45
- Modified: 2024-09-09 15:39:45

### Code

```markdown
---
title: 'Markdown Style Guide'
description: 'Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.'
pubDate: 2024-06-19
heroImage: '/blog-placeholder-1.jpg'
tags: ['markdown']  # Add appropriate tags
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Adipiscing enim eu turpis egestas pretium. Euismod elementum nisi quis eleifend quam adipiscing. In hac habitasse platea dictumst vestibulum. Sagittis purus sit amet volutpat. Netus et malesuada fames ac turpis egestas. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem. Varius sit amet mattis vulputate enim. Habitasse platea dictumst quisque sagittis. Integer quis auctor elit sed vulputate mi. Dictumst quisque sagittis purus sit amet.

Morbi tristique senectus et netus. Id semper risus in hendrerit gravida rutrum quisque non tellus. Habitasse platea dictumst quisque sagittis purus sit amet. Tellus molestie nunc non blandit massa. Cursus vitae congue mauris rhoncus. Accumsan tortor posuere ac ut. Fringilla urna porttitor rhoncus dolor. Elit ullamcorper dignissim cras tincidunt lobortis. In cursus turpis massa tincidunt dui ut ornare lectus. Integer feugiat scelerisque varius morbi enim nunc. Bibendum neque egestas congue quisque egestas diam. Cras ornare arcu dui vivamus arcu felis bibendum. Dignissim suspendisse in est ante in nibh mauris. Sed tempus urna et pharetra pharetra massa massa ultricies mi.

Mollis nunc sed id semper risus in. Convallis a cras semper auctor neque. Diam sit amet nisl suscipit. Lacus viverra vitae congue eu consequat ac felis donec. Egestas integer eget aliquet nibh praesent tristique magna sit amet. Eget magna fermentum iaculis eu non diam. In vitae turpis massa sed elementum. Tristique et egestas quis ipsum suspendisse ultrices. Eget lorem dolor sed viverra ipsum. Vel turpis nunc eget lorem dolor sed viverra. Posuere ac ut consequat semper viverra nam. Laoreet suspendisse interdum consectetur libero id faucibus. Diam phasellus vestibulum lorem sed risus ultricies tristique. Rhoncus dolor purus non enim praesent elementum facilisis. Ultrices tincidunt arcu non sodales neque. Tempus egestas sed sed risus pretium quam vulputate. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Fringilla urna porttitor rhoncus dolor purus non. Amet dictum sit amet justo donec enim.

Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Tortor posuere ac ut consequat semper viverra. Tellus mauris a diam maecenas sed enim ut sem viverra. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Arcu ac tortor dignissim convallis aenean et tortor at. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor. Egestas tellus rutrum tellus pellentesque eu. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Id donec ultrices tincidunt arcu. Id cursus metus aliquam eleifend mi.

Tempus quam pellentesque nec nam aliquam sem. Risus at ultrices mi tempus imperdiet. Id porta nibh venenatis cras sed felis eget velit. Ipsum a arcu cursus vitae. Facilisis magna etiam tempor orci eu lobortis elementum. Tincidunt dui ut ornare lectus sit. Quisque non tellus orci ac. Blandit libero volutpat sed cras. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Egestas integer eget aliquet nibh praesent tristique magna.

```

## File: src/content/blog/markdown-style-guide.md

- Extension: .md
- Language: markdown
- Size: 4796 bytes
- Created: 2024-09-09 14:26:08
- Modified: 2024-09-09 14:26:08

### Code

```markdown
---
title: 'Markdown Style Guide'
description: 'Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.'
pubDate: 2024-06-19
heroImage: '/blog-placeholder-1.jpg'
tags: ['markdown', 'blogging']  # Add appropriate tags
---

Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.

## Headings

The following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Paragraph

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Images

### Syntax

```markdown
![Alt text](./full/or/relative/path/of/image)
```

### Output

![blog placeholder](/blog-placeholder-about.jpg)

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

### Blockquote without attribution

#### Syntax

```markdown
> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use _Markdown syntax_ within a blockquote.
```

#### Output

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use _Markdown syntax_ within a blockquote.

### Blockquote with attribution

#### Syntax

```markdown
> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>
```

#### Output

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tables

### Syntax

```markdown
| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |
```

### Output

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |

## Code Blocks

### Syntax

we can use 3 backticks ``` in new line and write snippet and close with 3 backticks on new line and to highlight language specific syntax, write one word of language name after first 3 backticks, for eg. html, javascript, css, markdown, typescript, txt, bash

````markdown
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```
````

### Output

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

## List Types

### Ordered List

#### Syntax

```markdown
1. First item
2. Second item
3. Third item
```

#### Output

1. First item
2. Second item
3. Third item

### Unordered List

#### Syntax

```markdown
- List item
- Another item
- And another item
```

#### Output

- List item
- Another item
- And another item

### Nested list

#### Syntax

```markdown
- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese
```

#### Output

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

## Other Elements — abbr, sub, sup, kbd, mark

### Syntax

```markdown
<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
```

### Output

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.

```

## File: src/content/blog/using-mdx.mdx

- Extension: .mdx
- Language: unknown
- Size: 1616 bytes
- Created: 2024-09-09 14:31:31
- Modified: 2024-09-09 14:31:31

### Code

```unknown
---
title: 'Using MDX'
description: 'Lorem ipsum dolor sit amet'
pubDate: 2024-06-01
heroImage: '/blog-placeholder-5.jpg'
tags: ['mdx', 'astro', 'blogging']
---

This theme comes with the [@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/) integration installed and configured in your `astro.config.mjs` config file. If you prefer not to use MDX, you can disable support by removing the integration from your config file.

## Why MDX?

MDX is a special flavor of Markdown that supports embedded JavaScript & JSX syntax. This unlocks the ability to [mix JavaScript and UI Components into your Markdown content](https://docs.astro.build/en/guides/markdown-content/#mdx-features) for things like interactive charts or alerts.

If you have existing content authored in MDX, this integration will hopefully make migrating to Astro a breeze.

## Example

Here is how you import and use a UI component inside of MDX.  
When you open this page in the browser, you should see the clickable button below.

import HeaderLink from '../../components/HeaderLink.astro';

<HeaderLink href="#" onclick="alert('clicked!')">
	Embedded component in MDX
</HeaderLink>

## More Links

- [MDX Syntax Documentation](https://mdxjs.com/docs/what-is-mdx)
- [Astro Usage Documentation](https://docs.astro.build/en/guides/markdown-content/#markdown-and-mdx-pages)
- **Note:** [Client Directives](https://docs.astro.build/en/reference/directives-reference/#client-directives) are still required to create interactive components. Otherwise, all components in your MDX will render as static HTML (no JavaScript) by default.

```

