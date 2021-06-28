//COMPONENETE CONECTADO REDUX

import { HomePage } from "./index"
import { connect } from 'react-redux';
import { getProducts, putRedeemProduct} from '../../../store/actions/products.js';





const mapStateToProps = (state, ownProps) => ({
    productsList: state.productsReducer.productsList,
});

const mapDispatchToProps = { getProducts, putRedeemProduct}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)