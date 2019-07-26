import React, { Component } from "react";
import styled from "styled-components";

class Button extends Component {
    render() {
        return(
            <button className={ this.props.className }>{ this.props.children }</button>
        );
    }

}
const BasicButton = styled(Button)`
    border-radius: 2px;
    font-size: 1.2rem;
    margin: 1rem;
    padding: .75rem 2rem;
    &:hover{
      border: 1px solid #FDFDFD;
    }
`;

const BlueButton = styled(BasicButton)`
  color: #FDFDFD;
  background: #33CCFF;
  border-color: #33CCFF;
`;

export {BasicButton, BlueButton};
