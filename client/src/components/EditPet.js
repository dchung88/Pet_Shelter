import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import Nav from './Nav';

const EditPet = props => {

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skills1, setSkills1] = useState("");
    const [skills2, setSkills2] = useState("");
    const [skills3, setSkills3] = useState("");
    const [errors, setErrors] = useState({});


        

    useEffect( () => {
        axios.get(`http://localhost:8008/api/pets/${props._id}`)
            .then( res=> {
                console.log(res.data);
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkills1(res.data.skills1);
                setSkills2(res.data.skills2);
                setSkills3(res.data.skills3);
            })
            .catch(err => console.log(err));
    
    }, []);

    const updatePet = e => {
        e.preventDefault();
        
        axios.put(`http://localhost:8008/api/pets/edit/${props._id}`,{_id: props._id,name, type, description, skills1, skills2, skills3}
        )
            .then(res => {
                if(res.data.errors){
                    setErrors(res.data.errors);
                }
                else{
                    navigate("/logged_in");
                }
            })
            .catch( err => console.log(err) );
    }

    return (
        <div className = "container">
        <Nav />
        <section class="hero is-info">
            <div class="hero-body">
                <div class="container">
                <h1 class="title">
                    Pet Shelter
                </h1>
                <h2 class="subtitle">
                    These pets are looking for a good home
                </h2>
                </div>
            </div>
        </section>
            
        <form onSubmit={ updatePet }>
        <article class="message is-success">
            <div class="message-header">
                <p>Edit {name}</p>
            </div>
            <div class="message-body">

            <div className="column">
                <label className="label">Pet Name:</label>
                <input placeholder ={name} onChange={e => setName(e.target.value)} value={name} />
                {
                    errors.name ? 
                    <p>{errors.name.message}</p> : ""
                }
            </div>

            <div className="column">
                <label className="label">Pet Type:</label>
                <input type="string" onChange={e => setType(e.target.value)} value={type} />
                {
                    errors.units ? 
                    <p class="help is-danger">{errors.type.message}</p> :
                    ""
                }
            </div>

            <div className="column">
                <label className="label">Description:</label>
                <input type="string" onChange={e => setDescription(e.target.value)} value={description} />
                {
                    errors.units ? 
                    <p class="help is-danger">{errors.description.message}</p> :
                    ""
                }
            </div>

            <div className="column">
                <label className="label">Skills (optional):</label>
            </div>

            <div className="column">
                <label className="label">Skill 1:</label>
                <input type="string" onChange={e => setSkills1(e.target.value)} value={skills1} />
                {
                    errors.units ? 
                    <p class="help is-danger">{errors.skills.message}</p> :
                    ""
                }
            </div>

            <div className="column">
                <label className="label">Skills 2:</label>
                <input type="string" onChange={e => setSkills2(e.target.value)} value={skills2} />
                {
                    errors.units ? 
                    <p class="help is-danger">{errors.skills.message}</p> :
                    ""
                }
            </div>

            <div className="column">
                <label className="label">Skills 3:</label>
                <input type="string" onChange={e => setSkills3(e.target.value)} value={skills3} />
                {
                    errors.units ? 
                    <p class="help is-danger">{errors.skills.message}</p> :
                    ""
                }
            </div>
            
            </div>
            <div class="buttons">
                <button className="button is-success" type="submit">
                    Edit Pet
                </button>
            </div>
        </article>
        </form>
        </div>
    )
}

export default EditPet;