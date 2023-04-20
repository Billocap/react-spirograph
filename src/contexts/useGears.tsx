import {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer
} from "react";

import Gear from "@model/GearModel";

interface GearsContext {
  gears: Gear[];
  addGear(): void;
  editGear(
    id: number,
    key: "speed" | "shift" | "radius" | "displacement",
    value: number
  ): void;
  removeGear(id: number): void;
}

const GearsContext = createContext({} as GearsContext);

interface AddGearAction {
  type: "add:gear";
  value: Gear;
}

interface EditGearAction {
  type: "edit:speed" | "edit:shift" | "edit:radius" | "edit:displacement";
  value: {
    id: number;
    value: number;
  };
}

interface RemoveGearAction {
  type: "remove:gear";
  value: number;
}

function GearsReducer(
  oldState: Gear[],
  action: AddGearAction | EditGearAction | RemoveGearAction
) {
  const newState = [...oldState];

  switch (action.type) {
    case "add:gear":
      newState.push(action.value);
      break;

    case "edit:speed":
      newState[action.value.id].speed = action.value.value;
      break;

    case "edit:shift":
      newState[action.value.id].shift = action.value.value;
      break;

    case "edit:radius":
      newState[action.value.id].radius = action.value.value;
      break;

    case "edit:displacement":
      newState[action.value.id].displacement = action.value.value;
      break;

    case "remove:gear":
      newState.splice(action.value, 1);
      break;

    default:
      return oldState;
  }

  return newState;
}

export function GearsProvider({ children }: PropsWithChildren) {
  const [gears, dispatch] = useReducer(GearsReducer, []);

  const context: GearsContext = {
    gears,
    addGear() {
      dispatch({
        type: "add:gear",
        value: new Gear()
      });
    },
    editGear(id, key, value) {
      dispatch({
        type: `edit:${key}`,
        value: { id, value }
      });
    },
    removeGear(id) {
      dispatch({
        type: "remove:gear",
        value: id
      });
    }
  };

  return (
    <GearsContext.Provider value={context}>{children}</GearsContext.Provider>
  );
}

export function useGears() {
  const context = useContext(GearsContext);

  return context;
}
