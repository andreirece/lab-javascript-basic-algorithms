// Iteration 1: Names and Input
let hacker1 = "Joao";
console.log (`The driver's name is ${hacker1}`);

let hacker2 = "Andre";
console.log (`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length){
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
console.log (`${hacker1[0].toUpperCase()} ${hacker1[1].toUpperCase()} ${hacker1[2].toUpperCase()} ${hacker1[3].toUpperCase()}`)

console.log (`${hacker1[3]}${hacker1[2]}${hacker1[1]}${hacker1[0]}`)


  if (hacker1<hacker2) {
        console.log (`The driver's name goes first.`)
    } else if (hacker1>hacker2) {
        console.log (`Yo, the navigator goes first definitely.`)
    } else {
        console.log (`What?! You both have the same name?`)
    }
//Quando coloco o nome com maiúscula ou minúscula tem diferença no resultado.


//Bônus 01
let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a purus urna. Aenean et vehicula enim. Aenean aliquam lobortis lobortis. Nunc non congue purus, quis tincidunt eros. Mauris consequat arcu dui. Duis placerat tellus quis suscipit viverra. Praesent vitae ligula odio. Vivamus rhoncus sem felis, non tristique elit semper vitae. Vestibulum dignissim porttitor justo quis varius. Fusce tristique dictum nibh, nec dignissim nisl aliquet sed. In dapibus finibus velit, sed vehicula neque ornare at. Aliquam erat volutpat. Morbi sagittis, nulla ut faucibus aliquam, tortor ante gravida libero, ullamcorper mollis tortor nibh at metus. Vestibulum euismod eu velit nec tempus. Aliquam in nunc fermentum, pretium neque non, posuere elit. In quis nulla a lacus sagittis faucibus. Suspendisse quis erat sollicitudin, placerat arcu in, ultrices mauris. Pellentesque interdum faucibus neque, eget viverra elit. Proin et mi vel ex venenatis congue eget accumsan metus. Morbi neque lacus, fringilla nec blandit sollicitudin, faucibus at orci. Pellentesque vel tempor nisi. Vivamus imperdiet quis odio vitae porttitor. Nam mollis gravida ex, vitae condimentum nisl accumsan id. Mauris ut mauris auctor, gravida nunc nec, viverra neque. Pellentesque fermentum, purus in consequat aliquet, mi nibh ullamcorper tellus, maximus placerat neque justo non sapien. Integer non semper turpis, et fringilla tellus. Ut sodales vulputate sapien. Suspendisse ut diam in leo commodo imperdiet. Suspendisse elementum justo eget ante pharetra, at hendrerit purus porttitor. Proin sodales lectus sed pretium gravida. In cursus interdum dolor sit amet pretium. Quisque quis orci quis sem semper consequat. In sollicitudin mi vehicula urna viverra, ac dignissim felis molestie. Nunc id purus ac felis pretium convallis. Nam sed cursus massa. Nulla vehicula iaculis augue, eget placerat leo porttitor quis."

let cont = text.split(` `)
console.log (cont.length)

let quantEt = 0
for (let i = 0; i <cont.length; i++){
    if (cont[i] === "et"){
    quantEt++
    }
}
console.log (quantEt)
