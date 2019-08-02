import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link, Router } from '@reach/router'
import { connect } from 'react-redux'
import { addItem } from '../actions/index'
import '../App/App.css'




class  ItemCard extends React.Component {
  state = {
		quantity: 1 
	} 
render(){ 
  const {el, addItem, article} = this.props;
  return  <Card style={{ display: "inline-block", margin: 20, marginTop: 50, marginLeft: 45, width: 345 }} className={"classes.card"}>
      <CardActionArea>
        <Link to={this.props.el.link}><CardMedia
          style={{ height: 300 }}
          className={"classes.media"}
          image={this.props.el.imgUrl}
          title="Contemplative Reptile"
        /></Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {this.props.el.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {this.props.el.price} Dt
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={this.props.el.link}><Button size="small" color="primary">
          Détails
        </Button></Link>
        <Button size="small" color="primary" onClick={()=>addItem({article, quantity:this.state.quantity})}>
          Acheter
        </Button>
        <p>Qté</p>
        <input className="qty" onChange={(event) => this.setState({ quantity: event.target.value})} type="text"></input>
      </CardActions>
    </Card>
  
}}
const mapDispatchToProps = dispatch => ({
	addItem: (payload) => dispatch(addItem(payload))
})
export default connect(null, mapDispatchToProps)(ItemCard)