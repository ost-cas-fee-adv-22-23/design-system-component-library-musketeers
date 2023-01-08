# Musketeer's Design System

Wiki: https://github.com/smartive-education/design-system-component-library-musketeers/wiki

Agile Board (Trello): https://trello.com/b/BK3h5ADR/mumble

## Overview

Musketeers's Design System is a Storybook / Tailwind based React Component Library.
The latest published Storybook version is available here: https://smartive-education.github.io/design-system-component-library-musketeers

## How To Use The Library In Your React/Next.js Project

### Package Installation

### Tailwind Configuration

### SVG Icons

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
