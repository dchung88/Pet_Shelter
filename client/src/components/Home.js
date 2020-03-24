import React, { useState, useEffect } from 'react';
import {Link, navigate } from '@reach/router';
import axios from 'axios';

const Home = props => {

    const [pets, setPets] = useState([]);

    const fetchPets = () => {
        axios.get("http://localhost:8008/api/pets", {
          withCredentials: true
        })
          .then( res => setPets(res.data) )
          .catch( err => {
            if(!err.response.data.verified) {
              navigate("/sign_in");
            } else {
              console.log(err);
            }
          });
    }

    useEffect( () => {
        axios.get("http://localhost:8008/api/pets")
            .then(res => {
                setPets(res.data)})
            .catch(err => console.log(err));
    },[]);

    const View = _id => {
        navigate(`/edit/${_id}`)
    }

    return (
        <div className = "container">
            <div class="buttons">
                <a class="button is-light">
                    <strong><Link to ="/new" >Add a new pet!</Link></strong>
                </a>
            </div>  
                <table class="table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                        <th>Edit</th>
                        <th></th>
                        <th>View</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                    pets.map(pet =>

                    <tr is-selected>
                        <td>{pet.name}</td>
                        <td>{pet.type}</td>
                        <td>{pet.description}</td>
                        <td><Link to = {"/edit/"+pet._id} onClick = {e => View(pet._id)}>Edit</Link></td>
                        <td>|</td>
                        <td><Link to={"/pets/"+pet._id}>Details</Link></td>
                    </tr>
                    )}
                    </tbody>
                </table>      
        </div>
    )


}

export default Home;
