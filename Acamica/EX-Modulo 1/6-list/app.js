class Lugar extends React.Component {
    render(){
        return (
            <h1>Aca come {this.props.persona}</h1>
        )
    }
}

class Mesa extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            comensales: [
                {nombre: 'Alejandra'},
                {nombre: 'Paula'},
                {nombre: 'Franco'},
                {nombre: 'Jorge'}
            ]
        };
    }

    render(){
        return(
            this.state.comensales.map((comensal) => 
                <Lugar persona={comensal.nombre}/> 
            )
        )
    }
}


ReactDOM.render(
    <Mesa/>, 
    document.getElementById("app")
  );