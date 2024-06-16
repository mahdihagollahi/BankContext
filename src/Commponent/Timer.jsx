import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const App = () => {
  return (
    <div className="app">
      <div className="container">
       
        <Timer />
      </div>
    </div>
  );
};

const Timer = () => {
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  const deadline = "April, 27, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();    

   
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  React.useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer" role="timer">
      <div className="col-4">
        <div className="box">
        
        </div>
      </div>
      <div className="col-4">
        <div className="box">
      
        </div>
      </div>
      <div className="col-4">
        <div className="box">
          <p id="minute">{minutes < 10 ?  + minutes : minutes}</p>
          
        </div>
      </div>
      <div className="col-4">
        <div className="box">
          <p id="second">{seconds < 10 ?  + seconds : seconds}</p>
         
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById("root"));