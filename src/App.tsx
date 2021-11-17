import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TemplateBasic from "./components/templates/TemplateBasic";
import TempArticle from "./components/TempArticle";
import Logo from "./components/UI/svg/Logo";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <TemplateBasic></TemplateBasic>
    </div>
  );
}

export default App;
