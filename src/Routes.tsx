import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Welcome from './pages/Welcome';


export interface RoutesProps {
    
}
 
const Routes: React.FC<RoutesProps> = ({ children }) => {
    return ( 
        <Router>
            <Switch>
                <Route path="/" component={Welcome}/>
            </Switch>
        </Router>
     );
}
 
export default Routes;