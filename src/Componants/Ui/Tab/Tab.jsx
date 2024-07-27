

import React from 'react'
import { TabWrapper } from './styel'
import TabItem from './TabItem';
import img from "../../../assets/rightAngleGray.png";

function Tab({setTab,tab}) {
  return (
    <TabWrapper  className='flex justify-between gap-6'>
       <TabItem className={(tab == 1)?"active":tab> 1?"done":""}
          title='Devices & Phones'
          num={1}
        />
        <div className="angle center">
            <img src={img} alt="img" />
        </div>
       <TabItem 
       className={(tab == 2)?"active":tab> 2?"done":""}
       title='Company Info'
       num={2}
        />
         <div className="angle center">
            <img src={img} alt="img" />
        </div>
       <TabItem 
       className={(tab == 3)?"active":tab> 3?"done":""}
       title='Company Address'
       num={3}
        />
         <div className="angle center">
            <img src={img} alt="img" />
        </div>
       <TabItem 
       className={(tab == 4)?"active":tab> 4?"done":""}
       title='Contact Info'
       num={4}
        />
      
    </TabWrapper>
  )
}

export default Tab
