import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PropTypes from 'prop-types';
import { Badge } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import { yellow, grey } from '@material-ui/core/colors';
import { styles } from '../appStyles-jss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { productSearch } from '../../actions/productActions';

class Header extends Component {
    search(value) {
        this.props.productSearch(value)
    }

    render() {
        const { classes, items } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <NavLink to="/">
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="open drawer"
                            >
                                <StarIcon style={{ color: yellow[500] }} />
                            </IconButton>
                        </NavLink>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Company Name
                        </Typography>

                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={(event) => this.search(event.target.value)}
                            />
                        </div>

                        <NavLink to="/cart">
                            <Badge badgeContent={items.length} color="error">
                                <ShoppingCartIcon style={{ color: grey[50] }} />
                            </Badge>
                        </NavLink>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        items: state.cartReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        productSearch: (value) => dispatch(productSearch(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));
