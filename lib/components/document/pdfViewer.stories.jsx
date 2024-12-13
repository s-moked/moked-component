import PdfViewer from "./PdfViewer.jsx";
import { Card } from "@mui/material";

const meta = {
  title: "Documents/PdfViewer",
  component: PdfViewer,
  args: {
    file: "assets/pdf-example.pdf",
    fileName: "pdf-example.pdf",
  },
  parameters: {
    docs: {
      description: {
        component:
          "Permet d’afficher un fichier PDF avec des options de personnalisation, " +
          "telles que la gestion des erreurs, la rotation, le zoom, et la prise en charge des en-têtes HTTP" +
          " pour l’autorisation. Inclut un style personnalisé via @mui/styles et utilise des placeholders " +
          "(Skeleton ou NoFilePlaceholder) en cas de chargement ou d’absence de fichier.",
      },
    },
  },
};

export default meta;

const Template = (args) => {
  return (
    <Card className={"h-[50vh]"}>
      <PdfViewer {...args} />
    </Card>
  );
};

export const Default = Template.bind({});
export const Toolbar = Template.bind({});
Toolbar.args = {
  showToolbar: true,
};
