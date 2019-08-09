import React, {Component} from 'react'

import FormComponent from './FormComponent'

class FormContent extends Component {
    
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            favoriteFruit: '',
            languages: {
                chinese: false,
                english: false,
                cantonese: false,
            },
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const{value, name, type, checked} = event.target

        if (type === 'checkbox') {
            
            this.setState(prevState => {
                let updatedLanguages = prevState.languages;
                updatedLanguages[value] = checked
                return {
                    languages: updatedLanguages
                }
            });

        } else {

            this.setState({
                [name]: value
            });
        }

    }

    showSelectedLanguages(languages) {
        return Object.entries(languages).map((language) => {
            if (language[1] === true) {
                return language[0]
            }
        }).filter( n => n).join(',')
    }

    render() {
        return (
            <FormComponent 
                handleChange={this.handleChange}
                data = {this.state}
                showSelectedLanguages={this.showSelectedLanguages}
            />
        )
    }
}

export default FormContent