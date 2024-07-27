

import React from 'react'
import { TabWrapper } from './styel'
import TabItem from './TabItem';
import img from "../../../assets/rightAngleGray.png";

function StepTab({setTab,tab}) {
  return (
    <TabWrapper  className='flex justify-between gap-6'>
       <TabItem className={(tab == 1)?"active":tab> 1?"done":""}
          title='Review'
          num={1}
        />
        <div className="angle center">
            <img src={img} alt="img" />
        </div>
       <TabItem 
       className={(tab == 2)?"active":tab> 2?"done":""}
       title='Domain Creation'
       num={2}
        />
         <div className="angle center">
            <img src={img} alt="img" />
        </div>
       <TabItem 
       className={(tab == 3)?"active":tab> 3?"done":""}
       title='Numbers'
       num={3}
        />
         <div className="angle center">
            <img src={img} alt="img" />
        </div>
       <TabItem 
       className={(tab == 4)?"active":tab> 4?"done":""}
       title='User Creation'
       num={4}
        />
       <TabItem 
       className={(tab == 5)?"active":tab> 5?"done":""}
       title='Credit Card Info'
       num={5}
        />
      
    </TabWrapper>
  )
}

export default StepTab
