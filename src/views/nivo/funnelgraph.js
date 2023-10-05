import React, { useState } from "react";
import { ResponsiveFunnel } from "@nivo/funnel";
import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import propTypes from 'prop-types'
import '../style/bar.css'

export default function FunnelGraph(){
  const [currentlayout,updateLayout] = useState('vertical');

  function switch_layout(){
    currentlayout === 'vertical'?(updateLayout('horizontal')):(updateLayout('vertical'))
  }


  const funnelData = [
    {
      "id": "step_sent",
      "value": 90369,
      "label": "Sent"
    },
    {
      "id": "step_viewed",
      "value": 76164,
      "label": "Viewed"
    },
    {
      "id": "step_clicked",
      "value": 66807,
      "label": "Clicked"
    },
    {
      "id": "step_add_to_card",
      "value": 53596,
      "label": "Add To Card"
    },
    {
      "id": "step_purchased",
      "value": 37728,
      "label": "Purchased"
    }
  ]
  const MyResponsiveFunnel = ({ data /* see data tab */ }) => (
    <ResponsiveFunnel
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        direction = {currentlayout}
        valueFormat=">-.4s"
        colors={{ scheme: 'yellow_green' }}
        borderWidth={20}
        labelColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    3
                ]
            ]
        }}
        beforeSeparatorLength={100}
        beforeSeparatorOffset={20}
        afterSeparatorLength={100}
        afterSeparatorOffset={20}
        currentPartSizeExtension={10}
        currentBorderWidth={40}
        motionConfig="wobbly"
    />
)
MyResponsiveFunnel.propTypes = {
  data : propTypes.object.isRequired
}
  return (
   <CCard>
    <CCardHeader>
      <h4>Funnel Graph</h4>
      <button className="button-55" onClick={switch_layout}>Change Layout</button>
    </CCardHeader>
    <CCardBody style={{height:'550px'}}>
    <MyResponsiveFunnel data={funnelData}/>
    </CCardBody>
   </CCard>
  )
}