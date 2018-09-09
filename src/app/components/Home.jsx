import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    Title: {
        textAlign: 'center',
    }
}

class Home extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <h2 className={ classes.Title }>Recycler</h2>
        );
    }
}


export default Home;