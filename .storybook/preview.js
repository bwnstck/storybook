import { addDecorator, addParameters } from "@storybook/html"; // <- or your storybook framework
import "@storybook/addon-console";
import "../src/global.css";

addDecorator(centered);
addParameters({
  a11y: {
    config: {},
    options: {},
  },
  layout: "fullscreen",
});
