import { combineReducers } from "redux";

import { NoteReducer } from "./note/reducer";
import { JphReducer } from "./jph/reducer";

export const RootReducer = combineReducers({
  note: NoteReducer,
  jph: JphReducer,
});

export type RootState = ReturnType<typeof RootReducer>;
