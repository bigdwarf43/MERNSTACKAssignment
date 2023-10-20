
import './App.css';

import { useDispatch } from 'react-redux';
import { useEffect , useState} from 'react';

import {Container, AppBar, Typography, Grow , Grid} from '@material-ui/core';
import memories from './images/memories.jpg';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import {getPosts} from './actions/posts';

import useStyles from './styles';


function App() {

  const classes = useStyles();
  const dispatch = useDispatch();

  const [currentid, setcurrentid] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentid, dispatch]);

  
  return (
    <Container maxWidth="lg">
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Typography className={classes.heading} variant="h2" align="center">Instagram</Typography>
      <img className={classes.image} src={memories} alt="icon" height="60" />
    </AppBar>
    <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            <Posts  setcurrentid = {setcurrentid}/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentid={currentid} setcurrentid = {setcurrentid}/>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  </Container>
  );
}

export default App;
