import React from 'react';

import './styles.css';

export default function BackdropSidebar(props){
  console.log(props)



  return (
    <div className="backdrop" onClick={props.SidebarClick}> </div>
    
  )
}

