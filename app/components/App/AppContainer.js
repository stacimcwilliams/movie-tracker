import { connect } from 'react-redux';
import * as actions from '../../actions'
import App from './App';

const mapStateToProps = state =>  {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    // getFilms: (films) => {
    //   dispatch(actions.getFilms(films))
    // },
    fetchFilms: () => {
      dispatch(actions.fetchFilms())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)