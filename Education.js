import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="B.Tech Software Engineering" where="Lovely Professional University" from="Aug 2019" to="Present"/>
            <Widecard title="SSC | HSC" where="Patna Central School" from="2009" to="2018"/>
            </div>
            )
        }
    }
    
export default Education
    