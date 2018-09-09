import Button               from '@material-ui/core/es/Button/Button';
import MenuItem             from '@material-ui/core/es/MenuItem/MenuItem';
import Select               from '@material-ui/core/Select';
import React                from 'react';
import ImagePlasticBottles  from 'Assets/images/plastic-bottles.jpg';
import { withStyles }       from '@material-ui/core/styles';
import BodyClassName        from 'react-body-classname';
import { connect }          from 'react-redux';
import { setCouncilAction } from '../store/action/app';
import { CAN_I } from 'App/routes';

const styles = {
    Container: {
        position: 'relative',
        minHeight: '100vh',
        '& img': {
            width: 'auto',
            height: '100%',
            filter: 'blur(5px)'
        }
    },
    InnerContainer: {
        background: 'rgba(255, 255, 255, 0.8)',
        padding: '40px 0',
        position: 'absolute',
        top: '50%',
        left: '0',
        right: '0',
        transform: 'translateY(-50%)',
        textAlign: 'center',
        color: 'crimson',

        '& h1': {
            margin: '0',
        }
    }
};

class ChooseCouncil extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            councils: []
        }

        fetch('https://myvic-app-dev-gis.beta.vic.gov.au/geoserver/myvic/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=application%2Fjson&typeName=myvic%3Alabel_lga')
            .then( response => {
                return response.json();
            })
            .then( response => {
                var councils = response.features.map( feature => { return { name: feature.properties['full_name'], id: feature.properties.lga_code } } );

                this.setState( { councils: councils.sort( (a, b) => {
                    if (a.name && b.name) {
                        return a.name.toUpperCase().localeCompare(b.name.toUpperCase());
                    }
                    else {
                        return 1;
                    }
                } ) } );
        });
    }

    handleChange(event) {
        this.props.setCouncil( this.state.councils.find( council => council.id === event.target.value) );
    }

    onClickGo() {
        this.props.redirect( CAN_I )
    }

    render() {
        const { classes } = this.props;

        return (
            <BodyClassName className={ "hide-nav" }>
                <div className={ classes.Container }>
                    <img src={ ImagePlasticBottles } className={"bg-image"} />

                    <div className={ classes.InnerContainer }>
                        <h1>Recycler</h1>

                        <h3>Your weird inanimate recycling buddy</h3>

                        <br /> <br />

                        <label>What council do you live in?</label> <br /> <br />

                        <Select
                            value={this.props.council.name}
                            renderValue={ (value) => value }
                            onChange={this.handleChange.bind(this)}
                            disableUnderline={true}
                            inputProps={{
                                name: 'councils',
                            }}
                            style={ { width: '80%' }}
                        >
                            { this.state.councils.slice(2).map( council => <MenuItem key={council.id} value={council.id}>{council.name}</MenuItem> ) }
                        </Select>

                        <br/><br/>

                        <Button variant="contained" color="primary" disabled={this.state.council} onClick={this.onClickGo.bind(this)}>Start recycling</Button>
                    </div>
                </div>
            </BodyClassName>
        );
    }
}

const mapDispatchToProps = dispatch => ( {
    setCouncil: council => dispatch( setCouncilAction( council ) ),
} );

const mapStateToProps = ( state, ownProps ) => ({
    council: state.app.council,
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ChooseCouncil));