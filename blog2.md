# Table of Contents
- src/consts.ts
- src/env.d.ts
- src/styles/global.css
- src/components/Footer.astro
- src/components/Header.astro
- src/components/TagList.astro
- src/components/HeaderLink.astro
- src/components/FormattedDate.astro
- src/components/BaseHead.astro
- src/layouts/Layout.astro
- src/layouts/BlogPost.astro
- src/pages/rss.xml.js
- src/pages/about.astro
- src/pages/index.astro
- src/pages/tags/[tags].astro
- src/pages/blog/[...slug].astro
- src/pages/blog/index.astro
- src/content/config.ts
- src/content/blog/second-post.md
- src/content/blog/first-post.md
- src/content/blog/markdown-style-guide.md
- src/content/blog/third-post.md
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

## File: src/styles/global.css

- Extension: .css
- Language: unknown
- Size: 706 bytes
- Created: 2024-09-09 11:47:14
- Modified: 2024-09-09 11:47:14

### Code

```unknown
/* src/styles/global.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Add any global styles here */
@layer base {
  html {
    font-size: 16px;
  }

  body {
    @apply text-base leading-relaxed;
  }

  h1 {
    @apply text-2xl md:text-3xl lg:text-4xl font-bold mb-4;
  }

  h2 {
    @apply text-xl md:text-2xl lg:text-3xl font-semibold mb-3;
  }
}

@layer components {
  .btn, a, button, input[type="submit"] {
    @apply min-h-[44px] min-w-[44px] p-2;
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
- Size: 184 bytes
- Created: 2024-09-09 11:38:29
- Modified: 2024-09-09 11:38:29

### Code

```unknown
---
---
<footer class="bg-gray-800 text-white p-4 mt-8">
  <div class="container mx-auto text-center">
    <p>&copy; 2024 My Knowledge Blog. All rights reserved.</p>
  </div>
</footer>
```

## File: src/components/Header.astro

- Extension: .astro
- Language: unknown
- Size: 1554 bytes
- Created: 2024-09-09 11:53:03
- Modified: 2024-09-09 11:53:03

### Code

```unknown
---
// src/components/Header.astro
---
<header class="bg-gray-800 text-white p-4">
	<div class="container mx-auto flex justify-between items-center">
	  <a href="/" class="text-2xl font-bold">My Knowledge Blog</a>
	  <nav class="hidden md:block">
		<ul class="flex space-x-4">
		  <li><a href="/notes/rl">RL Notes</a></li>
		  <li><a href="/notes/ml">ML Notes</a></li>
		  <li><a href="/notes/statistics">Statistics</a></li>
		  <li><a href="/notes/algorithms">Algorithms</a></li>
		  <li><a href="/search">Search</a></li>
		</ul>
	  </nav>
	  <button id="menu-toggle" class="md:hidden">
		<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
		</svg>
	  </button>
	</div>
	<nav id="mobile-menu" class="hidden md:hidden">
	  <ul class="flex flex-col space-y-2 mt-4">
		<li><a href="/notes/rl">RL Notes</a></li>
		<li><a href="/notes/ml">ML Notes</a></li>
		<li><a href="/notes/statistics">Statistics</a></li>
		<li><a href="/notes/algorithms">Algorithms</a></li>
		<li><a href="/search">Search</a></li>
	  </ul>
	</nav>
  </header>
  
  <script>
	document.addEventListener('DOMContentLoaded', function() {
	  const menuToggle = document.getElementById('menu-toggle');
	  const mobileMenu = document.getElementById('mobile-menu');
	  
	  if (menuToggle && mobileMenu) {
		menuToggle.addEventListener('click', () => {
		  mobileMenu.classList.toggle('hidden');
		});
	  }
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
- Size: 224 bytes
- Created: 2024-09-09 11:08:29
- Modified: 2024-09-07 02:47:30

### Code

```unknown
---
interface Props {
	date: Date;
}

const { date } = Astro.props;
---

<time datetime={date.toISOString()}>
	{
		date.toLocaleDateString('en-us', {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
		})
	}
</time>

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
- Size: 739 bytes
- Created: 2024-09-09 11:49:39
- Modified: 2024-09-09 11:49:39

### Code

```unknown
---
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import '../styles/global.css';

interface Props {
  title: string;
}

const { title } = Astro.props;
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css">
  </head>
  <body class="flex flex-col min-h-screen">
    <Header />
    <main class="container mx-auto px-4 py-8 flex-grow">
      <div class="max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">
        <slot />
      </div>
    </main>
    <Footer />
  </body>
</html>
```

## File: src/layouts/BlogPost.astro

- Extension: .astro
- Language: unknown
- Size: 1753 bytes
- Created: 2024-09-09 11:08:29
- Modified: 2024-09-07 02:47:30

### Code

```unknown
---
import type { CollectionEntry } from 'astro:content';
import BaseHead from '../components/BaseHead.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import FormattedDate from '../components/FormattedDate.astro';

type Props = CollectionEntry<'blog'>['data'];

const { title, description, pubDate, updatedDate, heroImage } = Astro.props;
---

<html lang="en">
	<head>
		<BaseHead title={title} description={description} />
		<style>
			main {
				width: calc(100% - 2em);
				max-width: 100%;
				margin: 0;
			}
			.hero-image {
				width: 100%;
			}
			.hero-image img {
				display: block;
				margin: 0 auto;
				border-radius: 12px;
				box-shadow: var(--box-shadow);
			}
			.prose {
				width: 720px;
				max-width: calc(100% - 2em);
				margin: auto;
				padding: 1em;
				color: rgb(var(--gray-dark));
			}
			.title {
				margin-bottom: 1em;
				padding: 1em 0;
				text-align: center;
				line-height: 1;
			}
			.title h1 {
				margin: 0 0 0.5em 0;
			}
			.date {
				margin-bottom: 0.5em;
				color: rgb(var(--gray));
			}
			.last-updated-on {
				font-style: italic;
			}
		</style>
	</head>

	<body>
		<Header />
		<main>
			<article>
				<div class="hero-image">
					{heroImage && <img width={1020} height={510} src={heroImage} alt="" />}
				</div>
				<div class="prose">
					<div class="title">
						<div class="date">
							<FormattedDate date={pubDate} />
							{
								updatedDate && (
									<div class="last-updated-on">
										Last updated on <FormattedDate date={updatedDate} />
									</div>
								)
							}
						</div>
						<h1>{title}</h1>
						<hr />
					</div>
					<slot />
				</div>
			</article>
		</main>
		<Footer />
	</body>
</html>

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
- Size: 3657 bytes
- Created: 2024-09-09 11:08:29
- Modified: 2024-09-07 02:47:30

### Code

```unknown
---
import Layout from '../layouts/BlogPost.astro';
---

<Layout
	title="About Me"
	description="Lorem ipsum dolor sit amet"
	pubDate={new Date('August 08 2021')}
	heroImage="/blog-placeholder-about.jpg"
>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc vel risus commodo
		viverra. Adipiscing enim eu turpis egestas pretium. Euismod elementum nisi quis eleifend quam
		adipiscing. In hac habitasse platea dictumst vestibulum. Sagittis purus sit amet volutpat. Netus
		et malesuada fames ac turpis egestas. Eget magna fermentum iaculis eu non diam phasellus
		vestibulum lorem. Varius sit amet mattis vulputate enim. Habitasse platea dictumst quisque
		sagittis. Integer quis auctor elit sed vulputate mi. Dictumst quisque sagittis purus sit amet.
	</p>

	<p>
		Morbi tristique senectus et netus. Id semper risus in hendrerit gravida rutrum quisque non
		tellus. Habitasse platea dictumst quisque sagittis purus sit amet. Tellus molestie nunc non
		blandit massa. Cursus vitae congue mauris rhoncus. Accumsan tortor posuere ac ut. Fringilla urna
		porttitor rhoncus dolor. Elit ullamcorper dignissim cras tincidunt lobortis. In cursus turpis
		massa tincidunt dui ut ornare lectus. Integer feugiat scelerisque varius morbi enim nunc.
		Bibendum neque egestas congue quisque egestas diam. Cras ornare arcu dui vivamus arcu felis
		bibendum. Dignissim suspendisse in est ante in nibh mauris. Sed tempus urna et pharetra pharetra
		massa massa ultricies mi.
	</p>

	<p>
		Mollis nunc sed id semper risus in. Convallis a cras semper auctor neque. Diam sit amet nisl
		suscipit. Lacus viverra vitae congue eu consequat ac felis donec. Egestas integer eget aliquet
		nibh praesent tristique magna sit amet. Eget magna fermentum iaculis eu non diam. In vitae
		turpis massa sed elementum. Tristique et egestas quis ipsum suspendisse ultrices. Eget lorem
		dolor sed viverra ipsum. Vel turpis nunc eget lorem dolor sed viverra. Posuere ac ut consequat
		semper viverra nam. Laoreet suspendisse interdum consectetur libero id faucibus. Diam phasellus
		vestibulum lorem sed risus ultricies tristique. Rhoncus dolor purus non enim praesent elementum
		facilisis. Ultrices tincidunt arcu non sodales neque. Tempus egestas sed sed risus pretium quam
		vulputate. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Fringilla
		urna porttitor rhoncus dolor purus non. Amet dictum sit amet justo donec enim.
	</p>

	<p>
		Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Tortor posuere ac ut consequat semper
		viverra. Tellus mauris a diam maecenas sed enim ut sem viverra. Venenatis urna cursus eget nunc
		scelerisque viverra mauris in. Arcu ac tortor dignissim convallis aenean et tortor at. Curabitur
		gravida arcu ac tortor dignissim convallis aenean et tortor. Egestas tellus rutrum tellus
		pellentesque eu. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Ut enim
		blandit volutpat maecenas volutpat blandit aliquam etiam. Id donec ultrices tincidunt arcu. Id
		cursus metus aliquam eleifend mi.
	</p>

	<p>
		Tempus quam pellentesque nec nam aliquam sem. Risus at ultrices mi tempus imperdiet. Id porta
		nibh venenatis cras sed felis eget velit. Ipsum a arcu cursus vitae. Facilisis magna etiam
		tempor orci eu lobortis elementum. Tincidunt dui ut ornare lectus sit. Quisque non tellus orci
		ac. Blandit libero volutpat sed cras. Nec tincidunt praesent semper feugiat nibh sed pulvinar
		proin gravida. Egestas integer eget aliquet nibh praesent tristique magna.
	</p>
</Layout>

```

## File: src/pages/index.astro

- Extension: .astro
- Language: unknown
- Size: 1948 bytes
- Created: 2024-09-09 11:08:29
- Modified: 2024-09-07 02:47:30

### Code

```unknown
---
import BaseHead from '../components/BaseHead.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
---

<!doctype html>
<html lang="en">
	<head>
		<BaseHead title={SITE_TITLE} description={SITE_DESCRIPTION} />
	</head>
	<body>
		<Header />
		<main>
			<h1>🧑‍🚀 Hello, Astronaut!</h1>
			<p>
				Welcome to the official <a href="https://astro.build/">Astro</a> blog starter template. This
				template serves as a lightweight, minimally-styled starting point for anyone looking to build
				a personal website, blog, or portfolio with Astro.
			</p>
			<p>
				This template comes with a few integrations already configured in your
				<code>astro.config.mjs</code> file. You can customize your setup with
				<a href="https://astro.build/integrations">Astro Integrations</a> to add tools like Tailwind,
				React, or Vue to your project.
			</p>
			<p>Here are a few ideas on how to get started with the template:</p>
			<ul>
				<li>Edit this page in <code>src/pages/index.astro</code></li>
				<li>Edit the site header items in <code>src/components/Header.astro</code></li>
				<li>Add your name to the footer in <code>src/components/Footer.astro</code></li>
				<li>Check out the included blog posts in <code>src/content/blog/</code></li>
				<li>Customize the blog post page layout in <code>src/layouts/BlogPost.astro</code></li>
			</ul>
			<p>
				Have fun! If you get stuck, remember to <a href="https://docs.astro.build/"
					>read the docs
				</a> or <a href="https://astro.build/chat">join us on Discord</a> to ask questions.
			</p>
			<p>
				Looking for a blog template with a bit more personality? Check out <a
					href="https://github.com/Charca/astro-blog-template"
					>astro-blog-template
				</a> by <a href="https://twitter.com/Charca">Maxi Ferreira</a>.
			</p>
		</main>
		<Footer />
	</body>
</html>

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

## File: src/pages/blog/[...slug].astro

- Extension: .astro
- Language: unknown
- Size: 978 bytes
- Created: 2024-09-09 11:29:49
- Modified: 2024-09-09 11:29:49

### Code

```unknown
---
import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import Layout from '../../layouts/Layout.astro';
import TagList from '../../components/TagList.astro';

export async function getStaticPaths() {
  const notes = await getCollection('notes');
  return notes.map((note) => ({
    params: { slug: note.slug },
    props: { note },
  }));
}

interface Props {
  note: CollectionEntry<'notes'>;
}

const { note } = Astro.props;
const { Content } = await note.render();
---

<Layout title={note.data.title}>
  <article>
    <h1>{note.data.title}</h1>
    <p>Published on: {note.data.pubDate.toLocaleDateString()}</p>
    <TagList tags={note.data.tags} />
    <Content />
  </article>
</Layout>

<style is:global>
  /* Styles for syntax highlighting */
  pre[class*="language-"] {
    @apply p-4 rounded-md overflow-x-auto;
  }
  
  /* Styles for LaTeX rendering */
  .katex-display {
    @apply overflow-x-auto py-2;
  }
</style>

```

## File: src/pages/blog/index.astro

- Extension: .astro
- Language: unknown
- Size: 2178 bytes
- Created: 2024-09-09 11:08:29
- Modified: 2024-09-07 02:47:30

### Code

```unknown
---
import BaseHead from '../../components/BaseHead.astro';
import Header from '../../components/Header.astro';
import Footer from '../../components/Footer.astro';
import { SITE_TITLE, SITE_DESCRIPTION } from '../../consts';
import { getCollection } from 'astro:content';
import FormattedDate from '../../components/FormattedDate.astro';

const posts = (await getCollection('blog')).sort(
	(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
);
---

<!doctype html>
<html lang="en">
	<head>
		<BaseHead title={SITE_TITLE} description={SITE_DESCRIPTION} />
		<style>
			main {
				width: 960px;
			}
			ul {
				display: flex;
				flex-wrap: wrap;
				gap: 2rem;
				list-style-type: none;
				margin: 0;
				padding: 0;
			}
			ul li {
				width: calc(50% - 1rem);
			}
			ul li * {
				text-decoration: none;
				transition: 0.2s ease;
			}
			ul li:first-child {
				width: 100%;
				margin-bottom: 1rem;
				text-align: center;
			}
			ul li:first-child img {
				width: 100%;
			}
			ul li:first-child .title {
				font-size: 2.369rem;
			}
			ul li img {
				margin-bottom: 0.5rem;
				border-radius: 12px;
			}
			ul li a {
				display: block;
			}
			.title {
				margin: 0;
				color: rgb(var(--black));
				line-height: 1;
			}
			.date {
				margin: 0;
				color: rgb(var(--gray));
			}
			ul li a:hover h4,
			ul li a:hover .date {
				color: rgb(var(--accent));
			}
			ul a:hover img {
				box-shadow: var(--box-shadow);
			}
			@media (max-width: 720px) {
				ul {
					gap: 0.5em;
				}
				ul li {
					width: 100%;
					text-align: center;
				}
				ul li:first-child {
					margin-bottom: 0;
				}
				ul li:first-child .title {
					font-size: 1.563em;
				}
			}
		</style>
	</head>
	<body>
		<Header />
		<main>
			<section>
				<ul>
					{
						posts.map((post) => (
							<li>
								<a href={`/blog/${post.slug}/`}>
									<img width={720} height={360} src={post.data.heroImage} alt="" />
									<h4 class="title">{post.data.title}</h4>
									<p class="date">
										<FormattedDate date={post.data.pubDate} />
									</p>
								</a>
							</li>
						))
					}
				</ul>
			</section>
		</main>
		<Footer />
	</body>
</html>

```

## File: src/content/config.ts

- Extension: .ts
- Language: typescript
- Size: 373 bytes
- Created: 2024-09-09 11:27:48
- Modified: 2024-09-09 11:27:48

### Code

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const notesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()),
    category: z.enum(['rl', 'ml', 'statistics', 'algorithms']),
  }),
});

export const collections = {
  'notes': notesCollection,
};
```

## File: src/content/blog/second-post.md

- Extension: .md
- Language: markdown
- Size: 3444 bytes
- Created: 2024-09-09 11:08:29
- Modified: 2024-09-07 02:47:30

### Code

```markdown
---
title: 'Second post'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 15 2022'
heroImage: '/blog-placeholder-4.jpg'
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Adipiscing enim eu turpis egestas pretium. Euismod elementum nisi quis eleifend quam adipiscing. In hac habitasse platea dictumst vestibulum. Sagittis purus sit amet volutpat. Netus et malesuada fames ac turpis egestas. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem. Varius sit amet mattis vulputate enim. Habitasse platea dictumst quisque sagittis. Integer quis auctor elit sed vulputate mi. Dictumst quisque sagittis purus sit amet.

Morbi tristique senectus et netus. Id semper risus in hendrerit gravida rutrum quisque non tellus. Habitasse platea dictumst quisque sagittis purus sit amet. Tellus molestie nunc non blandit massa. Cursus vitae congue mauris rhoncus. Accumsan tortor posuere ac ut. Fringilla urna porttitor rhoncus dolor. Elit ullamcorper dignissim cras tincidunt lobortis. In cursus turpis massa tincidunt dui ut ornare lectus. Integer feugiat scelerisque varius morbi enim nunc. Bibendum neque egestas congue quisque egestas diam. Cras ornare arcu dui vivamus arcu felis bibendum. Dignissim suspendisse in est ante in nibh mauris. Sed tempus urna et pharetra pharetra massa massa ultricies mi.

Mollis nunc sed id semper risus in. Convallis a cras semper auctor neque. Diam sit amet nisl suscipit. Lacus viverra vitae congue eu consequat ac felis donec. Egestas integer eget aliquet nibh praesent tristique magna sit amet. Eget magna fermentum iaculis eu non diam. In vitae turpis massa sed elementum. Tristique et egestas quis ipsum suspendisse ultrices. Eget lorem dolor sed viverra ipsum. Vel turpis nunc eget lorem dolor sed viverra. Posuere ac ut consequat semper viverra nam. Laoreet suspendisse interdum consectetur libero id faucibus. Diam phasellus vestibulum lorem sed risus ultricies tristique. Rhoncus dolor purus non enim praesent elementum facilisis. Ultrices tincidunt arcu non sodales neque. Tempus egestas sed sed risus pretium quam vulputate. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Fringilla urna porttitor rhoncus dolor purus non. Amet dictum sit amet justo donec enim.

Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Tortor posuere ac ut consequat semper viverra. Tellus mauris a diam maecenas sed enim ut sem viverra. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Arcu ac tortor dignissim convallis aenean et tortor at. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor. Egestas tellus rutrum tellus pellentesque eu. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Id donec ultrices tincidunt arcu. Id cursus metus aliquam eleifend mi.

Tempus quam pellentesque nec nam aliquam sem. Risus at ultrices mi tempus imperdiet. Id porta nibh venenatis cras sed felis eget velit. Ipsum a arcu cursus vitae. Facilisis magna etiam tempor orci eu lobortis elementum. Tincidunt dui ut ornare lectus sit. Quisque non tellus orci ac. Blandit libero volutpat sed cras. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Egestas integer eget aliquet nibh praesent tristique magna.

```

## File: src/content/blog/first-post.md

- Extension: .md
- Language: markdown
- Size: 3443 bytes
- Created: 2024-09-09 11:08:29
- Modified: 2024-09-07 02:47:30

### Code

```markdown
---
title: 'First post'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
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
- Size: 4744 bytes
- Created: 2024-09-09 11:08:29
- Modified: 2024-09-07 02:47:30

### Code

```markdown
---
title: 'Markdown Style Guide'
description: 'Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.'
pubDate: 'Jun 19 2024'
heroImage: '/blog-placeholder-1.jpg'
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

## File: src/content/blog/third-post.md

- Extension: .md
- Language: markdown
- Size: 3443 bytes
- Created: 2024-09-09 11:08:29
- Modified: 2024-09-07 02:47:30

### Code

```markdown
---
title: 'Third post'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 22 2022'
heroImage: '/blog-placeholder-2.jpg'
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Adipiscing enim eu turpis egestas pretium. Euismod elementum nisi quis eleifend quam adipiscing. In hac habitasse platea dictumst vestibulum. Sagittis purus sit amet volutpat. Netus et malesuada fames ac turpis egestas. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem. Varius sit amet mattis vulputate enim. Habitasse platea dictumst quisque sagittis. Integer quis auctor elit sed vulputate mi. Dictumst quisque sagittis purus sit amet.

Morbi tristique senectus et netus. Id semper risus in hendrerit gravida rutrum quisque non tellus. Habitasse platea dictumst quisque sagittis purus sit amet. Tellus molestie nunc non blandit massa. Cursus vitae congue mauris rhoncus. Accumsan tortor posuere ac ut. Fringilla urna porttitor rhoncus dolor. Elit ullamcorper dignissim cras tincidunt lobortis. In cursus turpis massa tincidunt dui ut ornare lectus. Integer feugiat scelerisque varius morbi enim nunc. Bibendum neque egestas congue quisque egestas diam. Cras ornare arcu dui vivamus arcu felis bibendum. Dignissim suspendisse in est ante in nibh mauris. Sed tempus urna et pharetra pharetra massa massa ultricies mi.

Mollis nunc sed id semper risus in. Convallis a cras semper auctor neque. Diam sit amet nisl suscipit. Lacus viverra vitae congue eu consequat ac felis donec. Egestas integer eget aliquet nibh praesent tristique magna sit amet. Eget magna fermentum iaculis eu non diam. In vitae turpis massa sed elementum. Tristique et egestas quis ipsum suspendisse ultrices. Eget lorem dolor sed viverra ipsum. Vel turpis nunc eget lorem dolor sed viverra. Posuere ac ut consequat semper viverra nam. Laoreet suspendisse interdum consectetur libero id faucibus. Diam phasellus vestibulum lorem sed risus ultricies tristique. Rhoncus dolor purus non enim praesent elementum facilisis. Ultrices tincidunt arcu non sodales neque. Tempus egestas sed sed risus pretium quam vulputate. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Fringilla urna porttitor rhoncus dolor purus non. Amet dictum sit amet justo donec enim.

Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Tortor posuere ac ut consequat semper viverra. Tellus mauris a diam maecenas sed enim ut sem viverra. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Arcu ac tortor dignissim convallis aenean et tortor at. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor. Egestas tellus rutrum tellus pellentesque eu. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Id donec ultrices tincidunt arcu. Id cursus metus aliquam eleifend mi.

Tempus quam pellentesque nec nam aliquam sem. Risus at ultrices mi tempus imperdiet. Id porta nibh venenatis cras sed felis eget velit. Ipsum a arcu cursus vitae. Facilisis magna etiam tempor orci eu lobortis elementum. Tincidunt dui ut ornare lectus sit. Quisque non tellus orci ac. Blandit libero volutpat sed cras. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Egestas integer eget aliquet nibh praesent tristique magna.

```

## File: src/content/blog/using-mdx.mdx

- Extension: .mdx
- Language: unknown
- Size: 1584 bytes
- Created: 2024-09-09 11:08:29
- Modified: 2024-09-07 02:47:30

### Code

```unknown
---
title: 'Using MDX'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jun 01 2024'
heroImage: '/blog-placeholder-5.jpg'
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

