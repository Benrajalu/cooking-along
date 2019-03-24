import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs/react";
import centered from "@storybook/addon-centered";

import Shell from "./Shell";

storiesOf("Shell", module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add("Default", () => <Shell>{text("children", "Hello world")}</Shell>);
