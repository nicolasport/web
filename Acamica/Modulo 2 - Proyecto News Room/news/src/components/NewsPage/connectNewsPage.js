//COMPONENETE CONECTADO REDUX

import {NewPageTemplate} from "./NewPageTemplate"
import { connect } from 'react-redux';
import { getNews } from '../../store/actions';


const mapStateToProps = (state, ownProps) => ({ 
    news: state.repos 
});

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewsList: (categoria, addData) => {
            dispatch(getNews(categoria, addData))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPageTemplate);




