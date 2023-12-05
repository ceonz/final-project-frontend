import React from 'react';
import { Link } from "react-router-dom";
import './Home';


function ShelterTasks() {
    return (
        <div>
            <h1> Shelter Tasks </h1>
            <div >
                <Link to="/home">
                    <button>
                        Home Page
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default ShelterTasks;