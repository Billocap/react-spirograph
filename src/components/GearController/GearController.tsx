import { FormEventHandler } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { BsTrashFill } from "react-icons/bs";

interface GearControllerProps {
  gear: Gear;
  onChange(
    key: "speed" | "shift" | "radius" | "displacement",
    value: number
  ): void;
  onDelete(): void;
}

function GearController({ gear, onChange, onDelete }: GearControllerProps) {
  const handleChange: FormEventHandler = (e) => {
    const target = e.target as HTMLInputElement;

    onChange(
      target.name as "speed" | "shift" | "radius" | "displacement",
      Number(target.value)
    );
  };

  return (
    <Form onChange={handleChange}>
      <InputGroup size="sm">
        <Form.Control
          type="number"
          name="speed"
          placeholder="Speed"
          defaultValue={gear.speed}
        />
        <Form.Control
          type="number"
          name="shift"
          placeholder="Shift"
          defaultValue={gear.shift}
        />
        <Form.Control
          type="number"
          name="radius"
          placeholder="Radius"
          defaultValue={gear.radius}
        />
        <Form.Control
          type="number"
          name="displacement"
          placeholder="Displacement"
          defaultValue={gear.displacement}
        />
        <Button
          variant="danger"
          onClick={onDelete}
        >
          <BsTrashFill size={12} />
        </Button>
      </InputGroup>
    </Form>
  );
}

export default GearController;
