# Field

## Props

- `onChangeValue` - accept callback that will be call with `evt.target.value`

- `startIcon` - you can provide custom icon uses [icon sprite component](../icon/index.tsx)

- `endIcon` - custom icon

- Also you can provide all attributes for `input`

## Examples

- Common using

```tsx
<>
  <Field
    name="email"
    placeholder="johndue@**email**.com"
    startIcon={<Icon name="sprites/logo" />}
    onChangeValue={(text) => inputText(text)}
  />
</>
```

- With label

```tsx
<>
  <Field.Label label="Email" />
  <Field
    name="email"
    placeholder="johndue@email.com"
    startIcon={<Icon name="sprites/logo" />}
    onChangeValue={(text) => inputText(text)}
  />
</>
```
