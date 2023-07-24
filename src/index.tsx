import * as React from "react";
import { render } from "react-dom";
import { RecoilRoot } from "recoil";
import GlobalModal from "./components/GlobalModal";

import App from "./App";

const rootElement = document.getElementById("root");
render(
  <RecoilRoot>
    <GlobalModal />
    <App />
  </RecoilRoot>,
  rootElement
);
