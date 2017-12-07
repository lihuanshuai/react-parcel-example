import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.scss';

const App = () => <div className={styles.app}>Hello Parcel x React</div>;

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
