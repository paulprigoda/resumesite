import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Ptmusicofficial extends Component{
    render(){
        return(
            <div>
             <Grid className='ptbacking'>

              <Cell col={12} className="pttitle">
               <h2>Sweatshirt is out now!!</h2>
              </Cell>

              {/*<Cell col={6} className="newvideo">
               <iframe width="560" height="315" src="https://www.youtube.com/embed/_bCW5P91mbg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </Cell>*/}

              <Cell col={12} className="newsong">
               <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/663944105&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
              </Cell>

            <hr style = {{borderTop: "7px dotted purple", width: "80%", margin: "auto"}}/>
              <Cell col={12} className="pttitle">
               <h2>Connect with Me</h2>
              </Cell>

            <div className="socialspt">
              <Cell col={2}>
                <a href = "https://www.instagram.com/ptmusicofficial/" rel = "noopener noreferrer" target="_blank">
              <i class="fab fa-instagram" aria-hidden="true"></i>
                </a>
              </Cell>

             <Cell col={2}>
            <a href = "https://www.youtube.com/channel/UCavJWE5aOm2JOvGrveRObkQ" rel = "noopener noreferrer" target="_blank">
              <i class="fab fa-youtube" aria-hidden="true"></i>
                </a>
              </Cell>

             <Cell col={2}>
            <a href = "https://soundcloud.com/ptmusicofficial" rel = "noopener noreferrer" target="_blank">
              <i class="fab fa-soundcloud" aria-hidden="true"></i>
                </a>
              </Cell>
            </div>
            <div className = "ptsocialsflex">
             <Cell col={2}>
            <a href = "https://open.spotify.com/playlist/1HHY44DbcA70GH94bPDChl" rel = "noopener noreferrer" target="_blank">
              <i class="fab fa-spotify" aria-hidden="true"></i>
                </a>
              </Cell>

             <Cell col={2}>
            <a href = "https://twitter.com/ptofficialmusic" rel = "noopener noreferrer" target="_blank">
              <i class="fab fa-twitter" aria-hidden="true"></i>
                </a>
              </Cell>

             <Cell col={2}>
            <a href = "https://www.facebook.com/ptmusicofficial" rel = "noopener noreferrer" target="_blank">
              <i class="fab fa-facebook" aria-hidden="true"></i>
                </a>
              </Cell>
            </div>

            <hr style = {{borderTop: "7px dotted purple", width: "80%", margin: "auto"}}/>

              <Cell col={12} className="pttitle">
               <h2>Discography</h2>
              </Cell>

                <Cell col={6} className='albums'>
                  <h3>Singles</h3>
                      <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/857062403&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                </Cell>

                <Cell col={6} className='albums'>
                  <h3>Junior Year</h3>
                      <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/541181094&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                </Cell>

                <Cell col={6}className="albums">
                  <h3>Sophomore Year</h3>

                      <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/331096281&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                </Cell>

                <Cell col={6}className="albums">
                  <h3>Freshmen Year</h3>
                      <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/234262931&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>

                </Cell>
     </Grid>
    </div>
    );
  }
}

export default Ptmusicofficial;
