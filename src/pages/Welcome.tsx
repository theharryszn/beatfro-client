import * as React from 'react';
import { SyncLoader } from 'react-spinners'


export interface WelcomeProps {
    
}
 
const Welcome: React.FC<WelcomeProps> = () => {
    return ( 
        <div className="w-screen h-screen flex items-center justify-center">
            <SyncLoader color="#333" size="5"/>
        </div>
     );
}
 
export default Welcome;