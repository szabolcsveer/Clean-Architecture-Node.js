import { Skateboard } from "./skateboard.type";
import { uuid } from "uuidv4";

export const skateboardFactory = ({
  id = uuid(),
  board = "",
  trucks = "",
  wheels = "",
  bearings = "",
  griptape = "",
  bolts = "",
  isAssembled = false,
}): Skateboard => ({
  id,
  board,
  trucks,
  wheels,
  bearings,
  griptape,
  bolts,
  isAssembled,
});
