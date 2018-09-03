import { connect } from 'react-redux';
import MainForm from '../components/MainForm';
import { postDummyData } from '../actions';

const mapStateToProps = state => ({
  car: state.car,
});

export default connect(mapStateToProps, { postDummyData })(MainForm);
