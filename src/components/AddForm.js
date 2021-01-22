import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { postCharacters } from '../actions/index';

class AddForm extends React.Component {
    state = {
        name: '',
        position: '',
        nickname: '',
        description: '',
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        const item = {
            name: this.state.name,
            position: this.state.position,
            nickname: this.state.nickname,
            description: this.state.description,
            id: Date.now(),
        }
        this.props.postCharacters(item);
        this.setState({
            name: '',
            position: '',
            nickname: '',
            description: '',
        })
    }

    render() {
        if(this.props.error === 'Wrrronnggggggg') {
            return (
                <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: </div>
            )
        }
        else 
        return(<section>
            <h2>Add Smurf</h2>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label><br/>
                    <input onChange={this.handleChange} name="name" id="name" value={this.state.name}  />
                    <label htmlFor="position">Position:</label><br/>
                    <input onChange={this.handleChange} name="position" id="position"  value={this.state.position}/>
                    <label htmlFor="nickname">Nickname:</label><br/>
                    <input onChange={this.handleChange} name="nickname" id="nickname" value={this.state.nickname} />
                    <label htmlFor="description">Description:</label><br/>
                    <input onChange={this.handleChange} name="description" id="description" value={this.state.description}/>
                </div>
                <button>Submit Smurf</button>
            </form>
        </section>);
    }
}
const mapStateToProps = (state) => {
    // we now have access to the WHOLE redux store!
    // you can do any JS stuff here
  return {
    areYouThere: true, 
    error: state.error,
  }
  }
export default connect(mapStateToProps, { postCharacters })(AddForm); 

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary. uh huh