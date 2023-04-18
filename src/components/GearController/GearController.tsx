import { FormEventHandler } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { BsTrashFill } from "react-icons/bs";

interface GearControllerProps {
  gear: Gear;
  onChange(key: string, value: number): void;
  onDelete(): void;
}

export default function GearController({
  gear,
  onChange,
  onDelete
}: GearControllerProps) {
  const handleChange: any = (e: any) => {
    onChange(e.target.name, e.target.value);
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
          name="displace"
          placeholder="Displace"
          defaultValue={gear.displace}
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
