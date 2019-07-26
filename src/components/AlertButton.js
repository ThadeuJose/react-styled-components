import React from 'react';
import styled from "styled-components";


class AlertButton extends React.Component{

  greeting (){
    alert('Hello World!');
  }

  render(){
    return (
      <button className={this.props.className} onClick={this.greeting}>{this.props.children}</button>
    );
  }

}

const StyledAlertButton = styled(AlertButton)`
  background: #ed3a2d;
  border: 2px solid #ed3a2d;
  border-radius: 3px;
  color: #FDFDFD;
  font-size: 1.2rem;
  margin: 1rem;
  padding: 1rem 1.5rem;
`;

export default StyledAlertButton;
