# Template TypeScript

## Testing sostenible

- TypeScript
- Jest
- ESLint
- Prettier
- Husky

## Instrucciones

- `nvm use`
- `npm install`
- `npm test`

### ESLint

[TypeScript ESLint Rules](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)

### Husky hooks

- Pre-commit: Execute npm analize (tsc + eslint --fix)
- Pre-push: Execute test
