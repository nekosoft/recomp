import React from 'react';
import Card from '@material-ui/core/Card';

import ImageGlassBottle from 'Assets/images/glass-bottles.jpg';
import ImagePlasticBottle from 'Assets/images/plastic-bottles2.jpg';
import ImageCardboardRecycling from 'Assets/images/cardboard-recycling.jpg';
import ImageAluminiumRecycling from 'Assets/images/aluminium-recycling.jpg';
import ImageBatteryRecycling from 'Assets/images/battery-recycling.jpg';

import ImageTick from 'Assets/images/tick.png';
import ImageCross from 'Assets/images/cross.png';

const Info = (props) => {
    return (
        <div style={ { borderRadius: '8px', background: 'yellowgreen', padding: '8px 16px', margin: '16px 0' } }>
            {props.children}
        </div>
    );
};

const Item = (props) => {
    const yesno = (props.yes) ? <img src={ ImageTick } style={ { width: '24px' } } /> : <img src={ ImageCross } style={ { width: '24px' } } />;

    return (
        <div style={ { width: (props.wide ? '50%' : '33.33%'), textAlign: 'center', display: 'flex-item', marginBottom: '16px' } }>
            <span style={{ fontSize: '18px', display: 'inline-block', marginBottom: '8px' } }>{props.label}</span> <br /> { yesno }
        </div>
    )
}


class WhatCanIRecycle extends React.Component {
    render() {
        return (
            <div style={{ padding: '24px' }}>
                <h1>What can I recycle?</h1>

                <h4><strong>Your council: </strong> City of Kingston</h4>

                <Card style={ { boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.2)', padding: '8px 16px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
                    <img src={ ImageGlassBottle} style={ { position: 'absolute', top: '0', left: '0', width: '150%', height: 'auto', zIndex: '0', opacity: '0.1' }} />
                    <h2>Glass</h2>

                    <div style={ { display: 'flex' } }>
                        <Item label="All" yes={"yes"} />
                    </div>
                </Card>

                <br/><br/>

                <Card style={ { boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.2)', padding: '8px 16px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
                    <img src={ ImagePlasticBottle} style={ { position: 'absolute', top: '0', left: '0', width: '150%', height: 'auto', zIndex: '0', opacity: '0.1' }} />
                    <h3>Plastic</h3>

                    <Info>Only some plastics can be recycled. Please look for the recycling symbol with the number inside.</Info>

                    <div style={ { display: 'flex', flexDirection: 'row', flexWrap: 'wrap' } }>
                        <Item label={"1"} yes />
                        <Item label={"2"} yes />
                        <Item label={"3"} yes />
                        <Item label={"4"} yes />
                        <Item label={"5"} yes />
                        <Item label={"6"} no />
                        <Item label={"7"} no />
                        <Item label={"Other"} no />
                        <Item label={"Bags"} no />
                    </div>
                </Card>

                <br/><br/>

                <Card style={ { boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.2)', padding: '8px 16px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
                    <img src={ ImageCardboardRecycling} style={ { position: 'absolute', top: '0', left: '0', width: '150%', height: 'auto', zIndex: '0', opacity: '0.1' }} />
                    <h3>Cardboard</h3>

                    <div style={ { display: 'flex', flexDirection: 'row', flexWrap: 'wrap' } }>
                        <Item label={"All"} yes />
                    </div>
                </Card>

                <br/><br/>

                <Card style={ { boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.2)', padding: '8px 16px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
                    <img src={ ImageAluminiumRecycling } style={ { position: 'absolute', top: '0', left: '0', width: '150%', height: 'auto', zIndex: '0', opacity: '0.1' }} />
                    <h3>Metal</h3>

                    <div style={ { display: 'flex', flexDirection: 'row', flexWrap: 'wrap' } }>
                        <Item wide label={"Steel cans"} yes />
                        <Item wide label={"Aluminium cans"} yes />
                        <Item wide label={"Aluminium foil"} yes />
                    </div>
                </Card>

                <br/><br/>

                <Card style={ { boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.2)', padding: '8px 16px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
                    <img src={ ImageBatteryRecycling } style={ { position: 'absolute', top: '0', left: '0', width: '150%', height: 'auto', zIndex: '0', opacity: '0.1' }} />
                    <h3>Other</h3>

                    <div style={ { display: 'flex', flexDirection: 'row', flexWrap: 'wrap' } }>
                        <Item wide label={"Polystyrene"} no />
                        <Item wide label={"Phone books"} yes />
                        <Item wide label={"Garden waste"} no />
                        <Item wide label={"Linen"} no />
                    </div>
                </Card>
            </div>
        );
    }
}


export default WhatCanIRecycle;