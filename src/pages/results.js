import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import gameService from "../lib/gameService";
import hands from "../images/hands.jpg";
import alcohol from "../images/alcohol.jpg";
import cough from "../images/cough.png";
import coveryourcough from "../images/coveryourcough-1024x519.png";
import distance from "../images/distance.jpg";
import distance2 from "../images/distance2.jpg";
import face from "../images/face-nose-eyes2.jpg";
import fever from "../images/fever.png";
import mask from "../images/mask.jpg";
import home from "../images/home.jpg";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardActions,
  CardMedia,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./results.css";
import ReplayIcon from "@material-ui/icons/Replay";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PublicIcon from "@material-ui/icons/Public";
import { Link } from "react-router-dom";

const Results = (props) => {
  var url_stirng = window.location.href.toLocaleLowerCase();
  var url = new URL(url_stirng);
  var count = url.searchParams.get("count");
  const arrayPrevent = [
    "Wash your hands frequently",
    "Use soap and water or an alcohol-based hand sanitizer",
    "Keep security distance with persons who cough or sneeze",
    "Use a mask when it is not possible to maintain physical distance",
    "Don't touch your eyes, nose, or mouth",
    "When you cough or sneeze, cover your nose and mouth with a flexed elbow or a tissue",
    "If you are not feeling well, stay home",
    "In case you have a fever, cough, or dificculties for breathing, seek medical attention",
  ];

  const random = Math.floor(Math.random() * arrayPrevent.length + 1);
  const randomSentence = arrayPrevent[random];

  var text;
  if (randomSentence) {
    switch (random) {
      case 1:
        text = alcohol;
        break;
      case 2:
        text = distance2;
        break;
      case 3:
        text = mask;
        break;
      case 4:
        text = face;
        break;
      case 5:
        text = cough;
        break;
      case 6:
        text = home;
        break;
      case 7:
        text = fever;
        break;
      default:
        text = hands;
        break;
    }
  }

  let finalCount = function convertToTime(count) {
    let minutes = Math.floor(count / 60);
    let seconds = count % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return `${minutes}:${seconds}`;
  };
  useEffect(() => {
    gameService(count);
  }, []);

  const useStyles = makeStyles({
    root: {
      maxWidth: 500,
      maxHeight: 1000,
    },
  });
  const classes = useStyles();
  return (
    <div className="results">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Recomendation"
            height="140"
            image={text}
            title="Recomendation"
            className="image"
          />
          {console.log(text)}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              New Score! {finalCount(count)}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {console.log(randomSentence)}
              {randomSentence}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="icons">
          <Link to="/game">
            <BottomNavigationAction label="Game" icon={<ReplayIcon />} />
          </Link>
          <Link to="/home">
            <BottomNavigationAction label="Home" icon={<PublicIcon />} />
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default withRouter(Results);
