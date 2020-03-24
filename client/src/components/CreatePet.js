import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const CreatePet = props => {

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skills1, setSkills1] = useState("");
    const [skills2, setSkills2] = useState("");
    const [skills3, setSkills3] = useState("");
    const [errors, setErrors] = useState({});

    const addPet = e => {
        e.preventDefault();
        const pet = {name, type, description, skills1, skills2, skills3};
        axios.post("http://localhost:8008/api/pets", {name, type, description, skills1, skills2, skills3})
          .then( res => {
            if(res.data.errors) {
              setErrors(res.data.errors);
            } 
            else {
              navigate("/");
            }
          })
          .catch( err => console.log(err) );
      }

      return (
        <div className = "container">
        <form onSubmit={ addPet }>
            <article class="message is-success">

                <div class="message-header">
                    <p>Know a pet needing a home? Enter the pet information below!</p>
                </div>

                <div class="message-body">
                    <div className="column">
                        <label className="label">Pet Name:</label>
                        <input type="string" onChange={e => setName(e.target.value)} value={name} />
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
                    <div class="buttons">
                        <button className="button is-success" type="submit">
                          Add Pet
                        </button>
                    </div>                  
                </div>
            </article>
        </form>
        </div>
        )
}

export default CreatePet;