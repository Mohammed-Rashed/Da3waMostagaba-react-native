import { createStackNavigator, createAppContainer } from 'react-navigation';

import Splash from './components/Splash';
import Timeline from './components/Timeline';
import Contact from './components/Contact';

const Routes = createStackNavigator({
   /*  Splash: {
        screen: Splash,
        navigationOptions: {
            header: null
        }
    }, */
  /*   Timeline: {
        screen: Timeline,
        navigationOptions: { 
            header: null
        }
    }, */
    Contact: {
        screen: Contact,
        navigationOptions: {
            header: null
        }
    }
});


export default createAppContainer(Routes);