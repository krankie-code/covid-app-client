import React, { Component } from 'react'
import styles from './Bubble.css'
import { withRouter } from 'react-router-dom'
import virus1 from '../../images/—Pngtree—orange mischief virus cute virus_5341821.png'

class Bubble5 extends Component {
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
        this.timer = setInterval(this.counter, 100)
      /*   console.log('Component did mount') */
    }

    reach50(){
        if(this.state.count === 600){
            this.setState({
                count:50,
            })
        }
    }

    /* componentDidUpdate(prevProps, prevState){
        if(this.props.style == prevProps.style){
            return true
        } 
         console.log('Component Counter Updated from:', prevState.count) 
    } */
    /* componentWillUnmount(){
      this.props.stateModifier('false')
    } */
   /*  stopGame =() =>{
        if(this.state.count === 50){
             clearInterval(this.timer)
             return this.props.history.push('/results')
            

    }
    } */
    render() {
        if(this.state.count === 600){
            this.props.stopGame()
        }
        return (
            <div className ={styles.bubble}>
                <img src ={virus1} className ='bubble' 
                style = {{width :`${this.state.count}px`, height:`${this.state.count}px`,top:`${this.props.style.top}px`, left: `${this.props.style.left}px` } }
                onClick = {()=>this.handleClick()}
                >

                </img>
            </div>
        )
    }
}

export default withRouter(Bubble5)
