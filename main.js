let friends = [


{
    name:"John", color:"blue", flower:"roses"
},
{
    name:"Jennie", color:"red", flower:"tulips"
},
{
    name:"Jason", color:"yellow", flower:"daisies"
},
{
    name:"Jack", color:"orange", flower:"sunflowers"
}

]

//console.log(friends);


//for every friend, console log the string
//'Heyaa XXXX, I saw a bunch of XXXX. Too bad they were not XXXX"


/*function work(element,idx) {
    console.log(`Heyaaa ${element.name}, I saw a bunc of ${element.flower}. Too bad
    they were not ${element.color}`)
}*/


//friends.forEach(work);

let frd = ["Jack","James","Mark","Bob","Matt","Andrew","French","Kris"];

let fourLetterFriends = frd.filter(function(element, index){
    if(element.length == 4){
        return true;
    } else {
        return false;
    }
})

//console.log(fourLetterFriends);

/*let fourLetterFriends = frd.filter(function(element,index){
    if(element.length == 4){
        return true;
    } else {
        return false;
    });
*/



let friends1 = [


    {
        name:"John", color:"blue", flower:"roses", nice: false
    },
    {
        name:"Jennie", color:"red", flower:"tulips", nice: true
    },
    {
        name:"Jason", color:"yellow", flower:"daisies", nice: false
    },
    {
        name:"Jack", color:"orange", flower:"sunflowers", nice: true
    }
]
    
console.log(friends1);

//nice friends
let niceFriends = friends1.filter(function(element,index){
    if(element.nice == true) {
        return true;
    } else {
        return false;
    }
})

console.log(niceFriends);

//convert to part invite message

// let partyMessage = niceFriends.forEach(function(element,index){
//  `Hi ${element.name}, come on over tomorrow for some food`;
// })

// console.log(partyMessage);

let message = niceFriends.map(function(element,index){
    return "hi " + element.name + " come on over tomorrow for some good food"
})

console.log(message);

let sendMessage = message.forEach(function(element,index){
    console.log("sending message to", element)
})

console.log(sendMessage);