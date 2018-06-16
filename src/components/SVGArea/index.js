import React from "React";
import * as d3Commons from './d3-commons';

class SVGArea extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      node: undefined,
      accessPointX: undefined,
      accessPointY: undefined,
      accessPointRadius: undefined,
      updateAccessPointCoords: this.updateAccessPointCoords
    };
  }

  componentWillUpdate(nextProps, nextState) {
    this._initScales(nextState, nextProps);
  }

  renderChilds() {
    const { children } = this.props;

    const childrenWithProps = React.Children.map(children, child => {
      const newProps = {
        svg: this.state.node,
        xScale: this.state.xScale,
        yScale: this.state.yScale,
        accessPointX: this.state.accessPointX,
        accessPointY: this.state.accessPointY,
        accessPointRadius: this.state.accessPointRadius
      };

      if (child.type.name === 'AccessPoint') {
        Object.assign(newProps, {
          updateAccessPointCoords: (params) => this.updateAccessPointCoords(params)
        });
      }

      return (React.cloneElement(child, newProps));
    }
    );

    return childrenWithProps;
  }

  svgReady() {
    const { node, yScale, xScale } = this.state;
    return node && yScale && xScale;
  }

  updateAccessPointCoords({ radius, x, y }) {
    this.setState({
      accessPointRadius: radius,
      accessPointX: x,
      accessPointY: y
    });
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
