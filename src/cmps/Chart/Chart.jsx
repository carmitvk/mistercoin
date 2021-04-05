import './Chart.scss'
import React from 'react';
import { Sparklines, SparklinesBars, SparklinesLine, SparklinesSpots, SparklinesReferenceLine, SparklinesNormalBand  } from 'react-sparklines';
//npm install react-sparklines --save

export function Chart({ data, color }) {

  return (
    <div className="chart">
      {
        <Sparklines data={data} width={50} height={20}>
            <SparklinesBars />

            <SparklinesLine color = {color} />

            <SparklinesLine style={{ fill: "none" }} />
            <SparklinesSpots />

            <SparklinesLine />
            <SparklinesReferenceLine type="mean" />

            <SparklinesLine style={{ fill: "none" }}/>
            <SparklinesNormalBand />

        </Sparklines>

      }
    </div>
  )
}