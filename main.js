// //  const makeRequest = (method,url)=>{
// //       const xhr = new XMLHttpRequest();
// //       xhr.open(method,url);

// //       xhr.onload=()=>{
// //             let data = xhr.response;
// //             console.log(JSON.parse(data))
// //       }

// //       xhr.onerror=()=>{
// //             console.log('eroor is here')
// //       }

// //       xhr.send()

// //  }

// const makeRequest1=(method,url,data)=>{
//       const xhr = new XMLHttpRequest();

//       xhr.open(method,url);

//       xhr.setRequestHeader('Content-type','application/json')

//       xhr.onload=()=>{
//             let data = xhr.response;
//             console.log(JSON.parse(data))
//       }

//       xhr.onerror=()=>{
//             console.log('error take place here')
//       }

//       xhr.send(JSON.stringify(data));

// }

//  const getData = ()=>{
//        makeRequest1('GET','https://jsonplaceholder.typicode.com/posts/')

//   }
//  const sendData= ()=>{
//        makeRequest1('POST','https://jsonplaceholder.typicode.com/posts/',{
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//        })

//   }
//  const UpdateData= ()=>{
//        makeRequest1('PUT','https://jsonplaceholder.typicode.com/posts/1',{
//             id: 1,
//            title: 'fooma',
//            body: 'barma',
//            userId: 1,
//        })

//   }
//  const UpdatesingleData= ()=>{
//        makeRequest1('PATCH','https://jsonplaceholder.typicode.com/posts/1',{

//            title: 'THis is change Data',

//        })

//   }
// //  const DeleteData= ()=>{
// //        makeRequest1('DELETE','https://jsonplaceholder.typicode.com/posts/1')

// //   }
//   UpdatesingleData()

fetch("https://jsonplaceholder.typicode.com/posts/")
  .then((res) =>{
        if(!res.ok){
              const message=` " there is a mistakes "${res.status}`
               console.log(message)
        }
        return res.json()
  })
  .then((res) =>console.log(res));
