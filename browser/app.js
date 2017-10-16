import React, {Component} from 'react'
import axios from 'axios'

export default class extends Component {
    constructor(props){
        super(props)
        this.state = {
            users : []
        }
    }

    componentDidMount() {
        axios.get('/')
        .then(users => {
            return this.setState({users})
        })
    }

    render(){
        return(
            <h1>Hello World</h1>
            {
                this.state.users.map((user, idx) => {
                    return(
                        <h1 key={idx}>{user.name}</h1>
                    )
                })
            }
        )
    }



    

}
