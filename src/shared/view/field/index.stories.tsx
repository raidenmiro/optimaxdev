import type { Meta, StoryObj } from '@storybook/react'

import { Field } from '.'

const meta: Meta<typeof Field> = {
  title: 'Field',
  component: Field
}

type Story = StoryObj<typeof Field>

export const Styled: Story = {
  render: () => <Field />
}

// eslint-disable-next-line import/no-default-export
export default meta
