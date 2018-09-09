import React                             from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {
    HOME,
    CHOOSE_COUNCIL,
    CAN_I,
    WHY_RECYCLE,
    MY_COUNCIL,
    STATS
}                                        from "App/routes";
import ChooseCouncil                     from '../components/ChooseCouncil';
import MyCouncil                         from '../components/MyCouncil';
import { MuiThemeProvider }    from '@material-ui/core/styles';
import { appTheme }            from 'Utils/Themes';
import BodyClassName           from 'react-body-classname';
import Card                    from '@material-ui/core/Card';
import PageTransitionContainer from 'Components/PageTransitionContainer';
import withPageTransition      from 'Utils/withPageTransition';
import Page                    from 'Utils/Page';
import Nav                     from 'Components/Nav';
import Stats                   from '../components/Stats';
import WhatCanIRecycle         from '../components/WhatCanIRecycle';
import WhyRecycle              from '../components/WhyRecycle';


class AppSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider theme={appTheme}>
                <BodyClassName className={"main"}>
                    <div className="content-wrapper">
                        <Card style={ { padding: '20px' } } style={ { background: 'transparent' }}>
                            <PageTransitionContainer location={this.props.location}>
                                <Switch location={this.props.location}>
                                    <Route exact path={ CHOOSE_COUNCIL } component={ withPageTransition(Page(ChooseCouncil, true)) } />
                                    <Route exact path={ MY_COUNCIL } component={ withPageTransition(Page(MyCouncil, true)) } />
                                    <Route exact path={ WHY_RECYCLE } component={ withPageTransition(Page(WhyRecycle, true)) } />
                                    <Route exact path={ STATS } component={ withPageTransition(Page(Stats, true)) } />
                                    <Route exact path={ CAN_I } component={ withPageTransition(Page(WhatCanIRecycle, true)) } />
                                    <Redirect to={ '/' } />
                                </Switch>
                            </PageTransitionContainer>
                        </Card>
                        <div className={"nav"}>
                            <Nav location={this.props.location} />
                        </div>
                    </div>
                </BodyClassName>
            </MuiThemeProvider>
        );
    }
}


export default AppSection;
