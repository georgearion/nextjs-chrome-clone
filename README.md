[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fgeorgearion%2Fnextjs-chrome-clone)

## Google Chrome Full Stack Application

- Framework: [Next.js v13.1](https://nextjs.org/)
- [TypeScript v4.9.5](https://www.typescriptlang.org/)
- [React v18.2.0](https://reactjs.org/)
- State Management & Authentication: [ReactContext](https://reactjs.org/docs/context.html)
- Database: [lib/search/database.json](https://github.com/georgearion/nextjs-chrome-clone/blob/main/lib/search/database.json)
- Frontend Workshop: [Storybook v6.5](https://storybook.js.org/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)
- Deployment: [Vercel](https://vercel.com/)

DEMO

[https://nextjs-chrome-clone.vercel.app/](https://nextjs-chrome-clone.vercel.app/)

## TODO

- [ ] Implement internationalization (i18n)
- [ ] Implement state management library ([Redux](https://redux-toolkit.js.org/), [Recoil](https://recoiljs.org/), etc)
- [ ] Implement authentication and authorization ([NextAuth.js](https://next-auth.js.org))
- [ ] Improved sitemap and `robots.txt` support (coming soon)
- [ ] Improved global `404` page (coming soon)
- [ ] Refactor for experimental `app/` directory (not implemented yet)
- [ ] Improved Medtadata and SEO score

## Running Locally

This application requires `Node.js >=18.0.0+` and `Yarn >=1.22.0+`

```bash
git clone https://github.com/georgearion/nextjs-chrome-clone.git
cd nextjs-chrome-clone
yarn install
yarn storybook # start Storybook locally http://localhost:6006
yarn dev # start Development http://localhost:3000
```

Create a `.env` file similar to [`.env.development.local.example`](https://github.com/georgearion/nextjs-chrome-clone/blob/main/.env.development.local.example).

## Cloning / Forking

This [repo](https://github.com/georgearion/nextjs-chrome-clone) is meant to serve as a starter template pre-configured with all the stuff needed to create a base setup from which to build your app on top off!

Please review the [license](https://github.com/georgearion/nextjs-chrome-clone/blob/main/LICENSE.txt).
