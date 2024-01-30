import { Text } from '@icaroxavier-ds/solid'
import { Meta, StoryObj } from 'storybook-solidjs'

const meta = {
  title: 'Text',
  component: Text,
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum nulla nec, ultrices libe',
  },
}
