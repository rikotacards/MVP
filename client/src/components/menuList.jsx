import React from 'react';
import MenuItem from './menuItem.jsx'

var MenuList = (props) =>{

  return(

    <div>
      <div className ='catStyle'>
      MAIN
      </div>

      {props.menuItems.map((i,index)=>{
          if(i.itemcategory === 'main'){

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
      if(i.itemcategory === 'drinks'){
        return(
          <MenuItem item={i} key={index}/>
        )
      }
    })}


  </div>
  )
};

export default MenuList;