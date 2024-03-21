// src/stories/Button.stories.js

import Button from "../components/Button"

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
}

const Template = args => <Button {...args} />


export const Exercise = Template.bind({})
Exercise.args = {
  label: "Action",
  size: "lg",
  icon:'true'
}

export const TextOnly = Template.bind({});
TextOnly.args = {
  label: "Action",
  size: "md",
  display: "textOnly",
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  size: "md",
  display: "iconOnly",
};

export const IconWithText = Template.bind({});
IconWithText.args = {
  label: "Action",
  size: "md",
  display: "iconWithText",
};