import { NOTE } from "./types";
import { NoteActionReturnTypes } from "./actions";

export interface NoteState {
  data: string[];
}

const initialState: NoteState = {
  data: [],
};

export function NoteReducer(
  state: NoteState = initialState,
  action: NoteActionReturnTypes
): NoteState {
  switch (action.type) {
    case NOTE.ADD_FORWARD: {
      return { ...state, data: [action.payload, ...state.data] };
    }

    case NOTE.ADD_BACKWARD: {
      return { ...state, data: [...state.data, action.payload] };
    }

    case NOTE.REMOVE_FIRST: {
      const data = [...state.data];
      data.shift();
      return { ...state, data };
    }

    case NOTE.REMOVE_LAST: {
      const data = [...state.data];
      data.pop();
      return { ...state, data };
    }

    case NOTE.REMOVE_ALL: {
      return initialState;
    }

    default:
      return state;
  }
}
