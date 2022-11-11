# GitHub Integration

This is a Next.js app that uses the GitHub API to display data about a user. In this case, Miguel319. This app uses server components. If you'd like to learn more about them, check the [Next.js Documentation](https://beta.nextjs.org/docs/rendering/server-and-client-components).

## Setting things up

Before running the project, you must create .env file at the root of the project, and then you must add the following environment variable: **`NEXT_PUBLIC_API_URL`**. The value for such variable cannot be provided in this .README file. Please, reach out to me so I can provided to you.


## Run the project

If you would like to run the app in your local environment, please run the following commands:


### npm

```bash
- npm install
- npm run dev
```

### yarn

```bash
- yarn
- yarn dev
```

## Routes

- **`/`** -> Renders the main page, which contains some commits, branches and a description of the repo's author.
- **`/branches`** -> List of branches from github-api.
- **`/commits`** --> List of commits from github-api.
- **`/repositories`** --> List of repositories from Miguel Jiménez.
