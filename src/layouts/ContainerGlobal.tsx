import React from 'react';

interface IProps {
  children: React.ReactChild;
 }

export default class ContainerGlobal extends React.Component<IProps> {
  render() {
      return (
        <div className="containerGlobal">
          {this.props.children}
        </div>
      );
    }
  }