import './App.css';
import { useState, useEffect } from 'react';
import UserDetail from './UserDetail';
import MainApp from './MainApp';
import SelectedUsers from './SelectedUsers';
import { BrowserRouter as Router, Switch,  Route } from 'react-router-dom';
function App() {
  const [selectedUsers, setSelectedUsers] = useState({shortlisted:[], rejected:[]})
  return (
    <Router>
    <Switch>
        <Route exact path='/' component={({history}) => <MainApp
          history={history}
        />} />
        <Route path='/user/:id' component={({history})=><UserDetail
          setSelectedUsers={setSelectedUsers}
          selectedUsers={selectedUsers}
          history={history}/>} />
        <Route path='/shortlisted' component={({history})=><SelectedUsers
          shortlisted
          selectedUsers={selectedUsers}
          history={history}/>} />
        <Route path='/rejected' component={({history})=><SelectedUsers
          shortlisted={false}
          selectedUsers={selectedUsers}
          history={history}/>} />
    </Switch>
    </Router>
  );
}

export default (App);
