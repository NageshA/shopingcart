import React, { Component, Fragment } from 'react';
import { Drawer, withStyles, Toolbar, Typography, } from '@material-ui/core';
import PropTypes from 'prop-types';
import { styles } from '../appStyles-jss';
import RangeSlider from '../Slider/Slider';
import classnames from 'classnames';
class Filters extends Component {

    render() {

        const { classes } = this.props;
        return (
            <Fragment>
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

                        <RangeSlider className={classes.slider} />

                    </div>
                </Drawer>
                
            </Fragment>
        );
    }
}

Filters.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(Filters);
