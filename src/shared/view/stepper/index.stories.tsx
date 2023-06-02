import type { Meta, StoryObj } from '@storybook/react'

import { Stepper } from '.'

const meta: Meta<typeof Stepper> = {
  title: 'Stepper',
  component: Stepper
}

type Story = StoryObj<typeof Stepper>

export const Styled: Story = {
  render: () => <Stepper position="center" min={0} max={50} step={1} />
}

// eslint-disable-next-line import/no-default-export
export default meta
