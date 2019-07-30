import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

/* const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 100,
  },
}); */

export default function ItemCard(props) {
  //const classes = useStyles();

  return (
    <Card style={{display:"inline-block", margin:20, marginTop:50, marginLeft:45, width:345}} className={"classes.card"}>
      <CardActionArea>
        <CardMedia
          className={"classes.media"}
          image={props.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.tit}
          </Typography>
          <Typography variant="body2" color="TextPrimary" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque gravida in fermentum et sollicitudin ac orci phasellus. Pulvinar elementum integer enim neque volutpat. Turpis massa sed elementum tempus egestas sed sed. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae.
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            ${props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        Learn More
        </Button>
        <Button size="small" color="primary">
        Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}