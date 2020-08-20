import React from 'react'
import { Card, CardContent, Typography, Grid} from '@material-ui/core'
import CountUp from 'react-countup'
import styles from './Cards.module.css'



 function Cards( { data : {confirmed, recovered,deaths,lastUpdate } } ) {
     /* console.log(confirmed) */
     if(!confirmed){
         return 'Loading...'
     }
     /* console.log(props) */
    return (
        <div className = {styles.container}>
           <Grid container spacing={2} justify='center'>
                <Grid item component ={Card} xs ={12} md={3} className ={`${styles.infected} ${styles.card}`}>
                    <CardContent>
                        <Typography color = 'textSecondary' gutterBottom>Infected</Typography>
                        <Typography varaint ='h5'>
                            <CountUp 
                            start = {0}
                            end= {confirmed.value}
                            duration = {2.5}
                            separator = ','
                            />
                        </Typography>
                        <Typography color='textSecondary'>{new Date (lastUpdate).toDateString()}</Typography>
                        <Typography variant = 'body2'>Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
           

                <Grid item component ={Card} xs ={12} md={3} className ={`${styles.recovered} ${styles.card}`}>
                    <CardContent>
                        <Typography color = 'textSecondary' gutterBottom>Recovers</Typography>
                        <Typography varaint ='h5'>
                            <CountUp 
                            start = {0}
                            end= {recovered.value}
                            duration = {2.5}
                            separator = ','
                            />
                        </Typography>
                        <Typography color='textSecondary'>{new Date (lastUpdate).toDateString()}</Typography>
                        <Typography variant = 'body2'>Number of recover cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component ={Card} xs ={12} md={3} className ={`${styles.deaths} ${styles.card}`}>
                    <CardContent>
                        <Typography color = 'textSecondary' gutterBottom>Deaths</Typography>
                        <Typography varaint ='h5'>
                            <CountUp 
                            start = {0}
                            end= {deaths.value}
                            duration = {2.5}
                            separator = ','
                            />
                        </Typography>
                        <Typography color='textSecondary'>{new Date (lastUpdate).toDateString()}</Typography>
                        <Typography variant = 'body2'>Number of deaths from COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
export default Cards