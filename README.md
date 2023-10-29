# React Suspense Loader

A fully flexible React Suspense fallback Loader which uses Tailwind to render high quality css skeletons.

**Motivation**

Skeleton screens are a technique used to improve the user experience while content is loading. They show a rough layout of the content that is about to appear, which gives the user a sense of progress. This technique can make the loading process feel faster and more engaging.

More information can be found here - https://www.uxdesigninstitute.com/blog/whats-a-skeleton-screen/

This library provides a default set of fallback loaders inspired by flowbite (https://flowbite.com/) and tailwind css (https://tailwindcss.com/)

**Quick Start**

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

**Usage**

_SuspenseLoaderFlex_ applies flex styles by default on parent layout component.

```
 <SuspenseLoaderFlex count={1} type="card">
        <AsyncComponent />
  </SuspenseLoaderFlex>
```

_SuspenseLoader_ allows more customizations in styling layout.

```
 <SuspenseFlex count={1} type="card" layoutClassName="grid gap-5">
        <AsyncComponent />
  </SuspenseFlex>
```

**Props**

_count_ - Provide the number of repetitions needed. Defaults to 1.
_type_ - Accepts the type of fallback skelelton (Optional). Accepts "video" | "image" | "card" | "list". Leaving it empty will load default loader skeleton.
_layoutClassName_ - CSS/Tailwind class names for the parent layout component.
_placeholderClassName_ - CSS/Tailwind class names for the repeating child components.

**Demos**

Coming soon
