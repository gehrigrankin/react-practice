import React, { Component } from 'react';

import './App.css';
import Profile from './components/Profile/Profile'

class App extends Component {
    state = {
        people: [
            {
                id: 1,
                name: 'Gehrig Rankin', 
                occupation: "Web Developer", 
                aboutMe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ut soluta quia, hic repudiandae eligendi alias. Accusamus possimus necessitatibus dolore quidem provident nostrum, deserunt unde numquam voluptas aut quos quo, nihil, sit corporis? Ipsa veritatis consequuntur voluptates debitis."
            },
            {
                id: 2,
                name: 'Corey Stuart', 
                occupation: "Unemployed", 
                aboutMe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ut soluta quia, hic repudiandae eligendi alias. Accusamus possimus necessitatibus dolore quidem provident nostrum, deserunt unde numquam voluptas aut quos quo, nihil, sit corporis? Ipsa veritatis consequuntur voluptates debitis."
            },
            {
                id: 3,
                name: 'Kaleb Lewis', 
                occupation: "Server", 
                aboutMe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ut soluta quia, hic repudiandae eligendi alias. Accusamus possimus necessitatibus dolore quidem provident nostrum, deserunt unde numquam voluptas aut quos quo, nihil, sit corporis? Ipsa veritatis consequuntur voluptates debitis."
            }
        ],
        showProfiles: false
        
    }

    nameChangeHandler = (event , id) => {
        const personIndex = this.state.people.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.people[personIndex]
        };

        person.name = event.target.value;

        const people = [...this.state.people];
        people[personIndex] = person;

        this.setState({people: people})
    }

    showProfilesHandler = () => {
        const showProfiles = this.state.showProfiles;

        this.setState({showProfiles: !showProfiles})
    }

    render() {
        let people = null;

        if (this.state.showProfiles){
            people = (
                <div id="profiles">
                    {this.state.people.map((x) => {
                        return (
                            <Profile 
                            name={x.name} 
                            occupation={x.occupation} 
                            aboutMe={x.aboutMe}
                            change={(event) => this.nameChangeHandler(event, x.id)}
                            key={x.id}/>
                        )
                    })}
                </div>
            );
        }
        

        return (
            <div className="App">
                <button onClick={this.showProfilesHandler}>Show Profiles</button><br/>
                
                {people}
            </div>
        );
    }
}

export default App;
