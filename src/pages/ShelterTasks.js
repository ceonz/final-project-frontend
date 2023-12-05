import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import './Home';


function ShelterTasks() {
    return (
        <div>
            <h1> Shelter Tasks </h1>
            <div >
                <Link to="/Home">
                    <button>
                        Home Page
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default ShelterTasks;