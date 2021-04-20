import React, { Component } from 'react';
import { connect } from 'react-redux';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    render() {
        return (
            <div>
                <AddPerson personAdded={this.props.onPersonAdded} />
                {this.props.ps.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.onPersonDeleted(person.id)} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ps: state.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPersonAdded: (name, age) => dispatch({ type: 'PERSON_ADDED', name: name, age: age }),
        onPersonDeleted: (id) => dispatch({ type: 'PERSON_DELETED', value: id})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);