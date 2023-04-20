import { Button, ButtonGroup } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";

import useToggle from "@hooks/useToggle";
import { useGears } from "@contexts/useGears";
import GearController from "@components/GearController";
import SideMenu from "@components/SideMenu";

import { Wrapper } from "./App.styles";

interface AppProps {
  onHide(gears: Gear[]): void;
}

export default function App({ onHide }: AppProps) {
  const menu = useToggle(false);

  const { gears, addGear, editGear, removeGear } = useGears();

  return (
    <Wrapper>
      <SideMenu
        show={menu.state}
        onHide={() => {
          menu.off();

          onHide(gears);
        }}
      >
        <p>Gears</p>
        <div className="d-flex flex-column gap-3">
          {gears.map((gear, id) => (
            <GearController
              key={gear.key}
              gear={gear}
              onChange={(key, value) => {
                editGear(id, key, value);
              }}
              onDelete={() => {
                removeGear(id);
              }}
            />
          ))}
          <Button
            variant="light"
            onClick={addGear}
          >
            <BsPlus />
          </Button>
        </div>
      </SideMenu>
      <ButtonGroup
        size="sm"
        className="shadow-sm"
      >
        <Button
          variant="light"
          onClick={menu.on}
        >
          Menu
        </Button>
        <Button variant="light">Tutorial</Button>
        <Button variant="light">About</Button>
        <Button variant="light">Repo</Button>
      </ButtonGroup>
    </Wrapper>
  );
}
