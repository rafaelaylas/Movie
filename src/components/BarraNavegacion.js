import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = 
{
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 10,
  },
  title: {
    //flexGrow: 5,
    display: 'center',
    
  },
  search: {
    position: 'relative',
    marginLeft: 'auto',
    width: '100%',
   
  },
  searchIcon: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    width: '100%',
    
  },
};

class MyAppBar extends React.Component
{
  constructor(props){
    super(props);
    this.state= {
      titulo:''
    }
  }
  actualizarTitulo(nuevoTitulo)
	{
		this.setState({titulo : nuevoTitulo.target.value});
		if (nuevoTitulo.key === "Enter") {
      nuevoTitulo.preventDefault();
      console.log("titulo",this.state.titulo);
      console.log("props",this.props)
			this.props.actualizarGrilla(this.state.titulo);
		}
	}

  
  render()
  {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              Movies Review
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                value = {this.state.titulo}
                onChange = {this.actualizarTitulo.bind(this)}
                onKeyPress={this.actualizarTitulo.bind(this)}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(useStyles)(MyAppBar);