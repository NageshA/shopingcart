import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Listing from '../../views/ProductListing/Listing';
import Header from '../../components/Header/Header';
import UserCart from '../../views/Cart/UserCart';
import NotFound from '../../views/NotFound/NotFound';
import Footer from '../../components/Footer/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={Listing} />
                    <Route path="/cart" component={UserCart} />
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;
