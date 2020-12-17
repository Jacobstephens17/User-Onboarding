import React, { useState, useEffect } from 'react'

import './App.css'; 
import Person from './components/Person'
import axios from 'axios'
import * as yup from 'yup'
import schema from "./validation/schema";
import Form from './components/Form'

const emptyForm = {
  username: "",
  email: "",
  password: "",
  tos: false,
}

const initialFormErrors = {
  username: "",
  email: "",
  password: "",
};

const initialList = [];
const initialDisabled = true;

function App() {
  const [people, setPeople] = useState([initialList]); // array of people objects
  const [formValues, setFormValues] = useState(emptyForm); // object
  const [formErrors, setFormErrors] = useState(initialFormErrors); // object
  const [disabled, setDisabled] = useState(initialDisabled); // boolean



  const getPeople = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        const recievedPeople = (res.data.data);
        recievedPeople.forEach((item) =>{
         setPeople(item)
         console.log(item.first_name)
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  const postNewPeople = (newUser) => {
    axios.post('https://reqres.in/api/users', newUser)
    .then((res) => {
      setPeople([res.data, ...people]);
      setFormValues(formValues);
    })
    .catch((err) => {
    })
  }

  const inputChange = (name, value) => {

    yup
      .reach(schema, name) 
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value, // NOT AN ARRAY
    });
  };

  const formSubmit = () => {
    const newPerson = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tos: ["tos"].filter(
        (tos) => formValues[tos]
      ),
    };
    postNewPeople(newPerson);
  };

  useEffect(() => {
    getPeople();
  }, []);

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div>
      <Form
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}/>
      <Person/>
    </div>
  );
}

export default App;
