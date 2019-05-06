import React from 'react';
import MenuItem from './menuItem.jsx'

const catStyle = {
  background:'lightgrey',
  position:'-webkit-sticky',
  position:'sticky',
  top:'0',
  height:'45px',
  fontSize:'35px',
}

var MenuList = (props) =>{

  return(


    <div>
      <div className ='catStyle'>
      MAIN
      </div>

      {props.menuItems.map((i,index)=>{
          if(i.category==='main'){

          return(
          <MenuItem item = {i} key ={index}/>
          )
        }
      }
    )}

    <div className = 'catStyle'>
      Drinks
    </div>
    {props.menuItems.map((i,index)=>{
      if(i.category==='drinks'){
        return(
          <MenuItem item={i} key={index}/>
        )
      }
    })}


  </div>
  )
};

export default MenuList;