// --------HomeWork 29\6\22 Omri Rajuan--------
function randomNumBetween(min:number, max:number):number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

 const makeFirstLetterCapital = (string:string) => {
    const term = string.toLowerCase().trim();
    return term.charAt(0).toUpperCase() + term.slice(1);
  };

interface address {
    state:string;
    country:string;
    city:string;
    street:string;
    houseNumber:number;
    zip:string;
}
interface nameFL {
    first:string;
    last:string;
}
interface user {
    name:nameFL;
    address:address;
    phone:string;
    email:string;
    password:string;
    isBusiness:boolean;
    isAdmin:boolean;
}
class User {
    private id:number;
    private name:string;
    public address:address;
    private phone:string;
    private email:string;
    private password:string;
    private createdAt:Date;
    private isAdmin:boolean = false;
    private isBusiness:boolean = false;
  
    constructor(user:user) {
   
      this.address = user.address;
      this.id = this.generateId();
      this.name = this.setName(user.name.first, user.name.last);
      this.phone = this.checkPhone(user.phone);
      this.email = this.checkEmail(user.email);
      this.password = this.checkPassword(user.password);
      this.isBusiness = user.isBusiness;
      this.isAdmin = user.isAdmin;
      this.createdAt = new Date();
    }
  
    generateId():number {
        const random = Math.floor(
            Math.random() * (9_000_000 - 1_000_000 +1)+1_000_000
        )
        return random
    }
    setName(first:string, last:string):string {
      const firstName = makeFirstLetterCapital(first);
      const lastName = makeFirstLetterCapital(last);
      return `${firstName} ${lastName}`;
    }
  
    changeBusinessStatus(user:user):void|null {
      if (!user.isAdmin) return null;
      this.isBusiness = !this.isBusiness;
    }
  
    checkPhone(phoneNumber:string):string {
      if (
        phoneNumber.match(/^0[0-9]{1,2}(\-?|\s?)[0-9]{3}(\-?|\s?)[0-9]{4}/g) ===
        null
      ) {
        throw new Error("Please enter a valid phone number!");
      }
      return phoneNumber;
    }
  
    checkPassword(password:string):string {
      if (
        password.match(
          /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/g
        ) === null
      )
        throw new Error(
          "The password must contain at least one uppercase letter in English. One lowercase letter in English. Four numbers and one of the following special characters !@#$%^&*-"
        );
      return password;
    }

    checkEmail(email:string):string {
      if (email.match(/.+@.+\..{2,}/g) === null) {
        throw new Error("Please enter a standard email");
      }
      return email;
    }


    get _id() {
      return this.id;
    }
  
    get _name() {
      return this.name;
    }
  
    get _email() {
      return this.email;
    }
  
    get _password() {
      return this.password;
    }
  
    get _createdAt() {
      return this.createdAt;
    }
  
    get _isAdmin() {
      return this.isAdmin;
    }
  
    get _isBusiness() {
      return this.isBusiness;
    }
    get _phone() {
      return this.phone;
    }

  }

  const user = new User(
{
  name:{first:"omri",last:"rajuan"},
  address:{
  state: "USA",
  country: "big",
  city: "New York",
  street: "52",
  houseNumber: 109,
  zip: "562145",
                },
  phone: "050-0000000",
  email: "user@gmail.com",
  password: "Aa1234!",
  isBusiness: false,
  isAdmin: true,
            }
  )

  console.log(user);
  