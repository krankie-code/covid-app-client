import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
/* import { Cards , Country , Chart } from './components' */
import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import Country from './components/Country/Country'
import { getData } from './api'
import styles from './App.module.css'
import Login from './pages/Login'
import Signin from './pages/Signin'
import Home from './pages/Home'

/* import AuthProvider from './lib/AuthProvider' */
import Navbar from './components/Navbar/Navbar'



class App extends Component {

    state = {
        data:{},
        country:'',
    }
    
    async componentDidMount(){
        const data = await getData();
        const finalData = data.data
       /*  console.log(data.data) */
        
        this.setState({data:finalData})
    }

    handleCountryChange = async (country) =>{
        const getCountryData = await getData(country);
        const finalData = getCountryData.data
       /*  console.log(await getData) */
        console.log(getCountryData.data)

        this.setState({data:finalData})
    }
     render() {
         const { data } = this.state
         return (
            /*  <div className = {styles.container}>
                <Country handleCountryChange = {this.handleCountryChange}/>
                <Cards data={data} className={styles.container}/>
                <Chart/>
             </div> */
             <div>
                 {/* <AuthProvider> */}
        <Navbar />

        <Switch>
         <Route exact path='/signup' component={Home} />
         <Route exact path='/signup' component={Signin} />
         <Route exact path='/login' component={Login} />
        </Switch>
       {/*  </AuthProvider> */}
             </div>
         )
     }
 }
 
 export default App