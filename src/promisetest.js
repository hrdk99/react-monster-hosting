const isSuccess = true;
let myPromise = new Promise((resolve,reject)=>{
    if(isSuccess)
    {
        resolve('Successful');
    }
    else{
        reject({message:'Unsuccessful',code:500});
    }
});

myPromise.then((response)=> console.log(response))
.catch((error)=> {
    console.log("error Code - "+ error.code);
    console.log("error Message - "+ error.message);
});