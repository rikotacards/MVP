import React from 'react';

class Reviews extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      showReviews: false,
      reviews:[
        {userName:'bob',review:'The burger is great, love it'},
        {userName:'Tom', review:'not sure what to think about it to be honest'},
        {userName:'Jerry',review:'This is the one I always order, order it!'},
        {userName:'Anna',review:'Really really really really really like this burger you have to order it. Its a must. Just do it.'},
        {userName:'Anna',review:'Dont get it'}
      ]
    }
    this.toggleReviews = this.toggleReviews.bind(this)
  }

  retrieveReview(){
    //do ajax pull for product ID
  }

  toggleReviews(){
    this.setState({
      showReviews:!this.state.showreviews
    },()=>console.log(this.state.reviews))
  }

  render(){
    if(!this.props.reviewsState){
      return(
        <div>
          <div className = 'showreviews' onClick = {this.toggleReviews}defaultValue = 'show reviews'>show reviews</div>
        </div>
      )
    } else {
      return (
       <div>
        <form>
          <input type='text'></input>
        </form>
        {this.state.reviews.map((i,index)=>
          <div className = 'reviewContent'>{i.review} - <span className ='userName'>{i.userName}</span></div>

          )}
          </div>
      )
    }

  }
}

export default Reviews;