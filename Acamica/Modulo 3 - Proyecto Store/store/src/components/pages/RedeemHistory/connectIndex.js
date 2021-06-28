//COMPONENETE CONECTADO REDUX

import { RedeemHistory } from "./index"
import { connect } from 'react-redux';
import { getUserRedeemHistory } from '../../../store/actions/user.js';



const mapStateToProps = (state, ownProps) => ({
    userReedeemHistyory: state.userReducer.redeemHistory
});

const mapDispatchToProps = { getUserRedeemHistory }

export default connect(mapStateToProps, mapDispatchToProps)(RedeemHistory)