import Breadcrumbs from "./Breadcrumbs.jsx";
import { IoMdHome } from "react-icons/io";
import { HomeRounded, StarRounded } from "@mui/icons-material";

const meta = {
  title: "Navigation/Breadcrumbs",
  component: Breadcrumbs,
  args: {
    items: [
      {
        // icon: 'material-outline:person',
        label: "premier niveau",
      },
      {
        label: "deuxieme niveau",
      },
    ],
    loading: false,
  },
};

export default meta;

const Template = (args) => <Breadcrumbs {...args} />;

export const Simple = Template.bind({});

export const Icons = Template.bind({});
Icons.args = {
  items: [
    {
      icon: <HomeRounded sx={{ width: 16 }} />,
      label: "premier niveau",
    },
    {
      icon: <StarRounded sx={{ width: 16 }} />,
      label: "deuxieme niveau",
    },
  ],
};
