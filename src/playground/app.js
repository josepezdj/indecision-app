class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handleRemoveOne = this.handleRemoveOne.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: []
    }
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
      console.log('saving data');
    }
  }
  componentWillUnmount() {
    console.log("component will unmount")
  }
  handleRemoveAll() {
    this.setState(() => ({ options: [] }));
  }
  handleRemoveOne(option) {
    this.setState((prevState) => ({
      options: prevState.options.filter(el => el != option)
    }))
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  handleAddOption(option) {
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
  render() {
    
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options} 
          handleRemoveAll={this.handleRemoveAll}
          handleRemoveOne={this.handleRemoveOne}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}
Header.defaultProps = {
  title: 'Indecision'
}

const Action = (props) => {
  return (
    <div>
      <button 
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
      What should I do?
      </button>
    </div>
  )
}

const Options = (props) => {
  return (
    <div>
    <button onClick={props.handleRemoveAll}>remove all</button>
      {props.options.length === 0 && <p>Please add an option to get started!</p>}
      {
        props.options.map(option => (
          <Option 
            key={option} 
            optionText={option} 
            handleRemoveOne={props.handleRemoveOne}
          />
        ))
      }
    </div>
  )
}

const Option = (props) => {
  return (
    <div>
      <span> {props.optionText} </span>
      <button
        onClick={(e) => {
          props.handleRemoveOne(props.optionText)
        }}>
        remove
      </button>
    </div>
  )
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if(!error) e.target.elements.option.value = "";
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));