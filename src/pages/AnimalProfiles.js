import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import './Home';


function AnimalProfiles() {
    return (
        <div>
            <h1> Animal Profiles </h1>
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

export default AnimalProfiles;