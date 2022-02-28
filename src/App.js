import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import profile from './assets/profile.jpg';

/* class RegularClass { }
class ComponentClass extends Component { }

const regularClassInstance = new RegularClass();
const componentClassInstance = new ComponentClass();

console.log('regularClassInstance', regularClassInstance);
console.log('componentClassInstance', componentClassInstance); */

class App extends Component {
    state = { displayBio: false };
    /* constructor() {
        super();
        this.state = { displayBio: false };

        console.log('Component this', this);

        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    } */
    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }
    render() {
        return (
            <div>
                <img src={profile} alt='profile' className="profile" />
                <h1>Hello!</h1>
                <p>I am Abhinaba. I am a Front-End Developer.</p>
                <p>I try to make innovative & meaningful projects.</p>
                {this.state.displayBio ? (
                    <div>
                        <p>I live in Kolkata, India.</p>
                        <p>My favourite language is JavaScript.</p>
                        <p>Besides coding, I love playing video games!</p>
                        <button onClick={this.toggleDisplayBio}>Show less</button>
                    </div>
                ) : (
                    <div>
                        <button onClick={this.toggleDisplayBio}>Read more</button>
                    </div>
                )}
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;