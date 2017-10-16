import React, { Component } from 'react';
import MenuList from "../containers/menu-list"
import MenuDetail from "../containers/menu-detail"

export default class App extends Component {
  render() {
    return (
      <div>
          <MenuList />
          <MenuDetail  />
      </div>
    );
  }
}
