import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import PropTypes from 'prop-types';
import '../style/bar.css'
import { useState } from "react";
import { DataTable } from "./datatable";

export default function NivoBar() {
const [vertOrder , setVertOrder] = useState('vertical')
const [viewType , setViewType] = useState('Graph')

function switch_to_graph(){
  setViewType('Graph')
}
function switch_to_table(){
  setViewType('Table')
}

function switch_to_horizental(){
  setVertOrder('horizontal')

}

function switch_to_vert(){
  setVertOrder('vertical')
}

const bardata = [
  {
    "country": "AD",
    "hot dog": 112,
    "hot dogColor": "hsl(190, 70%, 50%)",
    "burger": 9,
    "burgerColor": "hsl(237, 70%, 50%)",
    "sandwich": 166,
    "sandwichColor": "hsl(30, 70%, 50%)",
    "kebab": 191,
    "kebabColor": "hsl(140, 70%, 50%)",
    "fries": 4,
    "friesColor": "hsl(278, 70%, 50%)",
    "donut": 190,
    "donutColor": "hsl(216, 70%, 50%)"
  },
  {
    "country": "AE",
    "hot dog": 48,
    "hot dogColor": "hsl(246, 70%, 50%)",
    "burger": 86,
    "burgerColor": "hsl(321, 70%, 50%)",
    "sandwich": 160,
    "sandwichColor": "hsl(7, 70%, 50%)",
    "kebab": 116,
    "kebabColor": "hsl(112, 70%, 50%)",
    "fries": 121,
    "friesColor": "hsl(275, 70%, 50%)",
    "donut": 40,
    "donutColor": "hsl(355, 70%, 50%)"
  },
  {
    "country": "AF",
    "hot dog": 188,
    "hot dogColor": "hsl(172, 70%, 50%)",
    "burger": 140,
    "burgerColor": "hsl(67, 70%, 50%)",
    "sandwich": 39,
    "sandwichColor": "hsl(305, 70%, 50%)",
    "kebab": 115,
    "kebabColor": "hsl(125, 70%, 50%)",
    "fries": 98,
    "friesColor": "hsl(142, 70%, 50%)",
    "donut": 182,
    "donutColor": "hsl(311, 70%, 50%)"
  },
  {
    "country": "AG",
    "hot dog": 177,
    "hot dogColor": "hsl(54, 70%, 50%)",
    "burger": 173,
    "burgerColor": "hsl(250, 70%, 50%)",
    "sandwich": 78,
    "sandwichColor": "hsl(5, 70%, 50%)",
    "kebab": 63,
    "kebabColor": "hsl(220, 70%, 50%)",
    "fries": 124,
    "friesColor": "hsl(318, 70%, 50%)",
    "donut": 34,
    "donutColor": "hsl(345, 70%, 50%)"
  },
  {
    "country": "AI",
    "hot dog": 23,
    "hot dogColor": "hsl(312, 70%, 50%)",
    "burger": 132,
    "burgerColor": "hsl(286, 70%, 50%)",
    "sandwich": 78,
    "sandwichColor": "hsl(62, 70%, 50%)",
    "kebab": 133,
    "kebabColor": "hsl(45, 70%, 50%)",
    "fries": 99,
    "friesColor": "hsl(329, 70%, 50%)",
    "donut": 18,
    "donutColor": "hsl(233, 70%, 50%)"
  },
  {
    "country": "AL",
    "hot dog": 75,
    "hot dogColor": "hsl(323, 70%, 50%)",
    "burger": 139,
    "burgerColor": "hsl(184, 70%, 50%)",
    "sandwich": 96,
    "sandwichColor": "hsl(198, 70%, 50%)",
    "kebab": 61,
    "kebabColor": "hsl(231, 70%, 50%)",
    "fries": 92,
    "friesColor": "hsl(335, 70%, 50%)",
    "donut": 125,
    "donutColor": "hsl(104, 70%, 50%)"
  },
  {
    "country": "AM",
    "hot dog": 147,
    "hot dogColor": "hsl(1, 70%, 50%)",
    "burger": 6,
    "burgerColor": "hsl(260, 70%, 50%)",
    "sandwich": 180,
    "sandwichColor": "hsl(253, 70%, 50%)",
    "kebab": 160,
    "kebabColor": "hsl(272, 70%, 50%)",
    "fries": 61,
    "friesColor": "hsl(262, 70%, 50%)",
    "donut": 141,
    "donutColor": "hsl(75, 70%, 50%)"
  }
]

const MyResponsiveBar = ({ data }) => (
  <ResponsiveBar
    data={data}
    keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
    indexBy="country"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    layout={vertOrder}
    valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'purples' }}
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
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: (vertOrder === 'vertical'?'Country':'food'),
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: (vertOrder === 'vertical'?'food':'Country'),
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
  />
);

MyResponsiveBar.propTypes = {
  data: PropTypes.array.isRequired,
};

  return (
    <CCard>
      <CCardHeader>
      <CRow>
      <CCol sm={6}>
        <h4>Nivo Bar Graph</h4>
      </CCol>
      <CCol sm={6}>
      <button className="button-55" onClick={switch_to_horizental}>Horizontol</button>
      <button className="button-55" onClick={switch_to_vert}>Vertical</button>
      <button className="button-55" onClick={switch_to_table}>Data</button>
      <button className="button-55" onClickCapture={switch_to_graph}>Graph</button>
      </CCol>
      </CRow>
      </CCardHeader>
      <CCardBody style={{ height: '600px' }}>{
      viewType === 'Graph'?(
        <MyResponsiveBar data={bardata} />
      ):(
        <DataTable tableData ={bardata}/>
      )
      }
      </CCardBody>
    </CCard>
  );
}
