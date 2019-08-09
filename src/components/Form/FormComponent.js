
import React from 'react';

function FormConponent(props) {
    return(
        <main>
            <form onSubmit>
                <input 
                    name="firstName" 
                    type="text" 
                    placeholder="First Name" 
                    value={props.data.firstName}
                    onChange={props.handleChange}
                />
                <br />

                <input 
                    name="lastName" 
                    type="text" 
                    placeholder="Last Name" 
                    value={props.data.lastName}
                    onChange={props.handleChange}
                />
                <br />

                <input 
                    name="age" 
                    type="number" 
                    placeholder="Age" 
                    value={props.data.age}
                    onChange={props.handleChange}
                />
                <br />

                <label><input 
                    name="gender" 
                    type="radio"
                    value="male"
                    checked={props.data.gender === 'male'}
                    onChange={props.handleChange}
                />Male
                </label>
                <br />

                <label><input 
                    name="gender" 
                    type="radio"
                    value="female"
                    checked={props.data.gender === 'female'}
                    onChange={props.handleChange}
                />Female
                </label>
                <br />

                <select
                    name="favoriteFruit"
                    value={props.data.favoriteFruit}
                    onChange={props.handleChange}
                >
                    <option value="">Please select one</option>
                    <option value="apple">Apple</option>
                    <option value="orange">Orange</option>
                    <option value="pear">Pear</option>
                    <option value="banana">Banana</option>
                </select>
                <br />

                <label>
                    <input 
                        name="languages" 
                        type="checkbox"
                        value="chinese"
                        checked={props.data.languages.chinese}
                        onChange={props.handleChange}
                    />Chinese
                </label>
                <br />

                <label>
                    <input 
                        name="languages" 
                        type="checkbox"
                        value="english"
                        checked={props.data.languages.english}
                        onChange={props.handleChange}
                    />English
                </label>
                <br />

                <label>
                    <input 
                        name="languages" 
                        type="checkbox"
                        value="cantonese"
                        checked={props.data.languages.cantonese}
                        onChange={props.handleChange}
                    />Cantonese
                </label>
                <br />

                <button>Submit</button>
            </form>
            <hr />
            <h2>Your Info:</h2>
            <p>Your Name: {props.data.firstName} {props.data.lastName}</p>
            <p>Your Age: {props.data.age}</p>
            <p>Your Gender: {props.data.gender}</p>
            <p>Your Favorite Fruit: {props.data.favoriteFruit}</p>
            <p>Your Language: {props.showSelectedLanguages(props.data.languages)}</p>
        </main>
    )
}

export default FormConponent;