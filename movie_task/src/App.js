import './App.css';
import { Switch,Redirect} from "react-router-dom";
import {Route, useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';
import { MovieList } from './MovieList';
import { EditMovie } from './EditMovie';
import { AddColor } from './AddColor';
import { AddMovie } from './AddMovie';
import { NotFound } from './NotFound';
import { MovieDetails } from './MovieDetails';
import { Welcome } from './Welcome';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Button from '@mui/material/Button';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { TicTacToe } from './TicTacToe';



 function App() {
  const history = useHistory();
  const [mode,setMode] = useState("dark");
  const theme=createTheme({
  palette:{
    mode:mode,
  },
});//create context

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={6} style={{borderRadius:"0px",minHeight:"100vh"}}>
<div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Button variant="Text" color="inherit" onClick={()=> history.push("/")}>
            Home
          </Button>
          <Button onClick={()=>history.push("/movies")} variant="Text" color="inherit">
            Movies
          </Button>
          <Button onClick={()=>history.push("/addMovie")} variant="Text" color="inherit">
          Add Movie
          </Button>
          <Button onClick={()=>history.push("/ColorGame")} variant="Text" color="inherit">
          Color Game
          </Button>
          <Button  onClick={()=>history.push("/tiktactoe")} variant="Text" color="inherit">
          Tik Tac Toe
          </Button>
          <Button  
          style={{marginLeft:"auto"}}
          startIcon = {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          onClick={()=>setMode(mode==="dark"?"light":"dark")}
          variant="Text"
           color="inherit"
           >
         {mode==="light"? "dark":"light"} mode
          </Button>
        </Toolbar>
      </AppBar>
<Switch>
<Route exact path="/">
   <Welcome/>
   </Route>
   <Route path="/films">
   <Redirect to="/movies"/>
   </Route>
   <Route path="/movies/edit/:id">
   <EditMovie />
   </Route>
   <Route path="/movies/:id">
   <MovieDetails/>
   </Route>
   <Route path="/movies">
   <MovieList />
   </Route>
   <Route path="/addMovie">
   <AddMovie/>
   </Route>
   <Route path="/ColorGame">
   <AddColor/>
   </Route>
   <Route path="/tiktactoe">
   <TicTacToe/>
   </Route>
   <Route path="**">
   <NotFound/>
   </Route>
   </Switch>
</div>
</Paper>
</ThemeProvider>
);
}






export default App;


