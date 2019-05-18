import React from 'react';
import DescriptionBox from '../../pieces/DescriptionBox/DescriptionBox';
import './about.css';
import '../../../index.css';

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [
        {
          name: 'Preston Evans',
          image: 'Bitfiddle.png',
          description: 'Machine learning and algorithms enthusiast'
        },
        {
          name: 'Brandon Lucas',
          image: 'Bitfiddle.png',
          description: 'Machine learning and algorithms enthusiast'
        },
        {
          name: 'Myles McLeroy',
          image: 'Bitfiddle.png',
          description: 'Machine learning and algorithms enthusiast'
        },
        {
          name: 'Marie Neubrander',
          image: 'Bitfiddle.png',
          description: 'Machine learning and algorithms enthusiast'
        }
      ]
    };
  }
  showPeople() {
    return this.state.people.map(function(person, i) {
      return <DescriptionBox key={i} data={person}/>
    });
  }
  render() {
    return (
      <div>
        <h1 className="title">About Us</h1>
        <div  className="box-container">
          {this.showPeople()}
        </div>
      </div>
    );
  }
}

export default About;
