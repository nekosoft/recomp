import React from 'react';

import NewspaperIcon from 'Assets/images/newspaper-icon.png';
import SoftDrinkCanIcon from 'Assets/images/soft-drink-can-icon.png';
import MilkIcon from 'Assets/images/milk-icon.png';

class WhyRecycle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const pieOptions = {
            title: "",
            pieHole: 0.5,
            slices: [
                {
                    color: "#2BB673"
                },
                {
                    color: "#d91e48"
                },
                {
                    color: "#007fad"
                },
                {
                    color: "#e9a227"
                }
            ],
            legend: {
                position: "bottom",
                alignment: "center",
                textStyle: {
                    color: "233238",
                    fontSize: 14
                }
            },
            tooltip: {
                showColorCode: true
            },
            chartArea: {
                left: 0,
                top: 0,
                width: "100%",
                height: "80%"
            },
            animation: {
                startup: true,
                duration: 3000,
                easing: 'out',
            }
        };


        return (
            <div style={ { marginTop: '30px', padding: '16px', textAlign: 'center' }}>

                <img src={ NewspaperIcon } style={ { width: '128px' }}/>
                <p style={ { marginBottom: '60px' }}>Still get the newspaper delivered? Every newspaper you recycle saves <strong>13kg of CO2 emissions</strong>, or a 45km trip in a family car.</p>

                <img src={ SoftDrinkCanIcon } style={ { width: '128px' }} />
                <p style={ { marginBottom: '60px' }}>Recycle those soft drink cans (or cut down on your TV usage) - one recycled can saves the equivalent energy usage of <strong>45 days</strong> of TV on a large screen.</p>

                <img src={ MilkIcon } style={ { width: '128px' }} />
                <p style={ { marginBottom: '60px' }}>Recycling <strong>just two milk bottles</strong> saves enough water for you to enjoy a shower.</p>

            </div>
        );
    }
}


export default WhyRecycle;