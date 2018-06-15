import React from "React";

class SVGArea extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      node: undefined
    };
  }

  renderChilds() {
    const { children } = this.props;
    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { svg: this.state.node })
    );

    return childrenWithProps;
  }

  render() {
    const { node } = this.state;
    return (
      <React.Fragment>
        <svg ref={node => this.setState({ node })} width="100%" height="100%" />
        {node && this.renderChilds()}
      </React.Fragment>
    );
  }

}

export default SVGArea;
