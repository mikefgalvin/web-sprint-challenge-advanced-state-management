import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { getCharacters } from '../actions/index';
import Smurf from './Smurf';

export class SmurfDisplay extends React.Component {

    componentDidMount() {
       this.props.getCharacters();
       console.log('component mounted')
    }
    
    

    render() {
        console.log('se fetch',this.props.isFetching);

        if(this.props.isFetching === true) {
                  return (
                    <h2>FETCHINNNNNGGGGGG</h2>
                  )
                }
        else if(this.props.smurfs.length > 0) {
            return(
            <div>
                {
                    this.props.smurfs.map(smurf => (
                        <Smurf smurf={smurf} key={smurf.id}/>
                    ))
                }
            </div>
            )}
        else return(
            <>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    // we now have access to the WHOLE redux store!
    // you can do any JS stuff here 
    const memberCount = state.smurfs.length;
  return {
    areYouThere: true, // we can add anything to props from right here
    smurfs: state.smurfs,
    memberCount: memberCount,
    isFetching: state.isFetching,
    error: state.error,// we can add something to props from the Redux store
  }
  }


export default connect(mapStateToProps, { getCharacters })(SmurfDisplay); 


//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.