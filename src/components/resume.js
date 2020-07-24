import React from 'react';
import {Grid, Cell} from 'react-mdl';
import headshot from './headshot.jpg';
import Education from './education'
import Experience from './experience';
import Skills from './skills';


function resume(){
    return(
        <div className="wholeresume">
         <Grid>
          <Cell col={4} className="resumeLeftCol">
           <div style={{textAlign: "center"}}>
            <img src = {headshot} alt = "logo" style= {{height: "200px"}}/>
           </div>
           <h2 style = {{addingTop: "2em"}}>Paul Prigoda</h2>
           <h4 style = {{color: "grey"}}>Software Engineer</h4>
           <hr style = {{borderTop: "3px solid #833fb2", width: "50%"}}/>
           <p>Goal-oriented and creative individual with a skillset in Full Stack Software Engineering.</p>
           <p><a href='https://paulprigodaresume.s3.us-east-2.amazonaws.com/PaulTPrigodaResume.pdf?' rel="noopener noreferrer" target="_blank">Downloadable Resume</a>
           </p>
           <hr style = {{borderTop: "3px solid #833fb2", width: "50%"}}/>
           <h4 style = {{color: "grey"}}>Top Programming Languages</h4>
           <div>
           <Skills
            skill='Python'
            progress={85}
           />
           <Skills
            skill='C#'
            progress={78}
           />
           <Skills
            skill='SQL'
            progress={73}
           />
           <Skills
            skill='JavaScript'
            progress={67}
           />
           </div>
           <hr style = {{borderTop: "3px solid #833fb2", width: "50%"}}/>
           <h4 style = {{color: "grey"}}>Other Technical Skills</h4>
           <div>
           <h5>Programming:</h5>
           <p>Java, HTML, CSS, PHP, Unity, .NET, MATLAB, Spotfire</p>
           <h5>Systems:</h5>
           <p>AWS, S3, Redshift, Git, Windows, iOS, Linux</p>
           </div>
           <hr style = {{borderTop: "3px solid #833fb2", width: "50%"}}/>
          </Cell>

          <Cell col={8} className='resumeRightCol'>
           <h2>Education</h2>
              <Education
                startYear={2015}
                dash={"-"}
                endYear={2019}
                schoolName={"Connecticut College"}
                schoolDes={"Bachelor of Arts || Major: Computer Science || Minor: Psychology"}
               />

               <Education
                courses={"Programming Courses"}
                courseDes={"Operating Systems • Computer Algorithms • Computer Organization • Database Systems • Data Structures • Web Technology and Mobile Development • Intro to Cybersecurity • Entertainment Software Design • Multimedia"}
               />
                <Education
                courses={"Psychology Courses"}
                courseDes={"Psychological Statistics • Psychology of Personality • Social Psychology • Sensation and Perception • Couples and Family Therapy"}
               />


           <hr style={{borderTop: '3px solid #e22947'}} />

           <h2>Work Experience</h2>
              <Experience
                startYear={"August 2019"}
                dash={"-"}
                endYear={"Present"}
                jobName={"Junior Software Engineer - Medical Knowledge Group"}
                jobDesL1={"• Implemented hierarchy management system to HealthLogix Speaker Bureau Portal, keeping track of the territory assignments to client representatives."}
                jobDesL2={"• Responsible for developing Python and SQL scripts to automate reoccurring daily maintenance requests through HealthLogix ticketing system."}
                jobDesL3={"• Designed and animated the Ovarian Cancer section in The Biomarker Experience, an Augmented Reality iOS oncology research app for AstraZeneca."}
               />

              <Experience
                startYear={"May 2018"}
                dash={"-"}
                endYear={"August 2018"}
                jobName={"Data Engineer Intern - Pfizer"}
                jobDesL1={"• Collaborated with senior level biology scientists to develop an ETL for HTS data from an Oracle Database to an Amazon Redshift Database; delivered data results to scientists with real time visualizations mimicking lab plates."}
                jobDesL2={"• Had weekly meetings with the scientists to present updates on the application; develop and implement new ideas that scientists brought to meetings; presented tutorial to team on how to use application at the end of internship."}
                jobDesL3={"• Selected to showcase and demonstrate application at end of summer presentation to senior level executives and directors with technical Q&A of application specifications."}
               />

                <Experience
                startYear={"August 2016"}
                dash={"-"}
                endYear={"May 2017"}
                jobName={"Computer Science Teaching Assistant - Connecticut College"}
                jobDesL1={"• Grouped with two other TA’s conducted weekly lab sessions for Intro to Computer Science students."}
                jobDesL2={"• Implemented review and preview of technology and software applications course material to reinforce learning in students, culminating in a final project to create a game of the student’s choice in Python from the ground up."}
               />

                <Experience
                startYear={"June 2016"}
                dash={"-"}
                endYear={"July 2016"}
                jobName={"Python/3D Printing Instructor - ID Tech Camps"}
                jobDesL1={"• Taught 3D printing and Python programming to students in grades 2-5."}
               />

        </Cell>

         </Grid>
        </div>
    );
}

export default resume;
