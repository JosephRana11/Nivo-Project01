import React from "react";
import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import { useState } from "react";
import propTypes from 'prop-types'
import { ResponsiveBullet } from "@nivo/bullet";

export default function BulletGraph(){
  const [currentlayout,updateLayout] = useState('vertical');

  function switch_layout(){
    currentlayout === 'vertical'?(updateLayout('horizontal')):(updateLayout('vertical'))
  }
  const bulletData = [
    {
      "id": "temp.",
      "ranges": [
        72,
        30,
        44,
        0,
        120
      ],
      "measures": [
        67
      ],
      "markers": [
        110
      ]
    },
    {
      "id": "power",
      "ranges": [
        1.3688095475419402,
        0.10979756863220465,
        0.9372068772539852,
        0,
        2
      ],
      "measures": [
        0.021714877809322443,
        1.464618944013389
      ],
      "markers": [
        1.492432298196011
      ]
    },
    {
      "id": "volume",
      "ranges": [
        8,
        12,
        40,
        5,
        51,
        2,
        0,
        60
      ],
      "measures": [
        46
      ],
      "markers": [
        36
      ]
    },
    {
      "id": "cost",
      "ranges": [
        307903,
        178830,
        123003,
        0,
        500000
      ],
      "measures": [
        209353,
        244142
      ],
      "markers": [
        454578
      ]
    },
    {
      "id": "revenue",
      "ranges": [
        5,
        4,
        1,
        0,
        9
      ],
      "measures": [
        2
      ],
      "markers": [
        7.032163940526051,
        8.230625527433586
      ]
    }
  ]
  const MyResponsiveBullet = ({ data /* see data tab */ }) => (
    <ResponsiveBullet
        data={data}
        margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
        layout= {currentlayout}
        spacing={46}
        titleAlign="start"
        titleOffsetX={-70}
        measureSize={0.2}
    />
)
MyResponsiveBullet.propTypes = {
  data : propTypes.object.isRequired
}
  return (
    <CCard>
    <CCardHeader>
      <h4>Funnel Graph</h4>
      <button className="button-55" onClick={switch_layout}>Change Layout</button>
    </CCardHeader>
    <CCardBody style={{height:'550px'}}>
    <MyResponsiveBullet data={bulletData}/>
    </CCardBody>
   </CCard>
  )
}