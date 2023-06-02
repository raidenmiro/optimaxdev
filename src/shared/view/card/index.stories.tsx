import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '.'

const meta: Meta<typeof Card> = {
  title: 'Card'
}

type Story = StoryObj<typeof Card>

export const Styled: Story = {
  render: () => <Card.Body>Checkout Page</Card.Body>
}

// eslint-disable-next-line import/no-default-export
export default meta
