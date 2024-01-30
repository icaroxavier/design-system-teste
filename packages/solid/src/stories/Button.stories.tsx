import { Button } from '..'
import { Meta, StoryObj } from 'storybook-solidjs'

const meta = {
  title: 'Button',
  component: Button,
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Button',
  },
}
