import React from "react";
import ExitIcon from './ExitIcon'
import renderer from 'react-test-renderer';

describe("Button component", () => {
  test("Matches the snapshot", () => {
    const wrapper = renderer.create(<ExitIcon onPress={() => {}}/>);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});