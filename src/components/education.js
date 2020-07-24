import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl'; 

class Education extends Component{
    render(){
        return(
            <Grid>
             <Cell col={4}>
              <p>{this.props.courses}</p>
              <p>{this.props.startYear} {this.props.dash} {this.props.endYear}</p>
             </Cell>

             <Cell col={8}>
              <p>{this.props.courseDes}</p>
              <h4 style={{marginTop: '0px'}}>{this.props.schoolName}</h4>
              <p>{this.props.schoolDes}</p>
             </Cell>
            </Grid>
        );
    }
}

export default Education;