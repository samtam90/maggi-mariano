import React from "react";
import Decorations from ".";
import AppThemeProvider from "../AppThemeProvider";

export default {
  component: Decorations,
  title: "Decorations",
  argTypes: {
    onAnimationsEnd: { action: "onAnimationsEnd", table: { disable: true } },
  },
};

function wrapDecoration(deco) {
  return (
    <AppThemeProvider>
      <div className="h-screen content-center items-center">
        <div className="relative inline-block p-3">
          <p className="font-title text-lg text-gray-700 uppercase text-center inline-block">
            Something Something Something Something Something
          </p>
          {deco}
        </div>
      </div>
    </AppThemeProvider>
  );
}

const CircleTemplate = (args) =>
  wrapDecoration(<Decorations.Circle {...args} className="absolute inset-0" />);

const UnderlineTemplate = (args) =>
  wrapDecoration(<Decorations.Underline {...args} />);

const DoubleUnderlineTemplate = (args) =>
  wrapDecoration(<Decorations.DoubleUnderline {...args} />);

export const Circle = CircleTemplate.bind({});
export const Underline = UnderlineTemplate.bind({});
export const DoubleUnderline = DoubleUnderlineTemplate.bind({});

Circle.args = {
  active: false,
  hideOnTraced: true,
  stroke: "red",
  strokeWidth: 3,
};

Underline.args = {
  active: false,
  fill: "red"
};

DoubleUnderline.args = {
  active: false,
  fill: "red"
};
