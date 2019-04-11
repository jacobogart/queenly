import React, { Component } from "react";

// * CSS imports
import "../css/Main_Info.css";

export default class Show_Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: this.getLocation()
    }
  }

  stringifyHosts = host => {
    if (host) {
      switch (host.length) {
        case 0:
          return null;
        case 1:
          return `Host: ${host}`;
        case 2:
          return `Hosts: ${host.join(" & ")}`;
        default:
          return `Hosts: ${host.join(" , ")}`;
      }
    } else {
      return null;
    }
  };

  stringifyReoccuring = reoccuring => {
    return reoccuring ? "Every" : "Only this";
  };

  convertWhen = (dayOfWeek, frequency, reoccuring) => {
    let howOften = this.stringifyReoccuring(reoccuring);

    return `${howOften} ${dayOfWeek.dayOfWeek} on the ${
      frequency.frequency
    } of the month.`;
  };

  convertTime = startTime => {
    // let standardTime = startTime.startTime.toString().split('');
    // if (startTime.startTime >= 1300) {
    //   console.log('stand', standardTime)
    //   let hours = parseInt(standardTime.splice(0, 2).join(''));
    //   standardTime = standardTime.splice(0, 2, (hours - 12).split(''))
    //   console.log('hours', hours)
    //   console.log(standardTime)
    // }
  };

  // convertTime = (startTime) => {
  //   console.log('time: ', startTime.startTime.toString().split('').splice(0,0, ':'));
  //   let time = startTime.startTime.split('').splice(1,0, ':'); // your input
  //   console.log(time);
  //   time = time.split(':'); // convert to array

  //   // fetch
  //   var hours = Number(time[0]);
  //   var minutes = Number(time[1]);

  //   // calculate
  //   var timeValue;

  //   if (hours > 0 && hours <= 12) {
  //     timeValue = "" + hours;
  //   } else if (hours > 12) {
  //     timeValue = "" + (hours - 12);
  //   } else if (hours == 0) {
  //     timeValue = "12";
  //   }

  //   timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
  //   timeValue += (hours >= 12) ? " P.M." : " A.M.";  // get AM/PM
  // }

  getLocation = () => {
    let location = this.props.bars.find(bar => 
      bar.shows.find(show => 
        show.name.includes(this.props.cardData.name)
      )
    );

    return location.name;
  }

  goToBar = () => {
    this.props.selectSearchResult(this.state.location);
  }

  render() {
    let {
      name,
      notes,
      host,
      dayOfWeek,
      frequency,
      startTime,
      reoccuring
    } = this.props.cardData;

    return (
      <main className="Bar-Main Main_Info">
        <article className="Content">
          <h2>{name}</h2>
          {!notes ? null : (
            <div>
              <h4>About:</h4>
              <p className="notes">{notes}</p>
            </div>
          )}
          <p className="hosts">{this.stringifyHosts(host)}</p>
          <p>When: </p>
          <p className="showtime">
            {this.convertWhen({ dayOfWeek }, { frequency }, { reoccuring })}{" "}
          </p>
          <p className="time">At: {this.convertTime({ startTime })}</p>
          <p className="location" onClick={this.goToBar}> Where: {this.state.location}</p>
        </article>
      </main>
    );
  }
}
