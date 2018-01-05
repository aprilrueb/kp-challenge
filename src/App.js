import React, { Component } from 'react';
import './App.css';
import kpData from './locationsResponse.json';

class App extends Component {

  constructor() {
    super();
    this.neighborhoodClick = this.neighborhoodClick.bind(this);
  }

  neighborhoodClick(event){
    let allBoroughs = document.getElementsByClassName("App-borough")
    for(let i = 0; i < allBoroughs.length; i++){
      allBoroughs[i].style.color = "black";
    }
    document.getElementById(event.target.id).style.color = "#19c6b7";
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">kidpass challenge</h1>
        </header>
        <p className="App-intro">
          Area A
        </p>
        <div className="App-boroughs">Boroughs</div>
        <ul>{kpData.data.sort((a, b) => a.borough.weight - b.borough.weight).map((x, index) => <div><div className="App-borough" id={x.borough.name} key={x.borough.id}>{x.borough.name}</div>
          <ul>{kpData.data[index].mappings.sort((a, b) => a.macro.weight - b.macro.weight).map((y, index2) => <div key={y.macro.id}>{
              y.macro.name === x.borough.name ?
              kpData.data[index].mappings[index2].neighborhoods.map((z, index3) => <button id={x.borough.name} key={z.id} onClick={this.neighborhoodClick}>{z.name}</button>) :
              <div><div className="App-macro">{y.macro.name}</div>
                <ul>{kpData.data[index].mappings[index2].neighborhoods.map((z, index4) => <button id={x.borough.name} key={z.id} onClick={this.neighborhoodClick}>{z.name}</button>)}</ul>
              </div>}
            </div>)}</ul>
        </div>)}</ul>
        <p className="App-intro">
          Area B
        </p>
        <div className="App-boroughs">Boroughs</div>
        <ul>
          {kpData.data.map((x, index5) => <div key={x.borough.id}>{x.borough.name}</div>)}
        </ul>
      </div>
    );
  }
}

export default App;
