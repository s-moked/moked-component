import PhoneField from "./PhoneField.jsx";
import { useState } from "react";

const meta = {
  title: "Form/Field/Phone",
  component: PhoneField,
  args: {
    name: "phone",
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

const Template = (args) => {
  const [value, setValue] = useState("");
  const onChange = (typedValue) => {
    setValue(typedValue);
  };
  return <PhoneField {...args} onChange={onChange} value={value} />;
};

export const Default = Template.bind({});
