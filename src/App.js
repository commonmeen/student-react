import React from 'react';
import './App.css';
import StudentForm from './containers/StudentContainer';
import rootReducer from './reducers'
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentList from './containers/index';

const store = createStore(
  rootReducer
)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <StudentForm></StudentForm> */}
        <StudentList></StudentList>
      </div>
    </Provider>

  );
}

export default App;
