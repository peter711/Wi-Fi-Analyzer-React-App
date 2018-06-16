import React from "react";
import Layout from "./layout";

import { Provider } from "./context";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txPower: -16,
      radio: 2.4,
      updateAccessPoint: ({ txPower, radio }) =>
        this.setState({ txPower, radio })
    };
  }

  render() {
    return (
      <Provider value={this.state}>
        <Layout />
      </Provider>
    );
  }
}

export default App;
