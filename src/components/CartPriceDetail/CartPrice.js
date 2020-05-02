import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Card, CardContent, Typography } from '@material-ui/core';
import { styles } from '../appStyles-jss';
import classnames from 'classnames';
class CartPrice extends Component {
    getTotalPrice = () => {
        let total = 0;
        this.props.products.map((prod) => {
            total = total + (prod.quantity * prod.price.display)
        })
        return total;
    }
    getTotalDiscount = () => {
        let discount = 0;
        this.props.products.map((prod) => {
            discount = discount + ((prod.quantity * prod.price.display) - ((prod.quantity * prod.price.actual)))
        })
        return discount;
    }
    getPayableAmount = () => {
        let total = 0;
        this.props.products.map((prod) => {
            total = total + (prod.quantity * prod.price.actual)
        })
        return total;
    }
    render() {
        const { classes, products } = this.props;
        return (
            <Card className={classes.cartPricing} variant="outlined">
                <CardContent>
                    <div className={classes.borderBottom}>
                        <Typography color="textSecondary" gutterBottom>
                            Price Details
                    </Typography>
                    </div>
                    <div className={classes.prices}>
                        <div className={classnames(classes.root, classes.priceBreakDown)}>
                            <div>
                                Price ({products.length} item) :
                            </div>
                            <div className={classes.price}>
                                ₹{this.getTotalPrice().toLocaleString()}
                            </div>
                        </div>
                        <div className={classnames(classes.root, classes.priceBreakDown)}>
                            <div>
                                Discount :
                            </div>
                            <div className={classes.price}>
                                ₹{this.getTotalDiscount().toLocaleString()}
                            </div>
                        </div>
                        <div className={classnames(classes.root, classes.priceBreakDown, classes.total)}>
                            <div>
                                Total Payable :
                            </div>
                            <div className={classes.price}>
                                ₹{this.getPayableAmount().toLocaleString()}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card >
        );
    }
}

CartPrice.propTypes = {
    classes: PropTypes.object.isRequired
}


export default withStyles(styles)(CartPrice);
