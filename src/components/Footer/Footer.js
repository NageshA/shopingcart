import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div style={{
                position: 'fixed', zIndex: 10000, display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center', bottom: 0, height: 30, backgroundColor: '#3f51b5', color: '#fff', alignSelf: 'center'
            }
            }>
                &copy; CopyRight
            </div >
        );
    }
}

export default Footer;
