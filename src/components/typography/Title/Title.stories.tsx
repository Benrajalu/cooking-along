import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, select } from "@storybook/addon-knobs/react";
import centered from "@storybook/addon-centered";

import Title from "./Title";

storiesOf("Typography/Title", module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <Title>
      Hello <strong>world</strong>
    </Title>
  ))
  .add("Custom Class", () => (
    <Title className="testClass">{text("children", "Hello world")}</Title>
  ))
  .add("Sizes", () => (
    <Title size={select("size", ["small", "medium", "large"], "small")}>
      {text("children", "Hello world")}
    </Title>
  ));
