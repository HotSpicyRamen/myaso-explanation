import { JPH } from "./types";
import { JphActionReturnTypes, JphPhoto } from "./actions";

export interface JphState {
  url: string;
  data: JphPhoto[];
}

const initialState: JphState = {
  url: "http://jsonplaceholder.typicode.com/photos?_limit=20",
  data: [],
};

export function JphReducer(
  state: JphState = initialState,
  action: JphActionReturnTypes
): JphState {
  switch (action.type) {
    case JPH.SET_URL: {
      return { ...state, url: setUrlString(action.payload) };
    }
    case JPH.SET_DATA: {
      return { ...state, data: [...action.payload] };
    }
    default:
      return state;
  }
}

function setUrlString(props: object): string {
  const base = "http://jsonplaceholder.typicode.com/photos";
  const queries = Object.entries(props)
    .map(([key, value]) => `_${key}=${value}`)
    .join("&");
  return [base, queries].join("?");
}
