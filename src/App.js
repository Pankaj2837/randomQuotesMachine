import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    handleClick()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const handleClick = () => {
    const url = 'https://api.quotable.io/random';
    fetch(url)
      .then((response) => response.json())
      .then(response => {
        setData(response);
        console.log(data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div id="wrapper" className="container App-header">
      <div id="quote-box" className="card text-center" style={{ "width": "50vw" }}>
        <div className="card-body">
          <div id="text" className="card-text" style={{ "opacity": 1, "fontSize": "calc(20px + 2vmin)" }} >
            <i className="fa fa-quote-left"></i> {data.content}
          </div>
          <div className="quote-author">
            <span id="author" className="card-text" style={{ "opacity": 1, "fontSize": "1em", "float": "right" }}>- {data.author}</span>
          </div>
          <div style={{ "margin": "5vh" }}>
            <span style={{ "float": "left" }}>
              <a style={{ "marginRight": "2vh" }} id="tweet-quote" href="twitter.com/intent/tweet" target="_blank" className="btn btn-primary"><i className="fa fa-twitter"></i></a>
              <a id="tumblr-quote" href="https://www.tumblr.com/widgets/share/tool" target="_blank" className="btn btn-primary" rel="noreferrer"><i className="fa fa-tumblr"></i></a>
            </span>
            <span style={{ "float": "right" }}>
              <button className="btn btn-primary" onClick={handleClick}>New Quotes</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
