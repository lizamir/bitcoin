
import React from 'react';
import './Charts.scss'
import { Sparklines, SparklinesLine } from 'react-sparklines';

export function Charts({ data , title }) {

    return (
        <div>
            <h2>{title}</h2>
            <Sparklines data={data} margin={10} limit={100}>
                <SparklinesLine style={{ stroke: "none", strokeWidth: "1", fill: "rgb(247 59 59)" }} />
            </Sparklines>

        </div>
    )

}
