import SplitButton from "./SplitButton";

const meta = {
  title: "Buttons/Split",
  component: SplitButton,
  args: {
    buttons: [
      {
        children: "Action 1",
        onClick: () => console.log("Action 1 clicked"),
      },
      {
        children: "Action 2",
        primary: true,
        onClick: () => console.log("Action 2 clicked"),
      },
      {
        children: "Action 3",
        onClick: () => console.log("Action 3 clicked"),
      },
    ],
  },
  parameters: {
    docs: {
      toc: true,
      description: {
        component:
          "Le composant Breadcrumbs permet d’afficher une navigation hiérarchique pour guider les utilisateurs à travers une structure de pages ou de sections. ",
      },
    },
  },
};

export default meta;

const Template = (args) => <SplitButton {...args} />;

export const Default = Template.bind({});
