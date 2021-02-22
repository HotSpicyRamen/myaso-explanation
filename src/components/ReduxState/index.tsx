import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./ReduxState.scss";
import { NoteActions } from "../../store/note/actions";
import { RootState } from "../../store/RootReducer";
import { NoteState } from "../../store/note/reducer";

const ReduxState = () => {
  const dispatch = useDispatch();

  const notes = useSelector<RootState, NoteState["data"]>(
    (state) => state.note.data
  );

  const [note, setNote] = React.useState<string>("");
  const noteInput = React.useRef<HTMLInputElement>(null);

  const udpateNote = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setNote(event.currentTarget.value);
  };

  const addForward = (note: string): void => {
    if (!note.trim()) return;
    dispatch(NoteActions.prepend(note));
    setNote("");
    noteInput.current?.focus();
  };

  const addBackward = (note: string): void => {
    if (!note.trim()) return;
    dispatch(NoteActions.append(note));
    setNote("");
    noteInput.current?.focus();
  };

  const removeForward = (): void => {
    dispatch(NoteActions.removeFirst());
  };

  const removeBackward = (): void => {
    dispatch(NoteActions.removeLast());
  };

  const removeAll = (): void => {
    dispatch(NoteActions.removeAll());
  };

  return (
    <div className="redux-state">
      <div className="input-group">
        <input
          type="text"
          placeholder="Type your note..."
          ref={noteInput}
          value={note}
          onChange={udpateNote}
        />
        <button type="button" onClick={() => addForward(note)}>
          Add in the start
        </button>
        <button type="button" onClick={() => addBackward(note)}>
          Add in the end
        </button>
        <button type="button" onClick={() => removeForward()}>
          Remove first
        </button>
        <button type="button" onClick={() => removeBackward()}>
          Remove last
        </button>
        <button type="button" onClick={() => removeAll()}>
          Remove all
        </button>
      </div>

      {notes.length > 0 && (
        <ul className="redux-state-list">
          {notes.map(
            (note: string, index: number): React.ReactNode => (
              <li key={index}>{`${index + 1}) ${note}`}</li>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default ReduxState;
