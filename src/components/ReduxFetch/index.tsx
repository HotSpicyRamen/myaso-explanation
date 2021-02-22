import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./ReduxFetch.scss";
import { JphActions, JphUrlProps } from "../../store/jph/actions";
import { RootState } from "../../store/RootReducer";
import { JphState } from "../../store/jph/reducer";

const ReduxFetch = () => {
  const [urlProps, setUrlProps] = React.useState<JphUrlProps>({
    start: 0,
    limit: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUrlProps((prev) => ({
      ...prev,
      [event.target.name]: event.target.valueAsNumber || 0,
    }));
  };

  const dispatch = useDispatch();

  const updateUrl = () => {
    if (urlProps.start + urlProps.limit > 5000) {
      console.log("Wrong Request. Photo limit: 5000");
    } else {
      dispatch(JphActions.setUrl(urlProps));
    }
  };

  const fetchUrl = () => {
    dispatch(JphActions.retrieve());
  };

  const photos = useSelector<RootState, JphState["data"]>(
    (state) => state.jph.data
  );

  return (
    <React.Fragment>
      <div className="redux-fetch">
        <div className="input-group">
          <input
            type="number"
            name="start"
            placeholder="Start"
            onChange={handleChange}
          />
          <input
            type="number"
            name="limit"
            placeholder="Limit"
            onChange={handleChange}
          />
          <input type="button" value="Set" onClick={updateUrl} />
        </div>
        <input type="button" value="Fetch" onClick={fetchUrl} />
      </div>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {photos.length &&
          photos.map((photo) => (
            <img
              key={photo.albumId + photo.id}
              style={{ width: "10%" }}
              src={photo.thumbnailUrl}
              title={photo.title}
            />
          ))}
      </div>
    </React.Fragment>
  );
};

export default ReduxFetch;
