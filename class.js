class movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio =studio;
        this.rating = rating;
    }
    movie_title(){
        return`the movie name is${this.title}`;
    }
    movie_studio(){
        return`the studio name is ${this.studio}`;

    }
    movie_rating(){
        return`the rating is ${this.rating}`;
    }
}
// instance of movie class
let obj = new movie("Casino royal","Eon Productions","PG13");
console.log(obj);
console.log(obj.movie_title());
console.log(obj.movie_studio());
console.log(obj.movie_rating());



class person{
    constructor(name,age,work,nationality){
        this.name = name;
        this.age = age;
        this.work = work;
        this.nationality = nationality;
    }
    person_name(){
        return`the  name is${this.name}`;
    }
    person_age(){
        return`the age is ${this.age}`;

    }
    person_work(){
        return`the work is ${this.work}`;
    }
    person_nationality(){
        return`the nationality is ${this.nationality}`; 
    }
}
// instance of movie class
let obj = new person("shelton","21","Software Developer","Indian" );
console.log(obj.person_name());
console.log(obj.person_age());

console.log(obj.person_work());
console.log(obj.person_nationality());



18/10/21 - classes 

  

  
class Bankaccount { 
    constructor(name,accttype,acctNo,Balance){

    // member variable
      this.name = name;
      this.accttype = accttype;
      this.acctNo = acctNo;
      this.Balance = Balance;
    }
    // member function 
    getbalance(){
        return "your balance is" + this.Balance;
    }
    withdraw(withdrawamt){
        if(withdrawamt<=this.Balance){

        this.Balance = this.Balance-withdrawamt;
        return this.getbalance();

    }else{
      return "insuffient fund your balance is" +" "+ this.Balance;
    }
  }
  deposit(depositamt){
    this.Balance = parseInt(this.Balance) + parseInt(depositamt);
    return  this.getbalance();
  }
}
  const sourav = new Bankaccount("sourav","Savingsacct","234566","25000");
  
  const surya = new Bankaccount("surya","Savingsacct","2487384","10000000");
  
  const lokesh = new Bankaccount("lokesh","currentacct","2457886","10000");
  
  const Asritha = new Bankaccount("Asritha","currentacct","14534566","20000");
  
  
  console.log(sourav.getbalance());
  console.log(lokesh);
  console.log(surya);
  console.log(Asritha);

  console.log(surya.withdraw(2000));
  console.log(surya.getbalance());
  console.log(surya.withdraw(100000000));

console.log(lokesh.deposit(5000));



const scores = [
  {
    marks: 32,
    name: "Yvette Merritt"
  },
  {
    marks: 57,
    name: "Lillian Ellis"
  },
  {
    marks: 22,
    name: "Mccall Carter"
  },
  {
    marks: 21,
    name: "Pate Collier"
  },
  {
    marks: 91,
    name: "Debra Beard"
  },
  {
    marks: 75,
    name: "Nettie Hancock"
  },
  {
    marks: 20,
    name: "Hatfield Hodge"
  }
];

const getname = (names)=> name;

console.log(scores.map(getname));
  
