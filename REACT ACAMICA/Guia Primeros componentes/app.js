function App() {
    const filters = {
        dateFrom: today, //Proviene del archivo data.js
        dateTo: new Date(today.valueOf() + 86400000),
        country: '',
        price: 0,
        rooms: 0
    }

    return (
      <div>
          <Hero filters={filters}/>
      </div>
    )
  }
  
  ReactDOM.render(<App />, document.getElementById('app'))