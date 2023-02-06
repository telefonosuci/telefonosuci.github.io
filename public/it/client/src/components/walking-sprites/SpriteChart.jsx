/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect, useRef } from 'react';

import { Chart, registerables } from 'chart.js';

import PropTypes from 'prop-types';

const SpriteChart = ({ powers }) => {

  const chartEl = useRef(null)
  const [ chartState, setChartState ] = useState(null)
  const [statePowers, setStatePowers] = useState(powers)
  const [graphStyle, setGraphStyle] = useState({
    width: '600px', heighth: '600px', margin: '0 auto'
  })

  useEffect(() => {
    Chart.register(...registerables);
  },[])

  useEffect(() => {
    setStatePowers(powers);
  }, [powers])

  useEffect(() => {
    console.log('Loading chart: ', statePowers);

    chartState && chartState.destroy()

    const data = {
      labels: ['Coding', 'Problem Solving', 'Social Skils', 'Speech', 'Copy And Paste'],
      datasets: [{
        label: "Ability",
        borderColor: "#E5B016",
        data: Object.values(statePowers)
      }]
    }

    const options = {
      scales: {
        r: {
            angleLines: {
                display: false
            },
            suggestedMin: 0,
            suggestedMax: 50
        }
      }
    }

    const ctx = chartEl.current.getContext("2d")
    console.log('Initializing chart with data: ', statePowers);
    setChartState(
      new Chart(ctx, {
        type: 'radar',
        data: data,
        options: options
      })
    )
  }, [statePowers])

  return (

    <div style={graphStyle}>
      <canvas id="js-ability-chart" width="200" height="200" ref={chartEl}></canvas>
    </div>
  )
}

SpriteChart.propTypes = {
  powers: PropTypes.shape({
    coding: PropTypes.number,
    problemsolving: PropTypes.number,
    socialskills: PropTypes.number,
    speech: PropTypes.number,
    copyandpaste: PropTypes.number
  })
};

SpriteChart.defaultProps = {
  powers: {}
}

export default SpriteChart