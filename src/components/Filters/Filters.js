import React, { Component } from 'react';
import { Drawer, withStyles, Toolbar, Typography, } from '@material-ui/core';
import PropTypes from 'prop-types';
import { styles } from '../appStyles-jss';
import RangeSlider from '../Slider/Slider';

class Filters extends Component {

    render() {
        const { classes } = this.props;
        return (
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <Typography gutterBottom>Filters</Typography>

                    <RangeSlider />

                </div>
            </Drawer>
        );
    }
}

Filters.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(Filters);
