import * as React from 'react';


export interface WelcomeProps {
    
}
 
const Welcome: React.FC<WelcomeProps> = () => {
    return ( 
        <div>
            <h1>Hello World</h1>
        </div>
     );
}
 
export default Welcome;