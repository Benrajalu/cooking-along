import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, select } from "@storybook/addon-knobs/react";
import centered from "@storybook/addon-centered";

import RichContent from "./RichContent";

const markdownCopy = `# Hello
Hello **world**, how ~~are~~ you [doing](http://www.google.com) today?
## We'll be doing some styling now
So, *italics* work that way.
We are also doing lists
* The basic ones
* Like this one

But also numbered

1. Test 
2. Test 

# H1
## H2
### H3
#### H4
##### H5
###### H6

## Tables

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |`;

storiesOf("RichContent", module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <div style={{ width: "600px" }}>
      <RichContent>{text("children", markdownCopy)}</RichContent>
    </div>
  ))
  .add("Custom Class", () => (
    <RichContent className="testClass">
      {text("children", "Hello world")}
    </RichContent>
  ));
