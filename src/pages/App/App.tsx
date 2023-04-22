import { Button, ButtonGroup } from "react-bootstrap";

import useToggle from "@hooks/useToggle";
import { useGears } from "@contexts/useGears";
import GearList from "@components/GearList";
import SideMenu from "@components/SideMenu";

import { Wrapper } from "./App.styles";

interface AppProps {
  onHide(gears: Gear[]): void;
}

export default function App({ onHide }: AppProps) {
  const menu = useToggle(false);

  const { gears } = useGears();

  return (
    <Wrapper>
      <SideMenu
        show={menu.state}
        onHide={() => {
          menu.off();

          onHide(gears);
        }}
      >
        <GearList />
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
