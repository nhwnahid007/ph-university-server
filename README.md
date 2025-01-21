# Setup

## Installation

### Initialize Project
```bash
npm init -y
```

### Install Dependencies

#### Express
```bash
npm install express
```

#### Mongoose
```bash
npm install mongoose --save
```

#### TypeScript
```bash
npm install typescript --save-dev
```
*Note: Use `--save-dev` for development dependencies as TypeScript will be converted into JavaScript.*

#### Additional Packages
```bash
npm install cors
npm install dotenv
```

### TypeScript Configuration
```bash
tsc --init
```

## TypeScript Configuration

1. Open `tsconfig.json`.
2. Set the `rootDir` and `outDir`:
   ```json
   "rootDir": "./src/", // specify the root directory
   "outDir": "./dist/", // specify the output directory
   ```

3. Add the following to manage included and excluded files:
   ```json
   "include": ["src"], // files to compile
   "exclude": ["node_modules"], // files to skip
   ```

## Package.json Scripts

Add the following scripts to your `package.json`:
```json
"scripts": {
  "build": "tsc",
  "test": "echo \"Error: no test specified\" && exit 1",
  "lint": "eslint src/**/*.ts",
  "lint:fix": "eslint src/**/*.ts --fix",
  "format": "prettier . --write"
}
```
*Note: Use `npm run build` to compile TypeScript.*

## Development Tools

### Type Definitions
```bash
npm install --save-dev @types/node
npm install --save-dev @types/express
npm install --save-dev @types/cors
```

### ESLint
```bash
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
npx eslint --init
```
*Alternatively, install a specific version:*
```bash
npm install -D eslint@9.14.0
```

### Prettier
```bash
npm install -D --exact prettier
```

## Project Structure

Create the following files:
- `src/app.ts`
- `src/server.ts`

