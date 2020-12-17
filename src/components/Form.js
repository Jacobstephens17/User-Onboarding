import React from 'react'

export default function newForm (props){

    const { values, submit, change, disabled, errors } = props;

    const onSubmit = (event) => {
      event.preventDefault();
      submit();
    };
  
    const onChange = (event) => {
      const { name, value, type, checked } = event.target;
      const valueToUse = type === "checkbox" ? checked : value;
      change(name, valueToUse);
    };

    return(
            <form onSubmit={onSubmit}>
                <div>
                    <div>{errors.first_name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.tos}</div>
                </div>

                <label>
                    New User
                    <p>Sign Up Below!</p>

                        <input
                            type='text'
                            placeholder="Full Name:"
                            value={values.name}
                            onChange={onChange}
                            name="username"
                            >
                        </input>
                    
                    <br/>
                    
                        <input
                            type='email'
                            placeholder="Email:"
                            value={values.email}
                            onChange={onChange}
                            name="email"
                            >
                        </input>
                    
                    <br/>
                    
                        <input
                            type='password'
                            placeholder="Password:"
                            value={values.password}
                            onChange={onChange}
                            name="password"
                            >
                        </input>
                </label>     
                

                    <br/>
                
                <label>
                    Terms of Service
                        <input
                         type="checkbox"
                         id="tos"
                         name="tos"
                         checked={values.tos}
                         onChange={onChange}
                        >
                        </input>
                </label>
            
            <button id='submitButton' disabled={disabled} >Submit</button>    
            
            </form>

    )
    
}

