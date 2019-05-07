import React from 'react';
import axios from 'axios'

class Reviews extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      showReviews: false,
      reviews:[],
      userReview:''
    }
    this.toggleReviews = this.toggleReviews.bind(this)
    this.retrieveReview = this.retrieveReview.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  retrieveReview(id){
    console.log('reviews trig',id)
    axios({
      method: 'get',
      url: `/1/${id}`
    })
    .then((res)=>this.setState({
      reviews:res.data
    }))
    .then(() => console.log( ' from react retrieve reviews', this.state.reviews ))
    .catch((error)=>console.log(error))
  }

  handleSubmit(e, itemId,callback){
    e.preventDefault();

    axios({
      method:'post',
      url: `/1/${itemId}`,
      data: {review: this.state.userReview}
    })
    .then(()=> callback(itemId))
  }

  handleChange(e){
    var review = e.target.value
    this.setState({
      userReview:review
    },()=>console.log(this.state.userReview))
  }

  toggleReviews(){
    this.setState({
      showReviews:!this.state.showReviews
    })
  }

  render(){
    if(!this.state.showReviews){
      return(
        <div>
          <div className = 'showreviews' onClick = {()=>{this.retrieveReview(this.props.itemId); this.toggleReviews()}} >show reviews</div>
        </div>
      )
    } else {
      return (
       <div>

        <div className ='showreviews' onClick = {this.toggleReviews}>Hide Reviews</div>
        {this.state.reviews.map((i,index)=>
          <div key = {index} className = 'reviewContent'>{i.reviewcontent} - <span className ='userName'>{i.username}</span></div>
          )}
           <form name='review' id='reviewform' onSubmit = {(event)=>{this.handleSubmit(event,this.props.itemId,this.retrieveReview)}}>
           <span>
          <input id='inputtext' className = 'inputform' name='content' type='text' form = 'reviewform' placeholder = 'Leave a review' onChange = {this.handleChange}></input>
          <input className = 'submit' type ='submit' defaultValue=''></input>
          </span>
        </form>
          </div>
      )
    }

  }
}

export default Reviews;