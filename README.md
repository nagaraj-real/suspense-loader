# React Suspense Loader

A fully flexible React Suspense fallback Loader which uses Tailwind to render high quality css skeletons.

**Motivation** :gem:

Skeleton screens are a technique used to improve the user experience while content is loading. They show a rough layout of the content that is about to appear, which gives the user a sense of progress. This technique can make the loading process feel faster and more engaging.

More information can be found here - [What's a skeleton screen ?](https://www.uxdesigninstitute.com/blog/whats-a-skeleton-screen/)

This library provides a default set of fallback loaders inspired by [Flowbite](https://flowbite.com/) and [Tailwind](https://tailwindcss.com/)

<hr/>

**Quick Start** :rocket:

_Pre-requisites_
The library is compatible with all React + Tailwind projects.

Install package suspense-loader (https://www.npmjs.com/package/suspense-loader)

```
npm i suspense-loader
```

Update tailwind.config.js file

```
  content: [
    .....
    "./node_modules/suspense-loader/dist/**/*.{js,ts,jsx,tsx}",
  ],
```
<hr/>

**Usage** :book:

_SuspenseLoaderFlex_ applies flex styles by default on parent layout component.

```
 <SuspenseLoaderFlex count={1} type="card">
        <AsyncComponent />
  </SuspenseLoaderFlex>
```

Use _SuspenseLoader_ if more customizations are needed in styling layout.

```
 <SuspenseLoader count={1} type="card" layoutClassName="grid gap-5">
        <AsyncComponent />
  </SuspenseLoader>
```

**Props**

All props are optional.

<p> count - Provide the number of repetitions needed. Defaults to 1.</p>
<p> type - Accepts the type of fallback skeleton. Accepts "video" | "image" | "card" | "list"| ""</p>
<p> layoutClassName - CSS/Tailwind class names for the parent layout component.</p>
<p> placeholderClassName - CSS/Tailwind class names for the repeating child components. </p>

<hr/>

**Demos**

Coming soon
