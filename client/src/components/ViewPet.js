import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const ViewPet = props => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skills1, setSkills1] = useState("");
    const [skills2, setSkills2] = useState("");
    const [skills3, setSkills3] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8008/api/pets/${props._id}`)
            .then(res => {
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkills1(res.data.skills1);
                setSkills2(res.data.skills2);
                setSkills3(res.data.skills3);
            })
            .catch(err => console.log(err));
    }, []);

    const Edit = _id => {
        navigate(`/pets/edit/${props._id}`)
    }

    const Delete = _id => {
        axios.delete(`http://localhost:8008/api/pets/${props._id}`)
        navigate("/")
    }

    return (
        <div className = "container">
            
        <article class="message is-success">
            <div class="message-header">
                <p>Details about: {name}</p>
            </div>
            <div class="message-body">
                <h3><strong>Pet Type:</strong> {type}</h3>
                <br></br>
                <h3><strong>Description:</strong> {description}</h3>
                <br></br>
                <h3><strong>Skills:</strong>
                <ul>
                    <li>{skills1}</li>
                    <li>{skills2}</li>
                    <li>{skills3}</li>
                </ul>
                </h3>
                <br></br>
                </div>
                <div class="buttons">
                        <button className="button is-success" onClick = {e => Delete(props._id)}>
                          Adopt {name}
                        </button>
                </div>
        </article>
        </div>
    )
}

export default ViewPet;