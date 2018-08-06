import React, { Component } from 'react';
import Preview from './preview';
import Form from './Form';


class Main extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const {skills, job, name, email, linkedin, github, phone,palette} = this.props.data;
    const {color}= this.props;
    return (
      <div className= "cardGenerator__main">
        <Preview
          skills={skills}
          job={job}
          firstName={name}
          mail={email}
          linkedin={linkedin}
          github={github}
          telf={phone}
          colorPalette={color}
        /> 
        <Form 
          skillsList= {this.props.skillsList}
          handleInputRadioColor = {this.props.handleOnChangeColor}
          handleInputRadioTipo = {this.props.handleOnChangeTipo}
          handleInputGithub={this.props.handleOnChangeGithub}
          handleInputName={this.props.handleOnChangeName}
          handleInputJob={this.props.handleOnChangeJob}
          handleInputTelf={this.props.handleOnChangeTelf}
          handleInputMail={this.props.handleOnChangeMail}
          handleInputLinkedin={this.props.handleOnChangeLinkedin}
          loadPhoto={this.props.loadPhoto}
          refInput={this.props.ref}
          githubInputValue={github}
          linkedinInputValue={linkedin}
          telfInputValue={phone}
          emailInputValue={email}
          jobInputValue={job}
          nameInputValue={name}
          valuePalette={palette}
        />
      </div>
    );
  }
}

export default Main;
