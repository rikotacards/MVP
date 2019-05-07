import React from 'react';
import Reviews from './Reviews.jsx'


const divStyle = {
  borderTop: '1px solid black',
  borderBottom: '1px solid black'
};

class MenuItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      showreviews:false
    }
    this.toggleReview = this.toggleReview.bind(this)
  }

  toggleReview(){
    this.setState({
      showreviews:!this.state.showreviews
    },()=>console.log(this.state.showreviews))

  }

  render(){
    return(
      <div className = 'itemContainer' style = {divStyle}>

      <div className = 'itemName'>
        {this.props.item.itemname}
      </div>
      {/* <div className = 'itemRating'>

      </div> */}
      <div className = 'itemPrice'>
        ${this.props.item.itemprice}
      </div>
      <div className = 'divider'></div>
      <div className ='itemDesc'>
        {this.props.item.itemdesc}
      </div>
      <div className ='itemReviews' >
      <Reviews itemId = {this.props.item.id} reviewsState = {this.state.showreviews}/>
      </div>
    </div>
    )
  }
}



// const MenuItem = (props) => {


//     return(
//       <div className = 'itemContainer' style = {divStyle}>

//         <div className = 'itemName'>
//           {props.item.name}
//         </div>
//         <div className = 'itemRating'>
//           {props.item.rating}
//         </div>
//         <div className = 'itemPrice'>
//           ${props.item.price}
//         </div>
//         <div className = 'divider'></div>
//         <div className ='itemDesc'>
//           {props.item.desc}
//         </div>
//         <div classname ='itemReviews'>
//         More Info
//         </div>
//       </div>
//       )

// }




export default MenuItem;