import React from 'react'
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handleRemoveOne = this.handleRemoveOne.bind(this);
    this.handlePick = this.handlePick.bind(this);
  }
  handleRemoveAll = () => {
    this.setState(() => ({ options: [] }));
  }
  handleRemoveOne = (option) => {
    this.setState((prevState) => ({
      options: prevState.options.filter(el => el != option)
    }))
  }
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(()=> ({selectedOption: option}))
  }
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }
  handleWipeSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }))
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if(options) this.setState(() => ({ options }));
      console.log('fetching data')
    } catch (e) {
      // Do nothing at all
    };

  }
  componentDidUpdate(prevProps, prevState) {

    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log('saving data on local storage');
    }
  }
  componentWillUnmount() {
    console.log("component will unmount")
  }
 
  render() {
    
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className='container'>
          <Action 
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className='widget'>
            <Options 
              options={this.state.options} 
              handleRemoveAll={this.handleRemoveAll}
              handleRemoveOne={this.handleRemoveOne}
            />
            <AddOption 
              handleAddOption={this.handleAddOption} 
            />
          </div>
        </div>
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleWipeSelectedOption={this.handleWipeSelectedOption}
        />
      </div>
    )
  }
}

export default IndecisionApp;