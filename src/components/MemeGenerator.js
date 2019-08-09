import React, {Component} from 'react';

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: '',
            bottomText: '',
            randomImage: 'http://i.imgflip.com/1bij.jpg',
            allMemeImages: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                console.log(memes)
                this.setState({allMemeImages: memes})
            })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        const randNum = Math.floor(Math.random() * this.state.allMemeImages.length)

        const randMemeImage = this.state.allMemeImages[randNum].url

        this.setState({ randomImage: randMemeImage})
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="topText" 
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />

                    <input 
                        type="text" 
                        name="bottomText" 
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />  

                    <button>Gen</button>
                </form>

                <div>
                    <img src={this.state.randomImage} alt=""/>
                    <h2>{this.state.topText}</h2>
                    <h2>{this.state.bottomText}</h2>
                </div>

            </div>
        )
    }
}

export default MemeGenerator