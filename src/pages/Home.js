import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import './AnimalProfiles';

function Home() {
    return (
        <div>
            <h1> Animal Shelter Management System </h1>
            <div >
                <Link to="/AnimalProfiles">
                    <button>
                        Animal Profiles
                    </button>
                </Link>
            </div>
            <div>
                <Link to="/ShelterTasks">
                    <button>
                        Shelter Tasks
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Home;

