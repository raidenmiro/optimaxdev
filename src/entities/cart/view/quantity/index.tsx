import { Stepper } from '~/shared/view/stepper'

export interface QuantityProps {
  quantity: number
  className?: string
  changeQuantity(n: number): void
}

export function Quantity({
  quantity,
  className,
  changeQuantity
}: QuantityProps) {
  return (
    <Stepper
      min={0}
      step={1}
      max={10}
      value={quantity}
      className={className}
      position="center"
      onChangeValue={changeQuantity}
    />
  )
}
