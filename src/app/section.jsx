// @flow
import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {doRedirectAction, emptyStoreAction, setDebugInfoAction, setUserInfoAction} from "./store/action/app";
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createGenerateClassName } from '@material-ui/core/styles';
import AppSection from './sections/app';
import './section.scss';
import { baseTheme, appTheme } from 'Utils/Themes';
import { ToastContainer }      from 'react-toastify';
import JssProvider             from 'react-jss/lib/JssProvider';


const generateClassName = createGenerateClassName({
    productionPrefix: 'c',
});


class Section extends React.Component {
    constructor(props) {
        super(props);

        this.props.history.listen((location, action) => {
            window.scrollTo(0, 0);
        });
    }

    componentDidMount() {
        // this.checkAuth();
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log('<Section /> saw update, checking for redirect');
        // console.log('prev redirect', prevProps.redirectUrl);
        // console.log('new redirect', this.props.redirectUrl);
        // throw Error;
        if (this.props.location.pathname !== this.props.redirectUrl && this.props.redirectUrl !== undefined && this.props.redirectUrl !== '') {
            console.info('########## Section: doing redirect', prevProps.redirectUrl, this.props.redirectUrl);
            this.props.RedirectToUrl( undefined );
            this.props.history.push( this.props.redirectUrl );
        }
    }


    clearStore() {
        this.props.emptyStore();
    }

    render() {
        // window.rerendered++;
        // console.log('REREN', window.rerendered);

        var debug;

        if (this.props.debug && false) {
            /*
            debug = (
                <div className="debug-container">
                    <pre>{JSON.stringify(this.props.userInfo, null, 2)}</pre>
                </div>
            );
            */
        }

        var content;

        content = (
            <Switch location={this.props.location}>
                <Route path="/" component={AppSection} />
            </Switch>
        )

        return (
            <div>
                <CssBaseline />
                <ToastContainer className='toast-container' />

                <JssProvider generateClassName={generateClassName}>
                    <MuiThemeProvider theme={baseTheme}>
                        <MuiThemeProvider theme={appTheme}>
                                { content }
                        </MuiThemeProvider>
                    </MuiThemeProvider>
                </JssProvider>

                {debug}
            </div>
        );
    }
}



const mapDispatchToProps = dispatch => ({
    emptyStore: placeholder => dispatch(emptyStoreAction(placeholder)),
    SetDebugInfo: debugInfo => dispatch(setDebugInfoAction(debugInfo)),
    SetUserInfo: UserInfo => dispatch(setUserInfoAction(UserInfo)),
    RedirectToUrl: redirectUrl => dispatch(doRedirectAction(redirectUrl))
});

const mapStateToProps = state => ({
    Theme: state.app.Theme,
//     debug: state.app.debug,
//     debugInfo: state.app.debugInfo,
//     userInfo: state.user.userInfo,
    redirectUrl: state.app.redirectUrl
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Section));
