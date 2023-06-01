import { Stepper } from '~/shared/view/stepper'

export interface QuantityProps {
  maxQuantity: number
  quantity: number
}

export function Quantity({ maxQuantity, quantity }: QuantityProps) {
  return (
    <Stepper
      min={0}
      step={1}
      max={maxQuantity}
      value={quantity}
      position="center"
    />
  )
}
