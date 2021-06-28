//COMPONENETE CONECTADO REDUX

import { PrimarySearchAppBar } from "./IndexTemplate"
import { connect } from 'react-redux';
import { getUserInfo } from '../../../store/actions/user';
import { addCoins } from "../../../store/actions/user";




const mapStateToProps = (state, ownProps) => ({
    userInfo: state.userReducer.userInfo
});

const mapDispatchToProps = { getUserInfo, addCoins }

export default connect(mapStateToProps, mapDispatchToProps)(PrimarySearchAppBar)