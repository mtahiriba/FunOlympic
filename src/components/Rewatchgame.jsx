import React from 'react'
import { Rewatch } from './Rewatch'
import LiveStreamBox from './LiveStreamBox'

export default function Rewatchgame() {
  return (
    <>
    {
        Rewatch.map((data) => {
            return(
                <LiveStreamBox data={data} btnText={"Re-watch Game"}/>
            )
            
        })
    }
    </>
  )
}
