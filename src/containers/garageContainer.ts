import {connect} from 'react-redux';
import Main from '../pages/Main';
import {getCars, getCarStatus} from '../actions/carActions';

const mapStateToProps = (state: any) => ({
  garage: state.garage,
});

const mapDispatchToProps = {
  getCars,
  getCarStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
