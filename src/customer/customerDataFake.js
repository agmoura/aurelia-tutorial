let latency = 3000;
let id = 0;

function getId(){
  return ++id;
}

// let customers = [
//   {
//     id:getId(),
//     firstName:'John',
//     lastName:'Tolkien',
//     email:'tolkien@inklings.com',
//     phoneNumber:'867-5309'
//   },
//   {
//     id:getId(),
//     firstName:'Clive',
//     lastName:'Lewis',
//     email:'lewis@inklings.com',
//     phoneNumber:'867-5309'
//   },
//   {
//     id:getId(),
//     firstName:'Owen',
//     lastName:'Barfield',
//     email:'barfield@inklings.com',
//     phoneNumber:'867-5309'
//   },
//   {
//     id:getId(),
//     firstName:'Charles',
//     lastName:'Williams',
//     email:'williams@inklings.com',
//     phoneNumber:'867-5309'
//   },
//   {
//     id:getId(),
//     firstName:'Roger',
//     lastName:'Green',
//     email:'green@inklings.com',
//     phoneNumber:'867-5309'
//   }
// ];

export class CustomerData {
  
  constructor(){
    
    this.customers = [];
    
    for(var i = 0; i < 1000; i++) {
      this.customers.push({
          id: i,
          firstName: "Name " + i,
          lastName: "Last " + i,
          email: `email${i}@email.com`,
          phoneNumber: "Phone" + i
      });
    }
  }
  
  getAll(){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let results = this.customers.map(x =>  { return {
          id:x.id,
          firstName:x.firstName,
          lastName:x.lastName,
          email:x.email
        }});
        resolve(results);
        this.isRequesting = false;
      }, latency);
    });
  }

  getById(id){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let found = this.customers.filter(x => x.id == id)[0];
        resolve(JSON.parse(JSON.stringify(found)));
        this.isRequesting = false;
      }, latency);
    });
  }

  save(customer){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let instance = JSON.parse(JSON.stringify(customer));
        let found = this.customers.filter(x => x.id == customer.id)[0];

        if(found){
          let index = this.customers.indexOf(found);
          this.customers[index] = instance;
        }else{
          instance.id = getId();
          this.customers.push(instance);
        }

        this.isRequesting = false;
        resolve(instance);
      }, latency);
    });
  }
}