const max = 1000;
const iterable = new Array(max).fill(Math.floor(Math.random() * Math.floor(100)));

function runFor() {
    let copy = []
    for (let i = 0; i < iterable.length; i++) {
        copy.push(iterable[i])
    }
    return copy
}

function runForEach() {
    let copy = []
    iterable.forEach(element => {
        copy.push(element);
    })
    return copy
}

function runMap() {
    let copy = []
    copy = iterable.map(x => x);
    return copy
}

function runForOf() {
    let copy = []
    for (let value of iterable){
        copy.push(value);
    }
    return copy
}

let funcionsArray = [
    runForEach,
    runForOf,
    runFor,
    runMap
    ]

let startTime = 0
let endTime = 0
let totalTime = 0
let results = new Array()

funcionsArray.forEach(element => {
    startTime = performance.now()
    console.time(element.name)
    console.log(element())
    console.timeEnd(element.name)
    endTime = performance.now()
    
    totalTime = (endTime - startTime).toFixed(2)
    results.push([element.name, totalTime])

})

let items = new Array()
for (const [index, value] of results.entries()) {
    items.push(<li key={index}> {value.toString().replace(",", " : ") }</li> )
}


ReactDOM.render(
    <p>{items}</p>, 
    document.getElementById("app")
);