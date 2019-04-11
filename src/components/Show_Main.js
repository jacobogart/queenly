import React, { Component } from 'react';

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

    if (frequency.frequency === 'weekly') {
      return `${howOften} ${dayOfWeek.dayOfWeek} of the month.`;
    } else {
      return `${howOften} ${dayOfWeek.dayOfWeek} on the ${ frequency.frequency } of the month.`;
    }
  };

  convertTime = startTime => {
    console.log('initial log', startTime.startTime)
    let standardTime = startTime.startTime.toString().split('');

    standardTime = [
      [standardTime[0], standardTime[1]],
      ":",
      [standardTime[2], standardTime[3]].join(''),
      'AM'
    ];

    if (standardTime[0].join('') > 12) {
      standardTime[0] = standardTime[0].join('') - 12;
      standardTime[3] = 'PM';
    }
    
    return `${standardTime.join('')}`
  };

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
      <main className="Show-Main Main_Info Content">
        <article className="Show-title">
          <h2>{name}</h2>
          {!notes ? null : (
            <div>
              <h4>About:</h4>
              <p className="notes">{notes}</p>
            </div>
          )}
        </article>
        <article className="Show-host">
        <p className="location" onClick={this.goToBar}>
        {" "}
        Where: <span>{this.state.location}</span>
        </p>
        <p className="hosts">{this.stringifyHosts(host)}</p>
        </article>
        <article className="Show-when">
          <p>When: </p>
          <p className="showtime">
            {this.convertWhen({ dayOfWeek }, { frequency }, { reoccuring })}{" "}
          </p>
          <p className="time">At: {this.convertTime({ startTime })}</p>
        </article>
      </main>
    );
  }
}
