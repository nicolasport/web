class Tenedor extends React.Component {
    render(){
        return <h1>Esto es un tenedor</h1>
    }
}

class Cuchillo extends React.Component {
    render(){
        return <h1>Esto es un chuchillo</h1>
    }
}

class Servilleta extends React.Component {
    render(){
        return <div>{this.props.children}</div>
    }
}

class Cubiertos extends React.Component{
    render(){
        return(
            <Servilleta>
                <Tenedor/>
                <Cuchillo/>
            </Servilleta>
        )
    }
}


ReactDOM.render(
    <Cubiertos/>, 
    document.getElementById("app")
  );