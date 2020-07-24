import React from 'react';
import {Switch, Route} from 'react-router-dom';
import landingPage from './landingpage';
import contact from './contact';
import projects from './projects';
import resume from './resume';
import ptmusicofficial from './ptmusicofficial';

const Main = () => (
    <Switch>
        <Route exact path="/" component= {landingPage} />
        <Route path="/resume" component= {resume} />
        <Route path="/ptmusicofficial" component= {ptmusicofficial} />
        <Route path="/contact" component= {contact} />
    </Switch>
)

export default Main;
