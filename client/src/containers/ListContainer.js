import { connect } from 'react-redux';
import MainList from '../components/MainList';
import { receiveDummyData } from '../actions';

const mapStateToProps = state => ({
  car: state.car,
});

export default connect(mapStateToProps, { receiveDummyData })(MainList);
