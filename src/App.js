import react,{ Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {routes} from './Routes';


function App() {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Router basename={process.env.PUBLIC_URL}>

        <Switch>
          {routes.map((route,i)=>(
            <Route key={i} exact path={route.path} component={route.component}/>
          ))}
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
