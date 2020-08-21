import React, { Component } from 'react';
import { APPNAME } from '../../settings';


class Footer extends Component {

    render() {
        return (
            <div className="text-center my-5 text-secondary">
                <p>Copyright 2020 · {APPNAME}</p>
            </div>
        )
    }
}


  
export default Footer;