
# Token Verification Tool

Web app for making token onboarding more efficient.

## Setup

Use the package manager [pnpm](https://pnpm.io/) to install dependencies.

```bash
pnpm install
```

Prepare husky

```bash
pnpm prepare
```

## Usage

Define following environment variables. [Vite supports dotenv](https://vitejs.dev/guide/env-and-mode.html#env-files)
```bash
VITE_BASE_URL=/
VITE_ETHERSCAN_API_KEY=
VITE_INFURA_API_KEY=
```

Running locally
```bash
pnpm dev
```

Build
```bash
pnpm build
```
