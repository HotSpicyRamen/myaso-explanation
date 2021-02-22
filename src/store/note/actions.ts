import { NOTE } from "./types";

interface INoteActions {
  prepend: Redux.ExactActionCreator<typeof NOTE.ADD_FORWARD, string>;
  append: Redux.ExactActionCreator<typeof NOTE.ADD_BACKWARD, string>;
  removeFirst: Redux.ExactActionCreator<typeof NOTE.REMOVE_FIRST>;
  removeLast: Redux.ExactActionCreator<typeof NOTE.REMOVE_LAST>;
  removeAll: Redux.ExactActionCreator<typeof NOTE.REMOVE_ALL>;
}

export const NoteActions: INoteActions = {
  prepend: (note) => ({ type: NOTE.ADD_FORWARD, payload: note }),
  append: (note) => ({ type: NOTE.ADD_BACKWARD, payload: note }),
  removeFirst: () => ({ type: NOTE.REMOVE_FIRST }),
  removeLast: () => ({ type: NOTE.REMOVE_LAST }),
  removeAll: () => ({ type: NOTE.REMOVE_ALL }),
};

export type NoteActionReturnTypes = ReturnType<
  INoteActions[keyof INoteActions]
>;
