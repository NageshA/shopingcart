import React, { Component } from 'react';
import { Card, withStyles, CardActionArea, CardContent, Typography, CardActions, Button, CardMedia } from '@material-ui/core';
import { styles } from '../appStyles-jss';
import PropTypes from 'prop-types';
import { yellow } from '@material-ui/core/colors';
import { pushToCart } from '../../actions/cartActions';
import { connect } from 'react-redux';
import Price from '../Price/Price';
class ProductCard extends Component {

    addToCart = (product) => {
        this.props.pushToCart(product)
    }
    render() {
        const ColorButton = withStyles((theme) => ({
            root: {
                color: theme.palette.getContrastText(yellow[500]),
                backgroundColor: yellow[500],
                '&:hover': {
                    backgroundColor: yellow[700],
                },
            },
        }))(Button);

        const { classes, productDetails } = this.props;
        return (
            <div className={classes.cardRoot}>
                <Card elevation={3} >
                    <CardActionArea>
                        <CardMedia
                            className={classes.cardMedia}
                            image={productDetails.image}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom >
                                {productDetails.name}
                            </Typography>
                            <Price productDetails={productDetails} />
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.cardAction}>
                        <ColorButton size="small" variant="contained" onClick={() => this.addToCart(productDetails)}>
                            Add to Cart
                    </ColorButton>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

ProductCard.propType = {
    classes: PropTypes.object.isRequired,
    // productDetails: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        cart: state.product
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        pushToCart: product => dispatch(pushToCart(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ProductCard));
