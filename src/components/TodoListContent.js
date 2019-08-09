import React from 'react'

import TodoItem from './TodoItem'
import todosData from '../todosData'

class Body extends React.Component {

    // const date = new Date(2019, 6, 30, 11);
    // const date = new Date();

    // const curDate = date.getDate();
    // const hours = date.getHours();
    // let timeOfDay = 'night';

    // const styles = {
    //     color: '#D90000',
    //     fontSize: '20px',
    //     backgroundColor: '#0E9878'
    // }

    // if (hours < 12) {
    //     timeOfDay = 'Morning';
    //     styles.color = '#04756f';
    // } else if (hours>= 12 && hours < 17) {
    //     timeOfDay = 'Afternoon';
    //     styles.color = '#2E0927';
    // }

    // const styles = {
    //     color: '#ff8c00', 
    //     backgroundColor: '#000',
    //     fontSize: '20px',
    // }

    // return (
    //     <div>
    //         <h1 style={styles}>
    //             Hola! It is {timeOfDay} of {`${curDate}`} / {date.getMonth()+1}.
    //         </h1>
    //     </div>
    // );

    constructor() {
        super()
        this.state = {
            todosData: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        console.log(id)
        this.setState(prevState => {
            const updatedTodos = prevState.todosData.map(item => {
                if (item.id === id) {
                    
                    item.completed = !item.completed
                }

                return item
            })

            return {
                todosData: updatedTodos
            }
        })
    }

    render() {

        const todoItems = this.state.todosData.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)

        return (
            <div className="todo-list">
                { todoItems }
            </div>
        );
    }

    
}

export default Body;