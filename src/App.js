import React, { useCallback } from 'react';
import axios from "axios";
import { useState, useEffect } from 'react'
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import logo from './assets/spacex-logo-svg-vector.svg';
import './App.css';
import LaunchInformation from './LaunchInformation';
import particlesOptions from "./particles.json";

const baseURL = "https://api.spacexdata.com/v4/launches";

function App() {
    const [launches, setLaunches] = useState([]);
    const [error, setError] = useState(null);

    const particlesInit = useCallback(main => {
        loadFull(main);
    }, []);

    useEffect(() => {
        axios(baseURL)
          .then((response) => {
            setLaunches(response.data);
            setError(null);
          })
          .catch(setError);
      }, []);


    if (error) return <p>An error occurred</p>

    return (
        <div className="App">
            <Particles options={particlesOptions} init={particlesInit}/>
            <header className="App-header">
                <img src={logo} className="tracker-logo mb-3" alt="logo"/>
                <h1 className="flex justify-center mb-5">
                    Track all available launches from the SpaceX stations!
                </h1>
                <div className="flex justify-center w-11/12">
                <ul className="rounded-lg w-full">
                {launches.map((launch) => (
                        <LaunchInformation
                            className="pt-6 pb-3"
                            key={launch.id}
                            launch={launch}
                    />
                ))}
                </ul>
            </div>
            </header>
        </div>
    );
}

export default App;
