import type { Meta, StoryObj } from '@storybook/react'

import { Badge } from '.'

const meta: Meta<typeof Badge> = {
  title: 'Badge',
  component: Badge
}

type Story = StoryObj<typeof Badge>

export const Styled: Story = {
  render: () => <Badge label="Shopping Cart" />
}

// eslint-disable-next-line import/no-default-export
export default meta
