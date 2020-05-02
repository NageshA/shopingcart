import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Paper, IconButton, TextField, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import { styles } from '../appStyles-jss';
import Price from '../Price/Price';
import IndeterminateCheckBoxOutlinedIcon from '@material-ui/icons/IndeterminateCheckBoxOutlined';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import { pushToCart, changeQuantityToCart, popFromCart, removeFromCart } from '../../actions/cartActions';
import { connect } from 'react-redux';
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    changeQuantity = (quantity) => {
        if (!(quantity > 0)) {
            quantity = 1
        }
        this.props.changeQuantityToCart(this.props.product, quantity);
    }

    addQuantity = () => {
        this.props.pushToCart(this.props.product);
    }

    removeQuantity = () => {
        this.props.popFromCart(this.props.product)
    }

    removeFromCart = () => {
        this.setState({
            open: true
        })
    }
    handleRemove = () => {
        this.props.removeFromCart(this.props.product)
    }
    cancel = () => {
        this.setState({
            open: false
        })
    }

    render() {
        const { classes, product } = this.props;
        return (
            <Paper elevation={3} className={classes.cart}>
                <div className={classes.root}>
                    <img src={product.image}
                        alt={product.name}
                        className={classes.cartImage} />
                    <div className={classes.cartDesc}>
                        <div>
                            {product.name}
                        </div>
                        <div>
                            <Price productDetails={product} />
                        </div>
                    </div>
                </div>
                <div className={classes.stepper}>
                    <IconButton onClick={() => this.removeQuantity()} disabled={product.quantity === 1}>
                        <IndeterminateCheckBoxOutlinedIcon />
                    </IconButton>
                    <TextField
                        label=""
                        id="outlined-size-small"
                        value={product.quantity}
                        variant="outlined"
                        size="small"
                        style={{ width: 50, justifyContent: 'center' }}
                        onChange={(event) => this.changeQuantity(event.target.value)}
                        disabled
                    />
                    <IconButton onClick={() => this.addQuantity()}>
                        <AddBoxOutlinedIcon />
                    </IconButton>
                </div>
                <div className={classes.removeButton}>
                    <Button size="small" color="default" onClick={() => this.removeFromCart()}>
                        Remove
                </Button>
                </div>
                <Dialog
                    open={this.state.open}
                    onClose={this.cancel}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Remove"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Are you sure you want to remove?
          </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.cancel} color="primary">
                            CANCEL
          </Button>
                        <Button onClick={this.handleRemove} color="primary" autoFocus>
                            REMOVE
          </Button>
                    </DialogActions>
                </Dialog>
            </Paper>
        );
    }
}

Cart.propTypes = {
    classes: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    ...state
})

const mapDispatchToProps = (dispatch) => {
    return {
        pushToCart: product => dispatch(pushToCart(product)),
        changeQuantityToCart: (product, quantity) => dispatch(changeQuantityToCart(product, quantity)),
        popFromCart: (product) => dispatch(popFromCart(product)),
        removeFromCart: (product) => dispatch(removeFromCart(product))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Cart));
