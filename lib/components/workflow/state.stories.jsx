import State from "./State";
import StateTags from "../../config/StateTags.js";

const meta = {
  title: "Workflow/State",
  component: State,
  args: {
    stateObject: {
      value: "OPEN",
      label: "Brouillon",
      tag: StateTags.OPEN,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Le composant State est conçu pour afficher un état sous forme visuelle avec un label et un style basé sur la propriété tag.",
      },
    },
  },
};

export default meta;

const Template = (args) => <State {...args} />;

export const OPEN = Template.bind({});

export const WIP = Template.bind({});
WIP.args = {
  stateObject: {
    value: "WIP",
    label: "En attente",
    tag: StateTags.WIP,
  },
};
export const WARNING = Template.bind({});
WARNING.args = {
  stateObject: {
    value: "DONE",
    label: "Validé",
    tag: StateTags.DONE,
  },
};
export const DONE = Template.bind({});
DONE.args = {
  stateObject: {
    value: "WARNING",
    label: "A corriger",
    tag: StateTags.WARNING,
  },
};
export const CANCEL = Template.bind({});
CANCEL.args = {
  stateObject: {
    value: "CANCEL",
    label: "Annuler",
    tag: StateTags.CANCEL,
  },
};
export const ARCHIVE = Template.bind({});
ARCHIVE.args = {
  stateObject: {
    value: "ARCHIVE",
    label: "Archive",
    tag: StateTags.ARCHIVE,
  },
};
