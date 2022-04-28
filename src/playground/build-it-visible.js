let show = false;

const showDetails = () => {
    show = !show;
    render();
};

const render = () => {
  var template = (
    <div>
      <h1>Visibility Toggle</h1>
      
      <button onClick={showDetails}>
        {show ? "Hide details" : "Show details"}
      </button>
      {show && (
        <div>
          <p>Here are your details!</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById("app");

render();