
import React from 'react'


const mainLayoutNoAuth = (Component) => function HOC() {

  
    return (
      <div class="main-wrapper">
            
            <Component />
        </div>

  
    )
  }
  
  export default mainLayoutNoAuth