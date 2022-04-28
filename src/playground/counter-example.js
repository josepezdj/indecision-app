class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.handlePlusOne = this.handlePlusOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    try {
      const countString = localStorage.getItem('count');
      const count = Number(countString);

      if(!isNaN(count)) this.setState(() => ({ count }));
      console.log('fetching data')
    } catch (e) {
      // Do nothing at all
    };

  }
  componentDidUpdate(prevProps, prevState) {

    if(this.state.count !== prevState.count) localStorage.setItem('count', this.state.count);
  }
  componentWillUnmount() {
    console.log("component will unmount")
  }
  handlePlusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handlePlusOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter count={5}/>, document.getElementById("app"))