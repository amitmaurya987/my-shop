

import React from 'react'
import { TabItemWrapper } from './styel'

function TabItem({num="1",title="",className="", onclick=() =>{}}) {
  return (
    <TabItemWrapper className='center gap-12' onClick={onclick}>
        <div className={`numberBox center ${className}`}>
            {num}
        </div>
        <div className='text'>{title}</div>
      
    </TabItemWrapper>
  )
}

export default TabItem;
