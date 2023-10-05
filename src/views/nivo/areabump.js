import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import React from "react";
import { ResponsiveAreaBump } from "@nivo/bump";
import { ResponsiveBump } from "@nivo/bump";
import propTypes from 'prop-types'
import '../style/bar.css'
import { useState } from "react";

export default function AreaBump() {
  const [chartType, updateChartType] = useState(1);


  function switch_to_chart(){
    chartType === 1 ? (updateChartType(2)) :updateChartType(1)
  }



  const areaBumpData = [
    {
      "id": "JavaScript",
      "data": [
        {
          "x": 2000,
          "y": 30
        },
        {
          "x": 2001,
          "y": 13
        },
        {
          "x": 2002,
          "y": 27
        },
        {
          "x": 2003,
          "y": 15
        },
        {
          "x": 2004,
          "y": 22
        },
        {
          "x": 2005,
          "y": 24
        }
      ]
    },
    {
      "id": "ReasonML",
      "data": [
        {
          "x": 2000,
          "y": 16
        },
        {
          "x": 2001,
          "y": 25
        },
        {
          "x": 2002,
          "y": 22
        },
        {
          "x": 2003,
          "y": 21
        },
        {
          "x": 2004,
          "y": 15
        },
        {
          "x": 2005,
          "y": 28
        }
      ]
    },
    {
      "id": "TypeScript",
      "data": [
        {
          "x": 2000,
          "y": 12
        },
        {
          "x": 2001,
          "y": 20
        },
        {
          "x": 2002,
          "y": 18
        },
        {
          "x": 2003,
          "y": 10
        },
        {
          "x": 2004,
          "y": 27
        },
        {
          "x": 2005,
          "y": 18
        }
      ]
    },
    {
      "id": "Elm",
      "data": [
        {
          "x": 2000,
          "y": 24
        },
        {
          "x": 2001,
          "y": 14
        },
        {
          "x": 2002,
          "y": 17
        },
        {
          "x": 2003,
          "y": 24
        },
        {
          "x": 2004,
          "y": 28
        },
        {
          "x": 2005,
          "y": 28
        }
      ]
    },
    {
      "id": "CoffeeScript",
      "data": [
        {
          "x": 2000,
          "y": 13
        },
        {
          "x": 2001,
          "y": 23
        },
        {
          "x": 2002,
          "y": 13
        },
        {
          "x": 2003,
          "y": 13
        },
        {
          "x": 2004,
          "y": 24
        },
        {
          "x": 2005,
          "y": 30
        }
      ]
    }
  ]
  const MyResponsiveAreaBump = ({ data /* see data tab */ }) => (
    <ResponsiveAreaBump
        data={data}
        margin={{ top: 40, right: 100, bottom: 40, left: 100 }}
        spacing={8}
        colors={{ scheme: 'nivo' }}
        blendMode="multiply"
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'CoffeeScript'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'TypeScript'
                },
                id: 'lines'
            }
        ]}
        startLabel="id"
        endLabel="id"
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -36
        }}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32
        }}
    />
)
const MyResponsiveBump = ({ data /* see data tab */ }) => (
  <ResponsiveBump
      data={data}
      colors={{ scheme: 'spectral' }}
      lineWidth={3}
      activeLineWidth={6}
      inactiveLineWidth={3}
      inactiveOpacity={0.15}
      pointSize={10}
      activePointSize={16}
      inactivePointSize={0}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={3}
      activePointBorderWidth={3}
      pointBorderColor={{ from: 'serie.color' }}
      axisTop={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: -36
      }}
      axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: 32
      }}
      axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'ranking',
          legendPosition: 'middle',
          legendOffset: -40
      }}
      margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
      axisRight={null}
  />
)
MyResponsiveAreaBump.propTypes = {
  data : propTypes.object.isRequired
}
MyResponsiveBump.propTypes = {
  data : propTypes.object.isRequired
}
  return (
    <CCard>
      <CCardHeader>
        <h4>
          Nivo Area Bump
        </h4>
        <button className="button-55" onClick={switch_to_chart} >Switch Chart</button>
      </CCardHeader>
      <CCardBody style={{height:'550px'}}>
      {
        chartType === 1 ? ( <MyResponsiveAreaBump data={areaBumpData}/>) : (<MyResponsiveBump data={areaBumpData}/>)

      }
      </CCardBody>
    </CCard>
  )
}