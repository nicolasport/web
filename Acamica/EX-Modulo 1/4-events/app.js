class Copa extends React.Component {
    constructor(props){
        super(props)
    
        this.state = {
            llena : false
        }
        this.tomar = this.tomar.bind(this)
        this.llenar = this.llenar.bind(this)
    }

    tomar(){
        this.state ={
            llena : false
        }
    }

    llenar(){
        this.state ={
            llena : true
        }
    }
    
    render(){
        return <h1>La Copa {this.state.llena ? 'tiene':'tenia'} {this.props.contenido}</h1>
    }
}


ReactDOM.render(
    <Copa contenido="vino"/>, 
    document.getElementById("app")
  );