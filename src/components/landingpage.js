import React from 'react';
import {Grid, Cell} from 'react-mdl';
import logo from './logo.jpg';

function landingPage(){
    return(
     <div style = {{width: '100%', margin:'auto', display: 'flex'}}>
      <Grid className = "landingGrid">
        <Cell col={12}>
            <img src = {logo} alt = "Logo" className = "logoPic"/>;
            <div className="bannerText">
             <h1>Software Engineer</h1>
             <hr/>
             <p>Tech Links:</p>
             <div className="socialLinks">

                <a href = "https://www.linkedin.com/in/paul-prigoda/" rel = "noopener noreferrer" target="_blank">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>

                <a href = "https://github.com/paulprigoda" rel = "noopener noreferrer" target="_blank">
              <i class="fa fa-github" aria-hidden="true"></i>
                </a>

                <a href = "https://www.hackerrank.com/pprigoda" rel = "noopener noreferrer" target="_blank">
              <i class="fab fa-hackerrank" aria-hidden="true"></i>
                </a>



             </div>
            </div>
        </Cell>
    </Grid>
    </div>
    );
}

export default landingPage;
