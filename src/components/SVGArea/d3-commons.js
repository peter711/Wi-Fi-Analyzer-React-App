import { scaleLinear } from 'd3';

export function createScale(maxData, maxRange) {
    return scaleLinear()
        .domain([0, maxData])
        .range([0, maxRange]);
}
