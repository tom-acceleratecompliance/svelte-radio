# svelte-radio

[![NPM][npm]][npm-url]

> Declarative Radio button group component for Svelte.

<!-- REPO_URL -->

---

<!-- TOC -->

## Install

```bash
yarn add -D svelte-radio
# OR
npm i -D svelte-radio
```

## Usage

### Basic

<!-- prettier-ignore-start -->
```svelte
<script>
  import { RadioGroup, Radio } from "svelte-radio";

  let value = "1";
</script>

<RadioGroup bind:value label="Radio group legend">
  <Radio label="Label 1" value="1" />
  <Radio label="Label 2" value="2" />
  <Radio label="Label 3" value="3" />
</RadioGroup>

value:
{value}

<br />

<button type="button" on:click={() => value = '2'}>
  Set value to "2"
</button>
```
<!-- prettier-ignore-end -->

### Custom legend

Customize the radio group legend by using the "legend" slot:

```svelte
<RadioGroup bind:value>
  <span slot="legend">
    <legend style="color: red">Radio group legend</legend>
  </span>
  <Radio label="Label 1" value="1" />
  <Radio label="Label 2" value="2" />
  <Radio label="Label 3" value="3" />
</RadioGroup>
```

### Styling

This component is unstyled by design. Use a global class selector to style the `.svelte-radio-group` and `.svelte-radio` classes.

```css
:global(.svelte-radio-group) {
  border: 2px solid #e0e0e0;
  padding: 1rem;
}

:global(.svelte-radio) {
  margin-bottom: 0.5rem;
}

:global(.svelte-radio label) {
  margin-left: 0.25rem;
}
```

## API

### RadioGroup

| Prop name        | Value                                         |
| :--------------- | :-------------------------------------------- |
| legend           | `string`                                      |
| value            | `string` or `number` (default: `undefined`)   |
| `...$$restProps` | (forward to the top-level `fieldset` element) |

### Radio

| Prop name        | Value                                         |
| :--------------- | :-------------------------------------------- |
| label            | `string`                                      |
| value            | `string` or `number` (default: `undefined`)   |
| checked          | `boolean` (default: `false`                   |
| `...$$restProps` | (forward to the second-level `input` element) |

## Dispatched events

### RadioGroup

- **on:change**: dispatched when the selection changes

```svelte
<script>
  let events = [];
</script>

<RadioGroup
  value="1"
  label="Radio group legend"
  on:change={(e) => {
    events = [...events, JSON.stringify(e.detail, null, 2)];
  }}
>
  <Radio label="Label 1" value="1" />
  <Radio label="Label 2" value="2" />
  <Radio label="Label 3" value="3" />
</RadioGroup>

{#each events as event}
  <div>
    <pre>{event}</pre>
  </div>
{/each}
```

## TypeScript

Svelte version 3.31 or greater is required to use this module with TypeScript.

## Changelog

[Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-radio.svg?color=%23ff3e00&style=for-the-badge
[npm-url]: https://npmjs.com/package/svelte-radio
