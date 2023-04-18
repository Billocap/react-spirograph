import {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer
} from "react";

import Gear from "../lib/Gear";

interface GearsContext {
  gears: Gear[];
  addGear(): void;
  editGear(id: number, key: string, value: number): void;
  removeGear(id: number): void;
}

const GearsContext = createContext({} as GearsContext);

interface AddGearAction {
  type: "add:gear";
  value: Gear;
}

interface EditGearAction {
  type: "edit:gear";
  value: {
    id: number;
    key: string;
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

    case "edit:gear":
      newState[action.value.id][action.value.key] = action.value.value;
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
        type: "edit:gear",
        value: { id, key, value }
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
