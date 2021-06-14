import {connect} from 'react-redux';
import App from '../components/App/App';
import {showAlert, hideAlert} from '../actions/alertActions';

const mapStateToProps = (state: any) => ({
  alert: state.alert,
  github: state.github,
});

const mapDispatchToProps = {
  showAlert,
  hideAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
