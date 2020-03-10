import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    width: 350,
    marginBottom: 10
  },
  media: {
    height: 400
  }
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        {props.change ? (
          <CardMedia
            className={classes.media}
            image={"https://i.ibb.co/H7ynHW2/trump.jpg"}
            title="Profile Card"
          />
        ) : (
          <CardMedia
            className={classes.media}
            image={props.uploadedFileUrl.uploadedFileURL}
            title="Profile Card"
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.change ? props.name : props.formData.name}
          </Typography>
          <Typography component="p">
            {props.change ? props.description : props.formData.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(MediaCard);
