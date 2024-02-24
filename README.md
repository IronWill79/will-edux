# NodeJS pnpm Template

## Dependencies

| Name                             | Version   | Package Type | Use                                 |
| -------------------------------- | --------- | ------------ | ----------------------------------- |
| node                             | ^20.11.1  | x            | runtime                             |
| pnpm                             | ^8.15.3   | x            | build tool                          |
| typescript                       | ^5.3.3    | -            | dependency                          |
| @types/jest                      | ^29.5.12  | D            | Jest Types                          |
| @types/node                      | ^20.11.19 | D            | NodeJS Types                        |
| @typescript-eslint/eslint-parser | ^7.0.1    | D            | eslint typescript parser            |
| @typescript-eslint/parser        | ^7.0.1    | D            | eslint parser                       |
| eslint                           | ^8.56.0   | D            | linting tool                        |
| eslint-config-prettier           | ^9.1.0    | D            | configure Prettier in ESLint config |
| eslint-plugin-prettier           | ^5.1.3    | D            | run Prettier in ESLint              |
| jest                             | ^29.7.0   | D            | testing framework                   |
| nodemon                          | ^3.0.3    | D            | hot reload tool                     |
| prettier                         | ^3.2.5    | D            | code styling tool                   |
| ts-jest                          | ^29.1.2   | D            | TS testing framework                |
| ts-node                          | ^10.9.2   | D            | node-typescript runtime             |

## How to

1. Run `pnpm i` to setup node_modules
1. Run `pnpm build` to build to the `dist/` folder
1. Run `pnpm start` to run the `src/index.ts` file using `ts-node`
1. Run `pnpm dev` to start `nodemon` running the project using `ts-node` to watch for `*.ts` file changes
1. Run `pnpm lint` to lint the files
1. Run `pnpm fix` to lint the files and fix the issues
1. Run `pnpm test` to run tests
