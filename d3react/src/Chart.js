import React, { Component, useEffect } from 'react';
import * as d3 from 'd3';

export default function Chart(props) {
    let {data, height, width, color} = props;

    const ref = React.useRef(null); //creates ref for d3 to select with
    const group = d3.select(ref.current);

    //calls function whenever variable provided in second parameter
    //is changed
    useEffect(() => {
        const update = group.selectAll('rect')
            .data(data); //joins data

        update.enter() //returns DOM items that need to be created (?)
            .append('rect') //create required rects
            .merge(update)
            .attr('x', (d, index) => index * 70) //translate x axis of rects
            .attr('y', (d, index) => props.height - 10 * d) //translate y axis of rects
            .attr('width', 65)
            .attr('height', (d, index) => d * 10)
            .attr('fill', color);

        update.exit().remove(); //remove "redundant" rects
    }, [props.data])

    return(
        <svg width={width} height={height} 
            style={{backgroundColor:'grey', padding: '1em'}}>
            <g ref={ref} />
        </svg>
    )
}