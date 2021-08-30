import { Switch, Route } from 'react-router-dom';
import {lazy, Suspense} from 'react'
import Navigation from './Components/Navigation';
import Container from './Components/Container ';
// import Home from './Views/Home';
// import NotFound from './Views/NotFound'
// import MouviePage from './Components/MouviePage';
// import Mouvie from './Components/Mouvie';
const Home = lazy(() => import('./Views/Home'))
const NotFound = lazy(() => import('./Views/NotFound'))
const MouviePage = lazy(() => import('./Components/MouviePage'))
const Mouvie = lazy(() => import('./Views/Mouvie'))


function App() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path='/' exact>
            <Home/>
          </Route>
          <Route path='/mouvies/:movieId' >
            <MouviePage/>
          </Route>
          <Route path='/mouvies' >
            <Mouvie/>
          </Route>
          <Route>
            <NotFound/>
          </Route>
         </Switch>
        </Suspense>
    </Container>
  );
}

export default App;
