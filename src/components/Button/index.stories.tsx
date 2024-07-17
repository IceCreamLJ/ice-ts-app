import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from ".";

const meta = {
  title: "Example/iceButton",
  component: Button,
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "按钮",
    onClick: () => {
        console.log("hhh");
    }
  },
};


// export const renderButton: Story = {
//   args: {
//     children: "按钮",
//     onClick: () => {
//       console.log("hhh");
//     },
//   },
//   render: ({ children, ...resProps }) => {
//     return <Button {...resProps}>{children}</Button>;
//   },
// };