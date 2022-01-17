<div align="center">
  <h1>@chronocide/htmx</h1>
  <p>Simple static HTML generator</p>
</div>

## Install

```
$ npm i @chronocide/htmx
```

## Example

**Input**

`src/body.tsx`

```TSX
export default ({ children: Htmx.Children }) => (
  <p>
    {children}
  </p>
)
```

`src/index.tsx`

```TSX
import Body from './body'; 

export default () => {
  <Body>
    Hello world!
  </Body>
}
```

**Output**

`$ htmx -e src/index.tsx`

`index.html`
```HTML
<p>
  Hello world!
</p>
```

## API

 - `-e / --entry` (required) - Entry file / files
 - `-c / --config` (default `.htmx.js`) - Path to config file
 - `-o / --output` (default `process.cwd()`) - Output directory

## Configuration

htmx supports `.js` and `.json` config files. The default config file is `.htmx.js`, but this can be changed using `-c <file>` or `--config <file>`

**Example**

```JS
module.exports = {
  entry: 'src/index.tsx',
  output: 'dist'
}
```

## Donating

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Y8Y41E23T)
