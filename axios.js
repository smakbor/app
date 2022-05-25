// axios.get("https://jsonplaceholder.typicode.com/posts")
// .then((res) => console.log(res.data))
// .catch((err)=>console.log(err))





const makeRequest=(config)=>{
    return axios(config)
}

// const getData=()=>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts')
//     .then((res)=>console.log(res.data))
//     .catch((err)=> console.log(err))
// }

// getData()

const createData=()=>{
    makeRequest({
        url:'https://jsonplaceholder.typicode.com/posts/',
        method:'POST',
        data: JSON.stringify({
            title: 'fooma',
            body: 'barma',
            userId: 1,
          })
    })
    .then((res)=>console.log(res.data))
    .catch((err)=> console.log(err))
}

createData()

