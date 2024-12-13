import { MemoryRouter } from "react-router-dom";
import { IconContext } from "react-icons";

export default function withProviders(Story) {
  return (
    <MemoryRouter>
      <IconContext.Provider
        value={{ color: "red", className: "global-class-name" }}
      >
        <div id={"root"}>
          <Story />
        </div>
      </IconContext.Provider>
    </MemoryRouter>
  );
}
