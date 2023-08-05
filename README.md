# GAS project Template with TypeScript

This repository is a template to develop a GoogleAppsScript project with TypeScript.

## Usage

Clone from Github.

```zsh
git clone https://github.com/genki-sano/gas-ts-template <your-project-name>
cd <your-project-name>
yarn install
```

login with Google.

```zsh
yarn clasp login
```

Create new GoogleAppsScript project. (Check [the referrence](https://github.com/google/clasp#create).)

```zsh
yarn clasp create \
    --title "My Script"  \
    --parentId "1D_Gxyv*****************************NXO7o"  \
    --rootDir ./dist
```

Inject Your functions to `global` variable in [index.ts](src/index.ts) like this:

```ts
declare const global: {
  [x: string]: unknown
}

global.doGet = (
  e: GoogleAppsScript.Events.DoGet,
): GoogleAppsScript.HTML.HtmlOutput => {
  const params = JSON.stringify(e)
  return HtmlService.createHtmlOutput(params)
}
```

Once your development is done, push your codes to GAS project.

```zsh
yarn deploy
```

Visit https://script.google.com/d/{your-script-id}/edit, and try to run your code.

Have a nice hack !

## License

This software is released under the MIT License, see [LICENSE](LICENSE)
