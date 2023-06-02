import type { Meta, StoryObj } from '@storybook/react'

import { ActionIcon } from '.'

const meta: Meta<typeof ActionIcon> = {
  title: 'ActionIcon',
  component: ActionIcon
}

type Story = StoryObj<typeof ActionIcon>

export const Styled: Story = {
  render: () => <ActionIcon path="sprite/trash" />
}

// eslint-disable-next-line import/no-default-export
export default meta
