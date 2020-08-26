import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import gameService from '../lib/gameService'
import hands from '../images/hands.jpg'
import alcohol from '../images/alcohol.jpg'
import cough from '../images/cough.png'
import coveryourcough from '../images/coveryourcough-1024x519.png'
import distance from '../images/distance.jpg'
import distance2 from '../images/distance2.jpg'
import face from '../images/face.jpg'
import fever from '../images/fever.png'
import mask from '../images/mask.jpg'
import home from '../images/home.jpg'


const Results = (props) => {
    console.log(props)
    var url_stirng = (window.location.href).toLocaleLowerCase();
    var url = new URL(url_stirng)
    var count = url.searchParams.get('count')
    const arrayPrevent =['Lávate las manos con frecuencia', 'Usa agua y jabón o un desinfectante de manos a base de alcohol',
    'Mantén una distancia de seguridad con personas que tosan o estornuden',
    'Utiliza mascarilla cuando no sea posible mantener el distanciamiento físico',
    'No te toques los ojos, la nariz ni la boca',
    'Cuando tosas o estornudes, cúbrete la nariz y la boca con el codo flexionado o con un pañuelo',
    'Si no te encuentras bien, quédate en casa',
    'En caso de que tengas fiebre, tos o dificultad para respirar, busca atención médica'];

    const random = Math.floor(Math.random() * arrayPrevent.length + 1)
    const randomSentence = arrayPrevent[random]

        var text;
       if(randomSentence){
           switch(random){
           case 1 :
            text=alcohol;
               break;
           case 2:
            text=distance2;
               break;
           case 3 :
            text=mask;
               break;
           case 4 :
            text=face;
               break;
           case 5:
            text=cough;
               break;
            case 6 :
                text=home;
               break;
           case 7 :
            text=fever;
               break;
            default:
                text=hands;
                break;
               
       }
   }
    
   let finalCount = function convertToTime(count){
    let  minutes = Math.floor(count / 60);
    let seconds = count % 60;
    seconds = seconds < 10 ? ('0'+seconds) : seconds;
    minutes = minutes < 10 ? ('0'+ minutes) : minutes
    return `${minutes}:${seconds}`;
  }
   useEffect(()=>{
       gameService(count)
       
    },[])
    return (
        <div>
             <h1>New Score!</h1>
                <div>{finalCount(count)}</div>
                <p>{randomSentence}</p>
                <img src={text}></img>
        {console.log(text)}
        </div>
    )
}

export default withRouter(Results)
