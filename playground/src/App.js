import React, { useState } from "react";
import { BlockComponent, MessageComponent } from "autogestion-components";

const App = () => {
  const [message, setMessage] = useState({
    message: null,
    color: null,
  });

  return (
    <BlockComponent blocking={true} showSpinner={true}>
      <h2>Message Test!</h2>
      <MessageComponent {...message} segs={1000} />
      <button
        onClick={() =>
          setMessage({
            message: "It's Work!!!",
            color: "success",
          })
        }
      >
        Test
      </button>
    </BlockComponent>
  );
};

export default App;
