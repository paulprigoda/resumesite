import React from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';

class projects extends React.Component{
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{width: '550px', margin: 'auto'}}>
                 <CardTitle style={{color: '#33FF00', height: '176px', background: 'url(https://images.techhive.com/images/article/2015/03/unity-logo-100571261-large.jpg) center / cover'}}>The Biomarker Experience</CardTitle>
                <CardText>Current application development project</CardText>
                 <CardActions border>
                  <a href= "https://github.com/paulprigoda" rel="noopener noreferrer" target="_blank"><Button colored>Project Description</Button></a>
                 </CardActions>
                    <CardMenu style={{color: '#33FF00'}}>
                    <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            );
        } else if (this.state.activeTab === 1){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{width: '550px', margin: 'auto'}}>
                 <CardTitle style={{color: '#33FF00', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Pfizer.svg/1200px-Pfizer.svg.png) center / cover'}}>Pfizer ETL Pipeline</CardTitle>
                <CardText>Summer project worked on at while at Pfizer</CardText>
                 <CardActions border>
                  <a href="https://www.google.com" rel="noopener noreferrer" target="_blank" aria-hidden="true"><Button colored>Project Description</Button></a>
                 </CardActions>
                    <CardMenu style={{color: '#33FF00'}}>
                    <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{width: '550px', margin: 'auto'}}>
                 <CardTitle style={{color: '#33FF00', height: '176px', background: 'url(https://www.howtogeek.com/wp-content/uploads/2018/08/img_5b68e80f77e33.png) center / cover'}}>Operating System</CardTitle>
                <CardText>Basic Operating System built for class</CardText>
                 <CardActions border>
                  <a href="https://github.com/paulprigoda/FinalOSTeam4" rel="noopener noreferrer" target="_blank" aria-hidden="true"><Button colored>GitHub Code</Button></a>
                 </CardActions>
                    <CardMenu style={{color: '#33FF00'}}>
                    <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            );
        } else if (this.state.activeTab === 2){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{width: '550px', margin: 'auto'}}>
                 <CardTitle style={{color: '#33FF00', height: '176px', background: 'url(https://www.thinkrf.com/wp-content/uploads/2016/07/MATLAB-Logo.png) center / cover'}}>Sinusoidal Audio Modeling</CardTitle>
                <CardText>Research project done over the course of three semesters</CardText>
                 <CardActions border>
                  <a href= "http://audio.multimedia.edu.pl/sinmod.html" rel="noopener noreferrer" target="_blank"><Button colored>Project Description</Button></a>
                 </CardActions>
                    <CardMenu style={{color: '#33FF00'}}>
                    <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            );
        }
    }

    render() {
    return(
        <div className="catagory-tabs">
         <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
            <Tab>Current Projects</Tab>
            <Tab>Past Projects</Tab>
            <Tab>School Research</Tab>
        </Tabs>

            <Grid>
                <Cell col={12}>
                    <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
        </div>
    );
  }
}

export default projects;
