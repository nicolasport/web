class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filters: {
        dateFrom: today, // Proviene del archivo data.js
        dateTo: new Date(today.valueOf() + 29999999999),
        country: '',
        price: 0,
        rooms: 0
      },
      hotels : hotelsData,
      cantResultados : 0
    }

    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.ApplyFiltersToData = this.ApplyFiltersToData.bind(this)

  }

  handleFilterChange(payload) {
    this.setState({
      filters : payload
    })
  }

  ApplyFiltersToData(data){
    //Filter dateFrom
    let filteredList = []

    {data.map((hotel)=> { if( new Date(hotel.availabilityFrom) >= this.state.filters.dateFrom){
      filteredList.push(hotel)} })}

    //Filter DateTo
    data = filteredList
    filteredList = []
    {data.map((hotel)=> { if( new Date(hotel.availabilityTo) <= this.state.filters.dateTo){
      filteredList.push(hotel)} })}
  
    //Filter Price
    data = filteredList
    filteredList = []
    if(this.state.filters.price != 0){
      {data.map((hotel)=> { if( hotel.price == this.state.filters.price){
        filteredList.push(hotel)} })}
    }else{filteredList = data}

    //Filter Country
    data = filteredList
    filteredList = []
    if(this.state.filters.country!=''){  
      {data.map((hotel)=> { if( hotel.country === this.state.filters.country ){
        filteredList.push(hotel)} })}
    }else{filteredList = data}

    //Filter Rooms
    data = filteredList
    filteredList = []
    if(this.state.filters.rooms!=0){
      { data.map((hotel)=> {
        if (this.state.filters.rooms == 30){
          if(hotel.rooms > this.state.filters.rooms - 10){
            filteredList.push(hotel)}

        }else{
          if(hotel.rooms >= this.state.filters.rooms - 10 && hotel.rooms <= this.state.filters.rooms){
            filteredList.push(hotel)}
        }
         })}
    }else{
      filteredList = data
    }

    
    this.state.filters.cantResultados = filteredList.length;

    return filteredList
  }

  render() {
    return (
      <div>
        <Hero filters={ this.state.filters } />
        <Filters  onFilterChange={ this.handleFilterChange } filters={ this.state.filters } />
        <Hotels  data={ this.ApplyFiltersToData(this.state.hotels) } />
      </div>
    );
  }
}

class Hero extends React.Component {
  render() {
    let dateFromT = this.props.filters.dateFrom.toLocaleDateString()
    let dateToT = this.props.filters.dateTo.toLocaleDateString()

    let countryT = ""
    if (this.props.filters.country != 0 ) {
      countryT="en "+this.props.filters.country
    }

    let priceT = ''
    if (this.props.filters.price != 0){
      [[1,"$"],[2,"$$"],[3,"$"],[4,"$$$$"]].map(num => {
        if(this.props.filters.price == num[0]){ priceT = "por  " + num[1].toString()} 
      })
    }
    let roomsT= ''
    if (this.props.filters.rooms != 0){
      if (this.props.filters.rooms == 30){
        roomsT = "con mas de " + (this.props.filters.rooms -10).toString() + " habitaciones"
      }else{
        roomsT = "de hasta  " + this.props.filters.rooms.toString() + " habitaciones"
      }
    }
    

    return (
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Hoteles</h1>
            <h2 className="subtitle">
              desde el <strong>{dateFromT}</strong> hasta el <strong>{dateToT}</strong> {countryT} {priceT} {roomsT}
              {/* {this.props.filters.cantResultados != 0 ? (<div><strong>cantResultados:</strong> {this.props.filters.cantResultados} <br/> </div>):""} */}
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

class DateFilter extends React.Component {
  constructor(props) {
    super(props)

    this.dateConversion = this.dateConversion.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
  }

  handleDateChange(event) {
    this.props.onDateChange(event)   
  }

  dateConversion(dateToConvert){
    //date to Convert is DD-MM-YYYY need be YYYY-MM-DD
    let [day, month, year] = (dateToConvert.toLocaleDateString().split("/"))    
    day = day.toString().padStart(2, "0")
    month = month.padStart(2, "0")
    year = year.padStart(4, "0")

    let date = [year, month, day].join('-')

    return date
  }

  render() {
      return (
        <div className="field">
          <div className="control has-icons-left">
            <input className="input" type="date" onChange={this.handleDateChange} name={ this.props.name } value={this.dateConversion(this.props.date)}/>
            <span className="icon is-small is-left"> 
              <i className={'fas fa-' + this.props.icon}></i>
            </span>
          </div>
        </div>
      );
  }
}

class OptionsFilter extends React.Component {
  constructor(params) {
    super(params)
    this.handleOptionChange = this.handleOptionChange.bind(this)
  }

  handleOptionChange(event) {  
    this.props.OnOptionChange(event)
  }

  render() {
    return (
      <div className="field">
        <div className="control has-icons-left">
          <div className="select" style={ {width: '100%'} }>
            <select value={this.props.select} name={ this.props.name } onChange={this.handleOptionChange} style={ {width: '100%'} }>
              {this.props.options.map((option, key) =>
                <option  key={key+"-"+option.value} value={option.value} >{option.name}</option>
              )}
            </select>
          </div>
          <div className="icon is-small is-left">
            <i className={"fas fa-" + this.props.icon}></i>
          </div>
        </div>
      </div>
    );
  }
}

class Filters extends React.Component {
  constructor(params) {
    super(params)

    this.handleDataChange = this.handleDataChange.bind(this)
    this.handleOptionChange = this.handleOptionChange.bind(this)
  }

  dateConvert(textData){
    let [year, month, day] = textData.split("-")
    year = parseInt(year) 
    month = (parseInt(month-1))
    day = (parseInt(day))
    let data = new Date(year, month, day)

    return data
  }

  handleDataChange(event) {
    if(event.target.value.length >= 8){
      let dataType = this.dateConvert(event.target.value)
      let payload = this.props.filters
      payload[event.target.name] = dataType
      this.props.onFilterChange(payload)
    }
  }

  handleOptionChange(event){    
    let payload = this.props.filters
    payload[event.target.name] = event.target.value
    this.props.onFilterChange(payload)
  }

  render() {
    return (
      <nav className="navbar is-info" style={ {justifyContent: 'center'} }>
        <div className="navbar-item">
          <DateFilter
            name="dateFrom"
            onDateChange={this.handleDataChange}
            date={ this.props.filters.dateFrom}
            icon="sign-in-alt" />
        </div>
        <div className="navbar-item">
          <DateFilter
            name="dateTo"
            onDateChange={this.handleDataChange}
            date={ this.props.filters.dateTo }
            icon="sign-out-alt" />
        </div>
        <div className="navbar-item">
          <OptionsFilter
            name="country"
            OnOptionChange={this.handleOptionChange}
            options={ [ {value: '', name: 'Todos los países'}, {value: 'Argentina', name: 'Argentina'}, {value: 'Brasil', name: 'Brasil'}, {value: 'Chile', name: 'Chile'}, {value: 'Uruguay', name: 'Uruguay'} ] }
            selected={ this.props.filters.country }
            icon="globe" />
        </div>
        <div className="navbar-item">
          <OptionsFilter
            name="price"
            OnOptionChange={this.handleOptionChange}
            options={ [ {value: '', name: 'Cualquier precio'}, {value: 1, name: '$'}, {value: 2, name: '$$'}, {value: 3, name: '$$$'}, {value: 4, name: '$$$$'} ] }
            selected={ this.props.filters.price }
            icon="dollar-sign" />
        </div>
        <div className="navbar-item">
          <OptionsFilter
            name="rooms"
            OnOptionChange={this.handleOptionChange}
            options={ [ {value: '', name: 'Cualquier tamaño'}, {value: 10, name: 'Hotel pequeño'}, {value: 20, name: 'Hotel mediano'}, {value: 30, name: 'Hotel grande'} ] }
            selected={ this.props.filters.rooms }
            icon="bed" />
        </div>
      </nav>
    );
  }
}

class Hotel extends React.Component {
  constructor(params) {
    super(params)

    this.state={
      items: []
    }
  }

  render() {
      let priceSimbolOk= [<i key={1} className="fas fa-dollar-sign" style={{margin: '0 .125em', opacity: '1'}}></i>]
      let PriceSimbolNotOk= [<i key={1} className="fas fa-dollar-sign" style={{margin: '0 .125em', opacity: '.25'}}></i>]

      return (
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={this.props.data.photo} alt="Sainte Jeanne Boutique & Spa" />
            </figure>
          </div>
          <div className="card-content">
            <p className="title is-4">{this.props.data.name}</p>
            <p>{this.props.data.description}</p>
            <div className="field is-grouped is-grouped-multiline" style={{marginTop: '1em'}}>
              <div className="control">
                <div className="tags has-addons">
                  <span className="tag is-medium is-info"><i className="fas fa-map-marker"></i></span>
                  <span className="tag is-medium">{this.props.data.city}, {this.props.data.country}</span>
                </div>
              </div>
              <div className="control">
                <div className="tags has-addons">
                  <span className="tag is-medium is-info"><i className="fas fa-bed"></i></span>
                  <span className="tag is-medium">{this.props.data.rooms} Habitaciones</span>
                </div>
              </div>
              <div className="control">
                <div className="tags">
                  <span className="tag is-medium is-info">
                    {this.props.data.price >= 1 ? (priceSimbolOk):(PriceSimbolNotOk)}
                    {this.props.data.price >= 2 ? (priceSimbolOk):(PriceSimbolNotOk)}
                    {this.props.data.price >= 3 ? (priceSimbolOk):(PriceSimbolNotOk)}
                    {this.props.data.price == 4 ? (priceSimbolOk):(PriceSimbolNotOk)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button onClick={() => alert("Funcion no disponible")} className="card-footer-item has-background-primary has-text-white has-text-weight-bold">Reservar</button>
          </div>
        </div>
      );jh  
    

  }
}

class Hotels extends React.Component {
  render() {
    return (
      <section className="section" style={ {marginTop: '3em'} }>
        <div className="container">
          <div className="columns is-multiline">
              {this.props.data.map((hotel, key) =>
                <div key={key+"-"+hotel.slug} className="column is-one-third">
                  <Hotel data={ hotel } />
                </div>
              )}
          </div>
        </div>
      </section>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'))
