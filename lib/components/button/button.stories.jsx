import Button from "./Button";

const meta = {
  title: "Buttons/Simple",
  component: Button,
  args: {
    children: "default",
    ucFirst: true,
    fullWidth: false,
    variant: "contained",
    size: "small",
    color: "primary",
  },
  parameters: {
    docs: {
      description: {
        component: "Bouton simple",
      },
    },
  },
};

export default meta;

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Couleur secondaire",
  color: "secondary",
};

export const Text = Template.bind({});
Text.args = {
  children: "Version text",
  variant: "text",
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: "Avec bordure",
  variant: "outlined",
  size: "medium",
  ucFirst: false,
};
