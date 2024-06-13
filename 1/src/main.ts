function sum(startNumber:number,endNumber:number){
    let all:string = ''
    
    for(let currentNumb:number= startNumber; currentNumb<=endNumber;currentNumb++){
        if(currentNumb == endNumber){
            all += currentNumb
            
        }
        else{
            all += currentNumb + " " 
        }
        
    }
    let totalSum:number = 0;
    for (let i = startNumber; i <= endNumber; i++) {
        totalSum += i;
    }
    console.log(all)
    console.log(`Sum: ${totalSum}`)
}
sum(5,10)