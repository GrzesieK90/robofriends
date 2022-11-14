import React, {Component} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll'
import ErrorBoundry from '../Components/ErrorBoundry'
import './App.css';

class App extends Component {   // App posiada oba stany ponieważ jest klasą rozszeżoną, więc
    constructor(){              // może posiadać konstruktor jak obiekt oraz posiadać zapis this.state
        super()                 // Ten stan odpowiada za zmienne w app, to co opisuje app
        this.state = {          // Składnik app który ma dwa stany
            robots: [],         // stan pierwszy
            searchfield:''      // stan drugi
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}))
        }

    onSrchChng = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const {robots, searchfield} = this.state
            const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ?
        <h1>Loading...</h1> :
        (
            <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox srchChng={this.onSrchChng}/>
            <Scroll>   
                <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundry>
            </Scroll>
            </div>
        )
    }
}


export default App;