import React from "react";
import Button from './Button'
import renderer from 'react-test-renderer';

describe("Button component", () => {
  test("Matches the snapshot", () => {
    const wrapper = renderer.create(<Button onPress={() => {}} title={''} variant='DEFAULT' />);

    expect(wrapper.toJSON());
  });
});