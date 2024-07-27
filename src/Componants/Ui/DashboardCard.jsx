

import React from 'react'
import { DashboardCardWrapper } from './Input/Style';

function DashboardCard({img="", title="", value="",key=""}) {
  return (
    <DashboardCardWrapper className="flex align-center gap-10" key={key}>
       <img src={img} alt="title" />
       <div>
        <h2>{title}</h2>
        <h3>{value}</h3>
       </div>
    </DashboardCardWrapper>
  )
}

export default DashboardCard;
