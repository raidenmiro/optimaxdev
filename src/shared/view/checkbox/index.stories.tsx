import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '.'

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox
}

type Story = StoryObj<typeof Checkbox>

export const Styled: Story = {
  render: () => <Checkbox />
}

// eslint-disable-next-line import/no-default-export
export default meta
