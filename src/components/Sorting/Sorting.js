import React, { Component, Fragment } from 'react';
import { Paper, Tab, Tabs, Typography, withStyles, Toolbar } from '@material-ui/core';
import { styles } from '../appStyles-jss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sortProduct } from '../../actions/productActions';
class Sorting extends Component {
    state = {
        value: 0
    }
    
    handleChange = (event, newValue) => {
        this.setState({
            value: newValue
        })
        this.props.sortProduct(newValue)
    }

    render() {

        const { classes } = this.props;
        return (
            <Fragment>
                <Toolbar />

                <Paper className={classes.sorting}>
                    <div className={classes.root}>
                        <div className={classes.sort}>
                            <Typography>Sort by</Typography>
                        </div>

                        <Tabs
                            variant="fullWidth"
                            value={this.state.value}
                            indicatorColor="primary"
                            textColor="primary"
                            onChange={this.handleChange}
                        >
                            <Tab label="Price -- High Low" />
                            <Tab label="Price -- Low High" />
                            <Tab label="Discount" />
                        </Tabs>

                    </div>
                </Paper>
            </Fragment>
        );
    }
}

Sorting.propTypes = {
    classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return state;
}
const mapDispatchToProps = (dispatch) => {
    return {
        sortProduct: (sortValue) => dispatch(sortProduct(sortValue))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Sorting));
