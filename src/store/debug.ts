const stringType: Redux.Type = "TEST/TYPE";
const stringTypes: Redux.Types = {
  t1: "TEST/TYPE1",
  t2: "TEST/TYPE2",
};

const literalType = "TEST/EXP2";
const literalTypes = {
  t1: "TEST/TYPE1",
  t2: "TEST/TYPE2",
  t3: "TEST/TYPE2",
} as const;

const stringAction1: Redux.Action = { type: "Str" };
const stringAction2: Redux.Action<number> = { type: "Add", payload: 3 };

const literalAction1: Redux.ExactAction<"do"> = { type: "do" };
const literalAction2: Redux.ExactAction<"is", number> = {
  type: "is",
  payload: 0,
};

const stringCreator1: Redux.ActionCreator = () => {
  return { type: "fire" };
};
const stringCreator2: Redux.ActionCreator<number> = () => {
  return { type: "stop", payload: 0 };
};

const literalCreator1: Redux.ExactActionCreator<"fire"> = () => {
  return { type: "fire" };
};
const literalCreator2: Redux.ExactActionCreator<"stop", number> = () => {
  return { type: "stop", payload: 0 };
};

export default {};
