# Musketeer's Design System

Wiki: https://github.com/smartive-education/design-system-component-library-musketeers/wiki

Agile Board (Trello): https://trello.com/b/BK3h5ADR/mumble

## Overview

Musketeers's Design System is a Storybook / Tailwind based React Component Library.
The latest published Storybook version is available here: https://smartive-education.github.io/design-system-component-library-musketeers

## How To Use The Library In Your React/Next.js Project

### Package Installation

In order to make use of this design system you have to follow these setup steps.

### 1. Design System installation

Before we can install the design system package we need to make sure we have the correct authentication setup in order to access the repository.

Setup a .npmrc file in the root of your repository and paste following lines into it.

Replace the {{TOKEN}} with your personal token.

```bash
@smartive-education:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken={{TOKEN}}
```

This will make the design system available in your repository

```bash
npm install @smartive-education/design-system-component-library-musketeers
```

### 2. Tailwind, Postcss & Autoprefixer installation

The design system is based on tailwind-css and post-css, so in order to make the system work we need to install these packages and set it up properly.

The tailwind configuration will be described in the next section.

Installs the necessary packages

```bash
npm install -D tailwindcss postcss autoprefixer
```

Sets up tailwind css and generates tailwind.config.js and postcss.config.js

```bash
npx tailwindcss init -p
```

Head to "Tailwind Configuration" section to continue the setup.

### Tailwind Configuration

Since all packages and configuration files are now available we need to load the design system config as a preset into the repository in order to make the design tokens available.

In order to apply the design tokens to our system we need also to specify the content path to our components in the libary.

#### tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    // Loads design tokens as presets
    require('@smartive-education/design-system-component-library-musketeers/preset'),
  ],
  content: [
    // Specifies content path to our design system components in order to apply design tokens
    './node_modules/@smartive-education/design-system-component-library-musketeers/dist/components/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
};
```

Lastly we need to inject tailwind's base, components and utility classes to our repository.

The easiest way to use the tailwind configuration and utility classes from the Design System, is to import it's main.css into your applications main entry point CSS file. ( For a next.js application as example, this is the global.css. )

This will also load our custom typography classes into your repository. For further information check out the main.css file.

#### global.css

```css
@import '@smartive-education/design-system-component-library-musketeers/main';
```

Now your project's Tailwind build includes the design tokens and configuration from the design system.

### Components usage

#### Local Storybook installation

In order to check which components and its props are available. Set up the design system locally. Clone the design system repository

```git
https://github.com/smartive-education/design-system-component-library-musketeers.git
```

Install all repository dependencies and start your local storybook instance

```git
npm install
```

```git
npm run storybook
```

Your local instance will be available on: http://localhost:6006/

After the setup you will be able to use all components from the design system. Import your desired component as followed.

```javascript
import { Component } from '@smartive-education/design-system-component-library-musketeers';
```

Check the available components section to see which components ready for use

#### Usage

Now you can use the components as followed. Check storybook (http://localhost:6006/ ) for the correct useage and see what props are available.

```javascript
export default function Home() {
  return (
    <>
      <Component></Component>
      ...
    </>
  );
}
```

### SVG Icons

The design system comes with a set of svg icons. The icons are manually generated into javascript components and can be imported as followed.

```javascript
import { ArrowUp } from '@smartive-education/design-system-component-library-musketeers';
```

The icon name is also the component name and can be used for the import. Here is an example:

```javascript
import { ArrowUp } from '@smartive-education/design-system-component-library-musketeers';

export default function Icon() {
  return (
    <>
      <ArrowUp />
    </>
  );
}
```

If you wish to regenerate the svg components because new icons are added to the repository run following command

```git
npm run build-icons
```

#### Available SVG Icons

![alt icons](./documentation/images/icons.png)

## Project Development History and Learnings

### Agile Board

This is our Trello Board for this project. We've added a plugin, so every ticket will get an ID which we are refering to for branch names and commit messages.
https://trello.com/b/BK3h5ADR/mumble

### General variable naming conventions

We stay in line with Ketta Naito's Naming Cheat-Sheet. Comprehensive language-agnostic guidelines on variables naming:
https://github.com/kettanaito/naming-cheatsheet

### Branch naming

Our workflow is loosely based on Git-Flow. We have a develop and a main branch. Our feature branches are based on the develop branch.
The pattern for naming a branch is: {ticket-id}-{short}-{topic}-{title}
If there is no ticket, it's possible to use "0" for the id.

### Commit Messages

We base our commit messages on Conventional Commits, which integrates nicely with Semantic Release:

https://www.conventionalcommits.org/en/v1.0.0/

Valid commit subject examples:

"feat: #99 Header component"

"fix: #0 Button type declarations"

"docs: Update readme"

### Releases Notes

Checkout the release notes here: https://github.com/smartive-education/design-system-component-library-musketeers/releases

## General learnings

- Think about using a headless component library from the beginning, if Accessibility support is important
- Adopt the future project file structure early on
- If you plan to work with Typescript, add it in the beginning already
- We went for a SVGR based Icon solution, the advantages with this approach are:
  - Developer Experience: Adding a new icon is just exporting it from Figma to the src/assets/icons folder - that's it. Now the Icon can be used as a React component
  - A lot of control over the React component generation. Custom templates can be used, in our solution we transform the exported Icon color from the Designer automatically to currentColor, this way the color of the icon can be set via tailwind classes
  - Webpack config for the DEV server is one thing, we also needed to add a build step for the icons to expose the icon components for NPM
- Storybook MDX documentation pages
  - Storybook provides some nice helpers for MDX pages
  - We tried to use it as far as possible, as example for the Icons and Colours
  - The issue with this is, that Tailwind CSS classes gets overridden by scoped Storybook styles on MDX pages. So for some pages, like Typography, we needed to stick with the component page setting, even if it's not a documentation page for a component

## Build a Tweet/Mumble Component with next.js example

This is a complete source code example for a finished next.js Tweet component, using components from this Design System:

```typescript
import { useEffect, useState } from 'react';

import {
  Card,
  Hashtag,
  Interaction,
  Avatar,
  Container,
  IconLink,
} from '@smartive-education/design-system-component-library-musketeers';

import {
  AvatarSize,
  InteractionType,
  IconLinkType,
  CardSize,
} from '@smartive-education/design-system-component-library-musketeers';

import {
  ReplyFilled,
  Reply,
  Share,
  Heart,
  HeartFilled,
  Profile,
  Time,
} from '@smartive-education/design-system-component-library-musketeers';

export default function Home() {
  const [commented, setCommented] = useState(false);
  const [comments, setComments] = useState(0);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    setComments(0);
    setCommented(false);
  }, []);

  useEffect(() => {
    if (commented) {
      setComments(comments + 1);
    }
  }, [commented, comments]);

  useEffect(() => {
    setLikes(0);
    setLiked(false);
  }, []);

  useEffect(() => {
    if (liked) {
      setLikes(likes + 1);
    }
  }, [liked, likes]);

  return (
    <>
      <Container>
        <Card size={CardSize.XL} hasRoundBorders={true}>
          <div className="relative">
            <div className="absolute -top-s -left-[80px]">
              <Avatar
                alt="Display Name @displayName"
                showBorder
                size={AvatarSize.M}
                src="https://randompicturegenerator.com/img/people-generator/gd121f56d8674f28d00ce9f1c44686e7a9bee58b8d33a3c57daaada1fa493c214290f9490833d1ff18f4ee16cd5298e1f_640.jpg"
              />
            </div>

            <div className="label-xl text-slate-900 mb-xxs">Hans Muster</div>

            <div className="flex gap-s">
              <IconLink type={IconLinkType.VIOLET} label="Hans Muster" href="" target="" onClick={() => {}}>
                <Profile />
              </IconLink>
              <IconLink type={IconLinkType.DEFAULT} label="22.02.1978" href="" target="" onClick={() => {}}>
                <Time />
              </IconLink>
            </div>

            <div className="paragraph-l text-slate-900 grid pt-m gap-m">
              <div>
                Sed at eleifend erat. Ut mattis malesuada tristique. Aliquam eget ultricies ipsum. Quisque rutrum orci non
                risus dignissim, a semper tortor ultricies. Nam commodo lacus mi, molestie malesuada mi scelerisque eu.
                Aenean et pellentesque lectus, in iaculis sem. In ac efficitur lectus. Quisque consectetur est libero, eu
                sagittis magna vestibulum a. Etiam consectetur lobortis ipsum et bibendum. Maecenas id purus quam.
              </div>
              <div className="flex gap-xs">
                <Hashtag
                  label="myhashtag"
                  onClick={() => {
                    alert('Hashtag clicked!');
                  }}
                />
                <Hashtag
                  label="myhashtag2"
                  onClick={() => {
                    alert('Hashtag2 clicked!');
                  }}
                />
              </div>
            </div>

            <div className="py-m flex gap-s">
              <Interaction type={InteractionType.VIOLET} active={commented} onClick={() => setCommented((c) => !c)}>
                {commented ? <ReplyFilled /> : <Reply />}
                {comments > 0 ? `${comments} Comments` : 'Comment'}
              </Interaction>
              <Interaction type={InteractionType.PINK} active={liked} onClick={() => setLiked((l) => !l)}>
                {liked ? <HeartFilled /> : <Heart />}
                {likes > 0 ? `${likes} Likes` : liked ? 'Liked' : 'Like'}
              </Interaction>
              <Interaction onClick={() => {}} type={InteractionType.DEFAULT}>
                <Share />
                Copy link
              </Interaction>
            </div>
          </div>
        </Card>
      </Container>
    </>
  );
}
```
