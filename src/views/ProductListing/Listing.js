import React, { Component, Fragment } from 'react';
import Filters from '../../components/Filters/Filters';
import Sorting from '../../components/Sorting/Sorting';
import { withStyles, Toolbar, Paper } from '@material-ui/core';
import { styles } from '../../components/appStyles-jss';
import PropTypes from 'prop-types';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Products } from '../../api/Products';
import { connect } from 'react-redux';
import { addProducts } from '../../actions/productActions';
import classnames from 'classnames';
class Listing extends Component {

    componentDidMount() {
        this.props.addProducts(Products)
    }
    render() {
        console.log('render')
        const { classes, products } = this.props;
        return (
            <Fragment>
                <div className={classes.mobileSort}>
                    <Toolbar />
                    <div className={classes.sortOptions}>
                        <Paper className={classes.mobileSortOption} variant="outlined">
                            Sort
                    </Paper>
                        <Paper className={classes.mobileSortOption} variant="outlined">
                            Filter
                    </Paper></div>
                </div>
                <div className={classnames(classes.root)}>
                    <Filters className={classes.optionBar}></Filters>

                    <div className={classes.content}>
                        <Sorting className={classes.optionBar} />
                        {products.length > 0 ?
                            <div className={classes.cardLayout}>
                                {products.map((product, index) => {
                                    product['id'] = index;
                                    product['quantity'] = 0;
                                    return (<ProductCard productDetails={product} key={index} />)
                                })}
                            </div> :
                            <div style={{ textAlign: 'center' }}>
                                No Data
                        </div>
                        }
                    </div>

                </div>
            </Fragment>
        );
    }
}

Listing.propTypes = {
    classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    console.log('updated', state.productReducer.filtered_products)
    return {
        products: state.productReducer.filtered_products ? state.productReducer.filtered_products : []
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProducts: (Products) => dispatch(addProducts(Products))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Listing));
