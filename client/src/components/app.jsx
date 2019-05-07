import React from 'react';
import MenuList from './menuList.jsx'
import axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      menuItems:[]
    }
  }

  componentDidMount(){

    console.log('component mounted')
    axios({
      method:'get',
      url:'/1'
    })
    .then((res) => this.setState({
      menuItems: res.data
    }))
    .then(() => console.log ( this.state.menuItems ))
    .catch((error) => console.log('ERROR CAUGHT', error))
  }

  render(){

    return(
      <div>
      <MenuList menuItems = {this.state.menuItems}/>
      </div>
    )
  }

}

export default App;