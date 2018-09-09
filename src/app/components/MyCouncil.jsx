import React from 'react';

import AutorenewIcon from '@material-ui/icons/Autorenew';
import ImageHouseIcon from 'Assets/images/house-icon.png';
import ImageSwimmingPoolIcon from 'Assets/images/swimming-pool-icon.jpg';
import Card from '@material-ui/core/Card';


class MyCouncil extends React.Component {
    render() {
        var pools = '';

        for (var i = 0; i < 63; i++) {
            pools += (<img src={ ImageSwimmingPoolIcon } style={ { width: '16px' } } />);
        }

        return (
            <div>
                <Card style={ { margin: '16px', background: 'yellowgreen', boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.2)', padding: '8px 16px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
                    <p>Don't forget to put your bins out on <strong>Thursday</strong> night! <a href={"#"}>Get a weekly notification</a></p>
                </Card>

                <div style={{ textAlign: 'center', width: '80%', margin: '80px auto 60px' } }>
                    { <img src={ ImageHouseIcon } style={ { width: '128px' } } /> }

                    <h3 style={ { fontWeight: 'normal' } }>In 2016, your council collected over <strong>250kg</strong> of recyclables per household</h3>
                </div>

                <div style={{ textAlign: 'center', width: '80%', margin: '0 auto 60px' } }>
                    <div>
                        <img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } /><img src={ ImageSwimmingPoolIcon } style={ { width: '32px', margin: '0px 2px' } } />
                    </div>

                    <h3 style={ { fontWeight: 'normal' } }><strong>158 megalitres</strong> of water was saved - that's over 63 olympic sized swimming pools!</h3>
                </div>

                <h2 style={ { margin: '16px' }}>Council Services</h2>

                <Card style={ { margin: '16px', background: 'yellowgreen', boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.2)', padding: '8px 16px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
                    <h4>Hard Rubbish</h4>

                    <p>Hard rubbish runs every six months, or you can book a collection by clicking <a href={"#"}>here</a>.</p>
                </Card>
            </div>
        );
    }
}


export default MyCouncil;