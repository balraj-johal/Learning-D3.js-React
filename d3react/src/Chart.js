import React, { Component, useEffect } from 'react';
import * as d3 from 'd3';

export default function Chart(props) {
    let {data, height, width, color} = props;
    const ref = React.useRef(null);
    const group = d3.select(ref.current);

    useEffect(() => {
        const update = group.selectAll('rect') //select all ref items
            .data(data); //join test data

        let bars = update.enter()
            .append('rect') //create required rects
            .merge(update)
            .attr('x', (d, index) => index * 70) //translate x axis of rects
            .attr('y', (d, index) => props.height - 10 * d) //translate y axis of rects
            .attr('width', 65)
            .attr('height', (d, index) => d * 10)
            .attr('fill', color);

        update.exit().remove();
    }, )

    return(
        <svg width={width} height={height} style={
            {backgroundColor:'grey', padding: '1em'}
        }>
          <g ref={ref} />
        </svg>
    )
}