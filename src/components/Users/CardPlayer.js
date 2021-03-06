import React from "react";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    backgroundImage:
      "linear-gradient(to right, rgba(26, 32, 64,.7), rgba(54, 84, 157,.2))",
    borderRadius: 15,
    border: 0,
    color: "white",
    height: 48,
    padding: "5px 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    marginTop: "20px",
  },
};

const useStyles = makeStyles(styles);

function CardPlayer(props) {
  const { img, username, arrayScore, index } = props;
  const classes = useStyles();
  console.log(props);
  return (
    <div style={{ width: "100%" }}>
      <Box
        className={classes.root}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        m={1}
        p={1}
      >
        <Box p={1}>{index + 1}</Box>
        <Box p={1}>
          <Avatar alt="Remy Sharp" src={img} />
        </Box>
        <Box p={1}>@{username}</Box>
        <Box p={1}>
          {Math.max.apply(
            Math,
            arrayScore.map(function (o) {
              return o.score;
            })
          )}
        </Box>
      </Box>
    </div>
  );
}
export default CardPlayer;
