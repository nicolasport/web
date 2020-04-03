class Comanda extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            pedido : '',
            show : 'false'
        }

        this.actualizar = this.actualizar.bind(this)
    }

    actualizar(event){
        this.setState({
            pedido : event.target.value
        })
    }


    render(){
        return(
            <div>
                <input type='text' onChange={this.actualizar} value={this.state.pedido} />
                <h1>{this.state.pedido}</h1>
            </div>
        )

    }
}




ReactDOM.render(
    <Comanda/>, 
    document.getElementById("app")
  );