import React, { Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AgroRegister from './AgroRegister1/AgroRegister';
import Register1 from './AgroRegister2/Register1';
import Loader from './Loader/Loader';
import Menu from './Menu/Menu';
import Navbar from './Navbar/Navbar';
import SearchCards from './SearchCards/SearchCards';
import AddProduct from './AgroProduct/AddProduct'
import Add from './AddingProducts/Add';
import Wheat from './Wheat/Wheat';
import Home from './Information/Home';
import Home2 from './Registration/Home2';


function App() {
    return (
        <Fragment>
            <Router>
                <Navbar /> 
                <Switch>
                    <Route exact path='/'>
                        <Loader />
                    </Route>
                    <Route exact path='/register1'>
                        <Register1 />
                    </Route>
                    <Route exact path='/register'>
                        <AgroRegister />
                    </Route>
                    <Route exact path='/menu'>
                        <Menu />
                    </Route>
                    <Route exact path='/search'>
                        <SearchCards />
                    </Route>
                    <Route exact path='/add'>
                        <AddProduct />
                    </Route>
                    <Route exact path='/addProduct'>
                        <Add />
                    </Route>
                    <Route exact path='/wheat'>
                        <Wheat />
                    </Route>
                    <Route exact path='/inform'>
                        <Home />
                    </Route>
                    <Route exact path='/register3'>
                        <Home2 />
                    </Route>
                </Switch>
            </Router>
        </Fragment>
    )
}


export default App