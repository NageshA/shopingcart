import React, { Component } from 'react';
import { Toolbar, Box, withStyles, Button } from '@material-ui/core';
import { styles } from '../../components/appStyles-jss';
import PropTypes from 'prop-types';
import Cart from '../../components/Cart/Cart';
import CartPrice from '../../components/CartPriceDetail/CartPrice';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class UserCart extends Component {
    render() {
        const { classes, products } = this.props;
        return (
            <div>
                <Toolbar />
                {
                    products.length > 0 ?
                        <div className={classes.cartroot}>
                            <Box className={classes.cartProd}>
                                {
                                    products.map((prod) => {
                                        return (<Cart product={prod} key={prod.id} />)
                                    })
                                }
                            </Box>
                            <Box className={classes.cartPrice}>
                                <CartPrice products={products} />
                            </Box>
                        </div>
                        :
                        <div className={classes.emptyScreen}>
                            <div> No item in cart </div>
                            <NavLink to="/">
                                <Button size="medium" color="primary">
                                    Home
                            </Button>
                            </NavLink>
                        </div>
                }

            </div>
        );
    }
}

UserCart.propTypes = {
    classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        products: state.cartReducer
    }
}
export default connect(mapStateToProps)(withStyles(styles)(UserCart));
