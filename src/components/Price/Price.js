import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { styles } from '../appStyles-jss';

class Price extends Component {
    render() {
        const { classes, productDetails } = this.props;
        return (
            <Fragment>
                <div className={classes.productRates}>
                    <div className={classes.displayPrice}> ₹{(productDetails.price.actual * (productDetails.quantity === 0 ? 1 : productDetails.quantity)).toLocaleString()}</div>
                    <div className={classes.actualPrice}> ₹{(productDetails.price.display * (productDetails.quantity === 0 ? 1 : productDetails.quantity)).toLocaleString()}</div>
                    <div className={classes.discount}> {productDetails.discount}% off</div>
                </div>
            </Fragment>
        );
    }
}

Price.propTypes = {
    classes: PropTypes.object.isRequired,
    productDetails: PropTypes.object
}
export default withStyles(styles)(Price);
