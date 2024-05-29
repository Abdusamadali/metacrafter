const b=[1,3,4,5]
const c=b.pop();
const d=b.shift()
b.unshift('happy ');
// console.log('popped element form back '+c);
// console.log(`poopped element from front ${d}`);


//object in js


const cat={
	name:'kitty',
	'legs':4,
	'tails':1,
	'enemies':[
	'water','dogs'
	]
};
//function
const m=3;
function fi(x,y){
	const  m=x;
	const n=y;
	return (`x:${x+3} \ny:${y+3}`);

}
const y=fi(4,5);

console.log(f);
console.log(m);


//loops
let arr=[]
function f(i){
	while(i<=10){
		console.log('added '+i);
		arr.push(i);
		i++
	}
	return console.log(arr);
}
f(0);

//ca
cat.friends='birds';
cat.legs=10;
const prop=cat.name;
const legs=cat.legs;
console.log(legs);
delete cat.name;
console.log(`cat name: ${cat.name}`);