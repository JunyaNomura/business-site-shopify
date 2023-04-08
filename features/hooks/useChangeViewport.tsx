import { useState, useEffect } from 'react'

//window幅が360px以下の時、viewportの幅を360pxに固定するための関数（レスポンシブ対応）
const changeViewport = () => {
  const [viewport, setViewport] = useState<string | undefined>(undefined);
  useEffect(() => {
    const switchViewport = () => {
     window.outerWidth > 360
       ? setViewport("width=device-width, initial-scale=1")
       : setViewport("width=360");         
    }
    window.addEventListener('resize', switchViewport)
    console.log(viewport)
  }, [viewport])
  return viewport;
}

export default changeViewport