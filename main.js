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


function work(element,idx) {
    console.log(`Heyaaa ${element.name}, I saw a bunc of ${element.flower}. Too bad
    they were not ${element.color}`)
}


friends.forEach(work);