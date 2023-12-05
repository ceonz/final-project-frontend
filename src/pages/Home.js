import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import './AnimalProfiles';

function Home() {
    return (
        <div>
            <h1> Animal Shelter Management System </h1>
            <div >
                <a href="/AnimalProfiles">
                    <button>
                        Animal Profiles
                    </button>
                </a>
            </div>
            <div>
                <button>
                    Shelter Tasks
                </button>
            </div>
        </div>
    );
}

export default Home;

