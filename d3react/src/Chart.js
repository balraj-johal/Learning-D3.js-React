import React, { Component, useEffect } from 'react';
import * as d3 from 'd3';

export default function Chart(props) {
    const ref = React.createRef();

    useEffect(() => {
        let refAccess = d3.select(ref.current);
        refAccess.style('background-color', 'red');
    })

    return(
        <div ref={ref}>
            Test
        </div>
    )
}