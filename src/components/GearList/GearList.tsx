import { Button } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";

import GearController from "@components/GearController";
import { useGears } from "@contexts/useGears";

import { Wrapper } from "./GearList.styles";

interface GearListProps {}

export default function GearList({}: GearListProps) {
  const { gears, addGear, editGear, removeGear } = useGears();

  return (
    <Wrapper>
      <b>Gears</b>
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
    </Wrapper>
  );
}
