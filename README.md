# Suprematism Buttons -- DEPRECATED

Some Angular 2 button components.

** See the [suprematism style guide](https://cinbcuniversal.github.io/suprematism-style-guide) for css instead **


#### Installation
```bash
npm i -S CINBCUniversal/suprematism-buttons
```
Until it is published to npm, point to github. A consequence of this is that
built files must be checked-in. When we publish to npm with `npm publish`,
there is a prehook to build the files and a posthook to delete them
(so only source files are saved in git). For now, after doing development,
we must manually run the publish prehook and save the files.


#### View
- [Hosted on Github Pages](https://cinbcuniversal.github.io/suprematism-buttons/)
- Run the example locally with `npm run example`


## Components
- [`supre-button`](#supre-button)

#### <a id="supre-button"></a> `supre-button`
A component for a standard button.

##### Directives
- `text: string` - The button's text
- `icon?: string` - An icon font's css class(es)
- `color: Color` - The color of the button. While this could be dynamically inlined, I've opted to have the color types predefined in the css. A valid color is 'blue' | 'green'.

##### Events
- No custom events, just use click, mousedown, etc

## States
- [default]
- hover
- active


## Example
```html
<supre-button
  icon="ion-plus"
  text="Create"
  [color]="green"
></supre-button>
```
