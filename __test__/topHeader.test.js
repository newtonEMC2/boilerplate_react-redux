import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "./utils";
import TopHeader from "../src/components/headers/TopHeader";

const setUp = (props = {}) => shallow(<TopHeader {...props} />);

describe("header component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("renders without errors", () => {
    const wrapper = findByTestAttr(component, "header");
    expect(wrapper.length).toBe(1);
  });
});
