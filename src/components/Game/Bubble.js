import React, { Component } from 'react'
import styles from './Bubble.css'

class Bubble extends Component {
    constructor(props){
        super(props)
        this.state = {
        count:0,

         }}

    counter = () =>{
        this.setState(prevState =>{
            return{
                count:prevState.count +1
            }
        })
    }

    handleClick= () => {
        this.props.stopCounter({
            top:Math.floor(Math.random()*500),
            left:Math.floor(Math.random()*200)})
    }
    componentDidMount(){
        this.timer = setInterval(this.counter, 10000)
      /*   console.log('Component did mount') */
    }

      /* componentDidUpdate(prevProps, prevState){
        if(this.props.style == prevProps.style){
            return true
        } 
         console.log('Component Counter Updated from:', prevState.count) 
    } */

    componentWillUnmount(){
        /* console.log(this.state) */
       if(this.state.count == 50){
       return clearInterval(this.timer)
    }
    }
    render() {
      /*   console.log('I am in the render of the counter')
        console.log(this.props) */
        /* console.log(this.props.style.left) */
        return (
            <div className ={styles.bubble}>
                <h1>{this.state.count}</h1>
                <div className ='bubble' 
                style = {{width :`${this.state.count}px`, height:`${this.state.count}px`,top:`${this.props.style.top}px`, left: `${this.props.style.left}px` } }
                onClick = {()=>this.handleClick()}
                >

                </div>
            </div>
        )
    }
}

export default Bubble
