import { fireEvent, render, screen } from '@testing-library/react'

import { Stepper } from '..'

vi.spyOn(document, 'querySelector').mockImplementation(
  () =>
    ({
      content: 'width=device-width,initial-scale=1'
    } as HTMLMetaElement)
)

describe('stepper', () => {
  const selectors = {
    stepper: () => screen.findByRole('spinbutton'),
    increase: () => screen.findByLabelText('Increase value'),
    decrease: () => screen.findByLabelText('Decrease value')
  }

  it('should be increase value by arrow up pressed', async () => {
    render(<Stepper value={10} step={1} min={0} max={100} />)

    const stepper = await selectors.stepper()

    expect(stepper).toHaveValue('10')

    fireEvent.keyDown(stepper, { key: 'ArrowUp' })

    expect(stepper).toHaveValue('11')
  })

  it('should be switch value to max by pressed End', async () => {
    render(<Stepper value={10} step={1} min={0} max={100} />)

    const stepper = await selectors.stepper()

    expect(stepper).toHaveValue('10')

    fireEvent.keyDown(stepper, { key: 'End' })

    expect(stepper).toHaveValue('100')
  })

  it('should be switch value to min by pressed Home', async () => {
    render(<Stepper value={10} step={1} min={0} max={100} />)

    const stepper = await selectors.stepper()

    expect(stepper).toHaveValue('10')

    fireEvent.keyDown(stepper, { key: 'Home' })

    expect(stepper).toHaveValue('0')
  })
})
