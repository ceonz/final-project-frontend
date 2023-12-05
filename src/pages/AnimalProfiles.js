import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import './Home';


function AnimalProfiles() {
    return (
        <div>
            <h1> Animal Profiles </h1>
            <div >
                <a href="/Home">
                    <button>
                        Home Page
                    </button>
                </a>
            </div>
        </div>
    );
}

export default AnimalProfiles;