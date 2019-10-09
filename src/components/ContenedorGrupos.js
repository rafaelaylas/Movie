import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardGrupo from './CardGrupo';
//import imagen from '../header.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 25
  },
  paper: {
    height: 140,
    width: 100,
    textAlign: 'center',
    
  },
  control: {
    padding: theme.spacing(3),
    textAlign: 'center',
  },
}));

const SpacingGrid = function SpacingGrid(props) {
  //const [spacing] = React.useState(2);
  const classes = useStyles();  
  const equipos= props.peliculas;
  
  // console.log("equipos",equipos);
  return (
    <div>
      <Grid container className={classes.root} spacing={3} >
        <Grid item xs={12} >
          <Grid container justify="center" spacing={3}>
            {equipos.map(value => (
              <Grid key={value.title} item>

                <CardGrupo className={classes.paper} datos={value}/>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
      
  );
}
export default  (SpacingGrid);