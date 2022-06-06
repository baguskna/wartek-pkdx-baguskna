# edtech-telkom-frontend-test

> Personal project for Edtech Telkom frontend test.

## Stack used

- [Next.js](https://nextjs.org/)
- [Emotion CSS](https://emotion.sh/docs/introduction)
- [TypeScript](https://typescriptlang.org/)
- [SWR](https://swr.vercel.app/) for data fetching + caching

## Developing

A Node.js LTS setup with [yarn (v1)](https://yarnpkg.com/) is recommended.

```bash
# install dependencies
yarn

# serve with hot reload at localhost:3000
yarn dev

# build for production
yarn build

# run unit tests
yarn test
```

## Architecture

### Data fetching

We use [SWR](https://swr.vercel.app/) for our data-fetching logic, allowing for data fetches to be wrapped in a custom hook.

### Directory structure

- `__test__/` - unit test components.
- `components/` - UI/layout components that are used globally throughout project.
- `lib/` - Shared utility styles.
- `pages/` - Next.js pages contain pages for the web app.
- `public/` - Next.js public directory, used for storing static assets.
- `styles/` - Global CSS files.
- `shared/` - contains helper data, interfaces, and hooks.
