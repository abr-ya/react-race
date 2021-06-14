import {connect} from 'react-redux';
import Main from '../pages/Main';
import {getCars} from '../actions/carActions';

const mapStateToProps = (state: any) => ({
  garage: state.garage,
});

const mapDispatchToProps = {
  getCars,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
