import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '.'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button
}

type Story = StoryObj<typeof Button>

export const Styled: Story = {
  render: () => <Button>Checkout</Button>
}

// eslint-disable-next-line import/no-default-export
export default meta
