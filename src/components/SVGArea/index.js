import React from "React";
import * as d3Commons from './d3-commons';

class SVGArea extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      node: undefined
    };
  }

  componentWillUpdate(nextProps, nextState) {
    this._initScales(nextState, nextProps);
  }

  renderChilds() {
    const { children } = this.props;
    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { 
        svg: this.state.node,
        xScale: this.state.xScale,
        yScale: this.state.yScale
      })
    );

    return childrenWithProps;
  }

  svgReady() {
    const { node, yScale, xScale } = this.state;
    return node && yScale && xScale;
  }

  render() {
    const { node } = this.state;
    return (
      <React.Fragment>
        <svg ref={node => this.setState({ node })} width="100%" height="100%" />
        {this.svgReady() && this.renderChilds()}
      </React.Fragment>
    );
  }

  _initScales({ node, xScale, yScale }, { distance }) {
    if (node && !xScale && !yScale) {
      this.setState({
        yScale: d3Commons.createScale(distance, node.clientHeight),
        xScale: d3Commons.createScale(distance, node.clientWidth)
      });
    }
  }
  
}

export default SVGArea;
