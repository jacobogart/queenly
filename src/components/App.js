import React from "react";
import SplashPage from "./SplashPage";
// * CSS imports
import "../css/App.css";
class App extends React.Component {
  render() {
    return (
      <section className="App">
        <article className="header">
          <SplashPage />
        </article>
      </section>
    );
  }
}

export default App;
