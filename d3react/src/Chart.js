import React, { Component, useEffect } from 'react';
import * as d3 from 'd3';

export default function Chart(props) {
    const ref = React.createRef();

    useEffect(() => {
        let refAccess = d3.select(ref.current);
        refAccess.append('svg') //create svg item and append to div
            .attr('width', props.width)
            .attr('height', props.height)
            .style('background-color', 'grey')
            .style('padding', '1em')
            .selectAll('rect') //select all ref items
                .data(props.data) //join test data
                //return all rects corresp. to data elements that aren't currently in DOM
                .enter()
                .append('rect') //create required rects
                .attr('x', (data, index) => index * 70) //translate x axis of rects
                .attr('y', (data, index) => props.height - 10 * data) //translate y axis of rects
                .attr('width', 65)
                .attr('height', (data, index) => data * 10)
                .attr('fill', props.color)
    }, [])

    return(
        <div ref={ref}>
            
        </div>
    )
}