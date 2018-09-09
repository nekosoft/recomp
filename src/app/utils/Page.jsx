import React                                                          from 'react';
import {connect}                                                      from "react-redux";
import {doRedirectAction} from "App/store/action/app";

function Page(Component) {
    class PageHOC extends React.Component {
        constructor(props) {
            super(props);
        }

        shouldComponentUpdate(prevProps, prevState) {
            if (prevProps.match !== this.props.match && JSON.stringify(prevProps.match) === JSON.stringify(this.props.match)) {
                return false;
            }

            return true;
        }

        redirect( url ) {
            this.props.RedirectToUrl( url );
        }

        render() {

            return (
                <Component { ...this.props } redirect={ this.redirect.bind( this ) } />
            );
        }
    }

    const mapDispatchToProps = dispatch => ({
        RedirectToUrl: redirect => dispatch(doRedirectAction(redirect)),
    });


    return connect(null, mapDispatchToProps)(PageHOC);
}

export default Page;