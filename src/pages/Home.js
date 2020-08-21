import React, { Component } from 'react'
import Cards from '../components/Cards/Cards'
import Chart from '../components/Chart/Chart'
import Country from '../components/Country/Country'
import styles from '../App.module.css'
import { getData } from '../api/index'
import { withAuth } from "../lib/AuthProvider";	




class Home extends Component {

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
            <div className = {styles.container}>
                <h1>Welcome</h1>
               <Country handleCountryChange = {this.handleCountryChange}/>
               <Cards data={data} className={styles.container}/>
               <Chart/>
            </div>
        )}
}

export default withAuth(Home);
