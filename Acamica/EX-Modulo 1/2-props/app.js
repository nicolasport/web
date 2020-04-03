class Copa extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return <h1>La Copa de: {this.props.contenido}</h1>
    }
}


ReactDOM.render(
    <Copa contenido="vino"/>, 
    document.getElementById("app")
  );