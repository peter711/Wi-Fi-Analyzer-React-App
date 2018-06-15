import React from "React";
import * as d3Commons from './d3-commons';

const MAX_DISTANCE_IN_M = 2000;

class SVGArea extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      node: undefined
    };
  }

  componentWillUpdate(prevProps, nextState) {
    this._initScales(nextState);
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

  _initScales({ node, xScale, yScale }) {
    if (node && !xScale && !yScale) {
      this.setState({
        yScale: d3Commons.createScale(MAX_DISTANCE_IN_M, node.clientHeight),
        xScale: d3Commons.createScale(MAX_DISTANCE_IN_M, node.clientWidth)
      });
    }
  }
  
}

export default SVGArea;
