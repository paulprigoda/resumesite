import React from 'react';
import './App.css';
import './music.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from "./components/main";
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title={<Link style={{textDecoration:'none', color: 'white'}} to='/'>Home</Link>}scroll>
                <Navigation>
                    <Link to="/resume">Resume</Link>
                    <Link to="/ptmusicofficial">PTMUSICOFFICIAL</Link>
                </Navigation>
            </Header>
            <Drawer title="Menu">
                <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/ptmusicofficial">PTMUSICOFFICIAL</Link>
                    <a href="https://paulprigodaresume.s3.us-east-2.amazonaws.com/PaulTPrigodaResume.pdf?" rel="noopener noreferrer" target="_blank">Download Resume</a>
                    <a href="https://www.linkedin.com/in/paul-prigoda/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
                    <a href="https://github.com/paulprigoda" rel="noopener noreferrer" target="_blank">GitHub</a>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
        </Layout>
    </div>
  );
}

export default App;
