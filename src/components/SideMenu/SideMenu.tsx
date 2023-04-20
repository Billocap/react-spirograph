import { Offcanvas } from "react-bootstrap";
import { PropsWithChildren } from "react";

interface SideMenuProps {
  show: boolean;
  onHide(): void;
}

export default function SideMenu({
  children,
  show,
  onHide
}: PropsWithChildren<SideMenuProps>) {
  return (
    <Offcanvas
      show={show}
      onHide={onHide}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="bg-light">{children}</Offcanvas.Body>
    </Offcanvas>
  );
}
