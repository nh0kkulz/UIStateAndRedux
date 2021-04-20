const initialState = {
    persons: []
}

const reducers = (state = initialState, action) => {
    switch(action.type) {
        case 'PERSON_ADDED':
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.name,
                age: action.age
            }
            return {
                ...state,
                persons: state.persons.concat(newPerson)
            }
        case 'PERSON_DELETED':
            return {
                ...state,
                persons: state.persons.filter(person => person.id !== action.value)
            }
    }
    return state;
}

export default reducers;