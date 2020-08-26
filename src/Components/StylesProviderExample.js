import React from "react";
import { StylesProvider } from "@material-ui/core/styles";
import {Button} from "@material-ui/core";
import '../css/styles.css';

export default function StylesProviderExample() {
  return (
    <StylesProvider injectFirst>
        <Button>Hook</Button>
    </StylesProvider>
  );
}