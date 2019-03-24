import React from "react";
import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered";

import Shell from "./Shell";

storiesOf("Shell", module)
  .addDecorator(centered)
  .add("Default", () => <Shell />);
