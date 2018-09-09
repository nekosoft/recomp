import LinearProgress from '@material-ui/core/es/LinearProgress/LinearProgress';
import React          from 'react';
import { Chart }      from "react-google-charts";
import Card           from '@material-ui/core/Card';

import MoodIcon from '@material-ui/icons/Mood';

class Stats extends React.Component {
    constructor(props) {
        super(props);

        this.state = { data: [
                ['Council', '', { role: 'style' }],
                ['Kingston', 50.1, '#26A4A2'],            // RGB value
                ['All councils', 44.52, 'silver'],            // English color name
                ['Similar councils', 45.87, 'gold'],
            ],
        completed: 75 };
    }
    render() {
        var options = {
            animation: {
                duration: 1000,
                easing: 'out',
                startup: true,
            },
            isStacked: true,
            legend: { position: 'none' },
            vAxis: {
                ticks: [10, 20, 30, 40, 50, 60],
                gridlines: {color: '#ccc'}
            },
        };

        return (
            <div>
                <Card style={ { padding: '8px 16px', margin: '16px 16px 40px'}}>
                    <h1>Well done!</h1>

                    <p>#teamkingston is leading the pack this month with over <strong>24 tons of recyclables</strong> collected. </p>

                    <h4 style={ { marginBottom: '4px' }}>Great work - 84% towards this month's goal</h4>
                    <LinearProgress variant="determinate" color="primary" value={this.state.completed} /> <span style={ { float: 'left' } }>0%</span> <span style={ { float: 'right' } }>100%</span>

                </Card>


                <Card style={ { margin: '16px', boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.2)', padding: '8px 16px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
                    <h2>Waste Diversion</h2>

                    <MoodIcon style={ { transformOrigin: 'top center', transform: 'scale(2)', color: 'green' } } />

                    <br /><br />

                    <Chart chartType="ColumnChart" width="100%" height="400px" options={options} data={this.state.data} />
                </Card>
            </div>
        );
    }
}


export default Stats;