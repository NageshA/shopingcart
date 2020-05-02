import React, { Fragment, Component } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { styles } from '../appStyles-jss';
import { connect } from 'react-redux';
import { productFilter } from '../../actions/productActions';

const useStyles = makeStyles({


});

function valuetext(value) {
    return `₹{value}`;
}

class RangeSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: [500, 100000]
        }
    }
    handleChange = (event, newValue) => {
        console.log(newValue)
        this.props.productFilter(newValue)
        this.setState({
            value: newValue
        })
    };
    render() {
        const { classes } = this.props;
        console.log(this.state.value)
        return (
            <Fragment>
                <Slider
                    value={this.state.value}
                    onChange={this.handleChange}
                    className={classes.sliderComp}
                    valueLabelDisplay="off"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                    min={500}
                    max={100000}
                />
                <div className={classes.inputField}>
                    <div>
                        ₹{this.state.value[0].toLocaleString()}
                    </div>

                    <div>
                        To
               </div>
                    <div>
                        ₹{this.state.value[1].toLocaleString()}
                    </div>
                </div>
            </Fragment >
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        productFilter: value => dispatch(productFilter(value))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RangeSlider));
