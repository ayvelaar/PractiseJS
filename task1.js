const onMyBirthday = (isKayoSick) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{        if(!isKayoSick){
            resolve(2);
        } else{
            reject(new Error("i am sad"))
        }},2000)

    });
}
console.time("timer");

onMyBirthday(true).then((result)=>{
    console.timeLog("timer")
    console.log(`I have ${result}`)
})
.catch((error)=>{

    console.log(error)
})
.finally(()=>{
    console.log(`party`) 
})