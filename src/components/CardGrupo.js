
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
    card: {
      maxWidth: 380,
      heigth: 300,
      textAlign:'center',
      display: 'flex',
      flexDirection: 'column',
      
    },
    media: {
      height: 280,
      backgroundsize: 'contain'
      
    },
    
  });
  
export default function CardGrupo (props) {
    const classes = useStyles();
    const datos = props.datos;
    //console.log("grupo",datos)
          return (
          <Card className={classes.card}>
              <CardActionArea>
              <CardMedia
                  className={classes.media}
                  image= {datos.imagen}
                  title={datos.title}
              />
              <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  {datos.title}
                  </Typography>
                  <Typography variant="p" color="textSecondary" component="p">
                  {datos.integrantes}
                  </Typography>
                  
              </CardContent>
              </CardActionArea>
              <CardActions>
               
              </CardActions>
          </Card>
          );
    
    }
    
  