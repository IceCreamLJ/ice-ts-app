import React from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
import Button from ".";

const defaultProps = {
  onClick: jest.fn()
}
describe("Button组件", () => {
  it("默认Button", () => {
    render(<Button {...defaultProps}>查询</Button>);
    const element = screen.getByText("查询");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element.disabled).toBeFalsy();
    expect(element).toHaveClass('btn btn-middle');
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  });
});
