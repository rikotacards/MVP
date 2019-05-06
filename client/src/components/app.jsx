import React from 'react';
import MenuList from './menuList.jsx'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      menuItems:[{name:'Luberjack Slam', price:21, rating:10, desc:'tomatosauce,porkcheeks,pecorinocheese', category:'main'},{name:'All-American Slam', price:21, rating:10, desc:'eggs, pork cheeks, parmesan cheese', category:'main'},{name:'Belgian waffle Slam', price:54, rating:10, desc:'Buttermilk pancakes, eggs, bacon strips and sausage links. Served with hash browns or choice of bread, plus coffee and juice.', category:'main'},{name:'French Toast Slam', price:54, rating:10, desc:'Buttermilk pancakes, eggs, bacon strips and sausage links. Served with hash browns or choice of bread, plus coffee and juice.', category:'main'},{name:'Grand Slam Slugger', price:54, rating:10, desc:'Buttermilk pancakes, eggs, bacon strips and sausage links. Served with hash browns or choice of bread, plus coffee and juice.', category:'main'},{name:'Grand Slam Slugger', price:54, rating:10, desc:'Buttermilk pancakes, eggs, bacon strips and sausage links. Served with hash browns or choice of bread, plus coffee and juice.', category:'main'},{name:'Grand Slam Slugger', price:54, rating:10, desc:'Buttermilk pancakes, eggs, bacon strips and sausage links. Served with hash browns or choice of bread, plus coffee and juice.', category:'main'},
      {name:'Tequila Shot', price:54, rating:10, desc:'Buttermilk pancakes, eggs, bacon strips and sausage links. Served with hash browns or choice of bread, plus coffee and juice.', category:'drinks'},{name:'Vodka Shot', price:54, rating:10, desc:'Buttermilk pancakes, eggs, bacon strips and sausage links. Served with hash browns or choice of bread, plus coffee and juice.', category:'drinks'},{name:'Grand Slam Slugger', price:54, rating:10, desc:'Buttermilk pancakes, eggs, bacon strips and sausage links. Served with hash browns or choice of bread, plus coffee and juice.', category:'drinks'},{name:'Grand Slam Slugger', price:54, rating:10, desc:'Buttermilk pancakes, eggs, bacon strips and sausage links. Served with hash browns or choice of bread, plus coffee and juice.', category:'drinks'},{name:'Grand Slam Slugger', price:54, rating:10, desc:'Buttermilk pancakes, eggs, bacon strips and sausage links. Served with hash browns or choice of bread, plus coffee and juice.', category:'drinks'},{name:'Grand Slam Slugger', price:54, rating:10, desc:'Buttermilk pancakes, eggs, bacon strips and sausage links. Served with hash browns or choice of bread, plus coffee and juice.', category:'drinks'}]
    }
  }

  render(){

    const style = {
      border:'5px solid pink'
    }

    return(
      <div>
      <MenuList menuItems = {this.state.menuItems}/>
      </div>
    )
  }

}

export default App;