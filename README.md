# livefyre-bootstrap

Bootstrap CSS framework, skinned to be ON FYRE.

## Building

Install node, then

    npm install

Run the dev server with

    npm start

Visit /demos/main to see it in action

![In action](http://d.pr/i/nJkn+)

## Usage

Build the CSS, then include add the stylesheet to your page

```html
<link rel="stylesheet" href="./dist/lf.css"></link>
```

You can include Bootstrap JS (to power dropdowns and such), with:

```javascript
require('livefyre-bootstrap');
```

## Developing

Styles go in /src/styles/ and are written in LESS.

/src/styles/all.less is what is compiled.

You can compile all.less into dist/lf.css with

    npm run build

## Tests

There are mocha tests in /tests/spec.

Run tests with

    npm test
