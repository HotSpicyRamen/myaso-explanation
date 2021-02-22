import React from "react";
import "./ReactState.scss";

const ReactState = ({ init = 1 }: { init?: number }) => {
  const [items, setItems] = React.useState<number>(init);

  React.useEffect(() => {
    document.title = `GET ${items} items`;
    console.log(`Changed state: GET ${items} items`);
  }, [items]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setItems(items + parseInt(event.currentTarget.value));
  };

  return (
    <div className="react-state">
      <div className="input-group">
        <button type="button" value={0} onClick={handleClick}>
          Add 0
        </button>
        <button type="button" value={1} onClick={handleClick}>
          Add 1
        </button>
        <button type="button" value={3} onClick={handleClick}>
          Add 3
        </button>
        <button type="button" value={5} onClick={handleClick}>
          Add 5
        </button>
      </div>
      <div className="output">
        <span>Items</span>
        <span>{items}</span>
      </div>
    </div>
  );
};

export default ReactState;
