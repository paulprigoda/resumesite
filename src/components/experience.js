import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl'; 

class Experience extends Component{
    render(){
        return(
            <Grid>
             <Cell col={4}>
              <p>{this.props.courses}</p>
              <p>{this.props.startYear} {this.props.dash} {this.props.endYear}</p>
             </Cell>

             <Cell col={8}>
              <p>{this.props.courseDes}</p>
              <h4 style={{marginTop: '0px'}}>{this.props.jobName}</h4>
              <h5>{this.props.jobTitle}</h5>
              <p>{this.props.jobDesL1}</p>
              <p>{this.props.jobDesL2}</p>
              <p>{this.props.jobDesL3}</p>
              <p>{this.props.jobDesL4}</p>
             </Cell>
            </Grid>
        );
    }
}

export default Experience;