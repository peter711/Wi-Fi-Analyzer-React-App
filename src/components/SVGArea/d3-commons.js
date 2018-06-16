import { scaleLinear } from 'd3';

export function createScale(maxData, maxRange) {
    return scaleLinear()
        .domain([0, maxData])
        .range([0, maxRange]);
}

export function calculateTransformRangeRation(oldScale, newScale) {
    const maxOldScale = oldScale.range()[1];
    const maxNewScale = newScale.range()[1];

    return maxNewScale / maxOldScale;
}
