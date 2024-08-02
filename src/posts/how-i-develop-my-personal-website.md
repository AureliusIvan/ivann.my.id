_title: How I Develop My Personal Website
_description: I'm working on a personal website and I'm documenting my process
_date: 08-06-2023
_tags: website, nextjs, tailwindcss, mdx, react, nginx, digitalocean, github-actions, vercel

## Introduction

I've been working on my personal website for a while now and I'm documenting my process here.
I'm using a combination of technologies to build the site and I'm also using some tools to automate the deployment
process.
I'm using Next.js, Tailwind CSS, and MDX to build the site. I'm also using React for the frontend and Nginx for the
server.
I'm hosting the site on DigitalOcean and using GitHub Actions to automate the deployment process.
I'm also using Vercel for preview deployments.

## Setting Up The Project

## Building The Site

## Wait, what is SSR!?

Starting on Next.js 12, you can now choose between Server Side Rendering (SSR) and Static Site Generation (SSG) on a
per-page basis.
This is a great feature because it allows you to choose the best rendering method for each page of your site.

```javascript
"use server";
```

...and for the client side rendering:

```javascript
"use client";
```

Which will allow us to use some web APIs that are not available on the server side.

## Deployment

## Final Result

(END)

## Also check out my other posts:

- [How I Built My Personal Blog](/post/how-i-develop-my-personal-website)

## References:

- [Next.js](https://nextjs.org/)