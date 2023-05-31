# `Stepper`

## Accessibility

- Keyboard Interaction
  - Up Arrow: Increases the value.
  - Down Arrow: Decreases the value.
  - Home: If the spinbutton has a minimum value, sets the value to its minimum.
  - End: If the spinbutton has a maximum value, sets the value to its maximum.

- ARIA Roles
  - The focusable element serving as the spinbutton has role spinbutton.
  - Input should be has `aria-valuemin`, `aria-valuemax`, `step`, `aria-valuenow`
  - Set `aria-invalid` if user input incorrect value

## Props

```ts
export interface StepperA11yProps {
  step: number
  max: number
  min: number
}

export interface StepperProps extends StepperA11yProps {
  onIncrease?(): void
  onDecrease?(): void
  onSwitchToMax?(): void
  onSwitchToMin?(): void
}
```

### Basic

- `max` - max value for current stepper
- `min` - min value for current stepper
- `step` - step for change value

### Events

- `onIncrease` - increase value by step (optional)
- `onDecrease` - decrease value by step (optional)
- `onSwitchToMax` - change current value to max value, whenever triggered `PageEnd` (optional)
- `onSwitchToMin` - change current value to min value, whenever triggered `PageHome` (optional)

## Styling

- You can provide custom styles below example (using css features `css-nesting`)

```tsx
<Stepper 
  min={0}
  max={100}
  step={1}
  className="field-stepper"
/>
```

```css
.field-stepper {
  background: var(--field-background);
  border: 1px solid var(--field-border);
  color: var(--text-color);
  z-index: 1;
  width: 6rem;
  border-radius: 0;
  outline: none;
  flex: 1;

  & > button {
    background: var(--field-background);
    border: 1px solid var(--field-border);
    color: var(--text-color);
    appearance: none;
    vertical-align: middle;
    width: 2.3rem;
    text-align: center;
    border-radius: 4px;
    outline: none;
    margin: 0;
    padding: 0;
  }

  &[data-spin="increase"] {
    color: red;
  }

  &[data-spin="decrease"] {
    color: blue;
  }
}
```
