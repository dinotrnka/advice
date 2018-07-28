import { StackNavigator } from 'react-navigation';

import Landing from '../views/Landing';

const Router = StackNavigator({
  Landing: { screen: Landing },
}, {
  headerMode: 'none',
  initialRouteName: 'Landing',
});

export default Router;
