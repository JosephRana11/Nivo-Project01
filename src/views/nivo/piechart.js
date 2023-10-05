import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import propTypes from 'prop-types'
import { useState } from "react";
import '../style/bar.css'

export default function NivoPie(){

  const [currentTheme , updateTheme] = useState('purple_blue')
  const[currentRadius , updateRadius] = useState(0.5)

  function switch_theme(){
    const themeArray = ['brown_blueGreen','purpleRed_green','pink_yellowGreen','purple_orange','red_blue','red_grey','red_yellow_blue','red_yellow_green','spectral','blues','greens','greys','oranges','purples',]
    let randIndex = Math.floor(Math.random()*themeArray.length)
    const randomTheme = themeArray[randIndex];
    console.log(randomTheme)
    updateTheme(randomTheme)
  }
  function switch_radius(){
    currentRadius === 0.5 ? (updateRadius(0)): updateRadius(0.5)
  }


  const piedata = [
    {
      "id": "Plastic bags",
      "label": "Plastic bags",
      "value": 14.1,
      "color": "hsl(158, 70%, 50%)"
    },
    {
      "id": "Plastic bottles",
      "label": "Plastic bottles",
      "value": 11.9,
      "color": "hsl(47, 70%, 50%)"
    },
    {
      "id": "Container/Cutlery",
      "label": "Container/Cutlery",
      "value": 9.4,
      "color": "hsl(273, 70%, 50%)"
    },
    {
      "id": "Wrappers",
      "label": "Wrappers",
      "value": 9.1,
      "color": "hsl(206, 70%, 50%)"
    },
    {
      "id": "Syntetic rope",
      "label": "Synthetic rope",
      "value": 7.9,
      "color": "hsl(315, 70%, 50%)"
    },
    {
      "id": "Fishing items",
      "label": "Fishing items",
      "value": 7.6,
      "color": "hsl(315, 70%, 50%)"
    },
    {
      "id": "Plastic caps/Leads",
      "label": "Plastic caps/Leads",
      "value": 6.1,
      "color": "hsl(315, 70%, 50%)"
    },
    {
      "id": "Industrial packaging",
      "label": "Industrial packaging",
      "value": 3.4,
      "color": "hsl(315, 70%, 50%)"
    },
    {
      "id": "Glass bottles",
      "label": "Glass bottles",
      "value": 3.4,
      "color": "hsl(315, 70%, 50%)"
    },
    {
      "id": "Drink cans",
      "label": "Drink cans",
      "value": 3.2,
      "color": "hsl(315, 70%, 50%)"
    }
  ]
  const MyResponsivePie = ({ data /* see data tab */ }) => (
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius= {currentRadius}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: currentTheme }}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                justify: false,
                translateX: 0,
                translateY: 0,
                itemWidth: 100,
                itemHeight: 20,
                itemsSpacing: 0,
                symbolSize: 20,
                itemDirection: 'left-to-right'
            }
        ]}
    />
)
MyResponsivePie.propTypes = {
  data: propTypes.object.isRequired
}
  return (
    <CCard>
      <CCardHeader>
      <CRow>
      <CCol sm={6}>
        <h4>Nivo PieChart</h4>
      </CCol>
      <CCol sm={7}>
      <button className="button-55" onClick={switch_theme}>Switch theme</button>
      <button className="button-55" onClick={switch_radius}>Switch Type</button>
      </CCol>
      </CRow>
      </CCardHeader>
      <CCardBody style={{height:'600px'}}>
      <MyResponsivePie data={piedata}/>

      </CCardBody>
    </CCard>
  )
}