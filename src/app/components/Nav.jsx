import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { connect } from 'react-redux';
import { doRedirectAction } from "App/store/action/app";


const styles = {
    root: {
        position: 'fixed',
        left: '0',
        right: '0',
        bottom: '0',
        boxShadow: '0px 6px 20px black'
    },
};

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.location.pathname,
        };
    }

    handleChange(event, value) {
        this.setState({ value });

        this.props.RedirectToUrl( value );
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.setState({value: this.props.location.pathname});
        }
    }

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <BottomNavigation
                value={value}
                onChange={this.handleChange.bind(this)}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction value={ '/why-recycle' } label="Why" icon={<HelpOutlineIcon />} />
                <BottomNavigationAction value={ '/my-council' } label="My Council" icon={<LocationOnIcon />} />
                <BottomNavigationAction value={ '/stats' } label="Stats" icon={<DashboardIcon />} />
                <BottomNavigationAction value={ '/what-can-i-recycle' } label="Can I?" icon={<AutorenewIcon />} />
            </BottomNavigation>
        );
    }
}

Nav.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
    RedirectToUrl: redirect => dispatch(doRedirectAction(redirect))
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(Nav));