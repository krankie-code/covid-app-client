import React, { Component } from 'react'
import BubbleHandler from './BubbleHandler'
import BubbleHandler2 from './BubbleHandler2'
import BubbleHandler3 from './BubbleHandler3'
import BubbleHandler4 from './BubbleHandler4'
import BubbleHandler5 from './BubbleHandler5'


export class Game extends Component {
  constructor(props){
    super(props)
    this.state = {
    isRunning:true,
    count:0

     }}

     counter = () =>{
      this.setState(prevState =>{
          return{
              count:prevState.count +1
          }
      })
  }


  componentDidMount(){
    this.timer = setInterval(this.counter, 1000)
  /*   console.log('Component did mount') */
}
componentWillUnmount(){
  clearInterval(this.timer)
}

stopGame =() =>{
        /* clearInterval(this.timer) */
         return this.props.history.push(`/results?count=${this.state.count}`) 
        
}



  render() {
    return this.state.isRunning ?(
      <div>
      <h1>{this.state.count}</h1>
        <BubbleHandler stopGame = {this.stopGame}/>
        <BubbleHandler2 stopGame = {this.stopGame}/>
        <BubbleHandler3 stopGame = {this.stopGame}/>
        <BubbleHandler4 stopGame = {this.stopGame}/>
        <BubbleHandler5 stopGame = {this.stopGame}/>
    
      </div>
    ) : null
  }
}

export default Game