import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../RootReducer";

import { JPH } from "./types";

export interface JphUrlProps {
  start: number;
  limit: number;
}

export interface JphPhoto {
  albumId: number;
  id: number;
  url: string;
  thumbnailUrl: string;
  title: string;
}

interface IJphActions {
  setUrl: Redux.ExactActionCreator<typeof JPH.SET_URL, JphUrlProps>;
  setData: Redux.ExactActionCreator<typeof JPH.SET_DATA, JphPhoto[]>;
  retrieve: () => any;
}

export const JphActions: IJphActions = {
  setUrl: (props) => ({ type: JPH.SET_URL, payload: props }),
  setData: (json) => ({ type: JPH.SET_DATA, payload: json }),
  retrieve: (): ThunkAction<void, RootState, unknown, Action<string>> => async (
    dispatch,
    getState
  ) => {
    const url = getState().jph.url;
    const res = await fetch(url);
    if (res.ok) {
      const json = await res.json();
      dispatch(JphActions.setData(json));
    }
  },
};

export type JphActionReturnTypes = ReturnType<IJphActions[keyof IJphActions]>;
