export class Welcome{

  heading = 'Teste do Aurelia!';
  firstName = 'Alessandro';
  lastName = 'Moura';
    
  get fullName(){
    return this.firstName + " " +  this.lastName;
  }

  submit(){
    alert(`Welcome, ${this.fullName}!`);
  }
}