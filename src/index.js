import React from "react";
import ReactDOM from "react-dom";
import { ButtonContainer } from "./Components/Button_styled/Button_Styled";
const App = () => {
  return (
    <React.Fragment>
      <h3>Animated Styled Components Buttons:</h3>

      <ButtonContainer>Hello</ButtonContainer>
      <ButtonContainer secondary>Hello</ButtonContainer>

    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
