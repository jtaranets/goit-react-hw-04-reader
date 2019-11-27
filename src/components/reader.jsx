import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import styles from './reader.module.css';
import HomePage from '../pages/HomePage';

const reader = () => (
  <div className={styles.reader}>
    <Switch>
      <Route exact path="/">
        <Redirect to="/reader" />
      </Route>
      <Route exact path="/reader/:someRoute">
        <Redirect to="/" />
      </Route>
      <Route path="/reader" component={HomePage} />
    </Switch>
  </div>
);

export default reader;

// export default class Reader extends Component {

//   render() {

//     return (
//       <div className={styles.reader}>
//         <Route exact path="/">
//           <Redirect to="/reader" />
//         </Route>
//         <Route path="/reader/:someRoute" component={HomePage} />
//         <Route path="/reader" component={HomePage} />
//       </div>
//     );
//   }
// }
