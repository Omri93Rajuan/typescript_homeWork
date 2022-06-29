"use strict";
function randomNumBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const makeFirstLetterCapital = (string) => {
    const term = string.toLowerCase().trim();
    return term.charAt(0).toUpperCase() + term.slice(1);
};
class User {
    id;
    name;
    address;
    phone;
    email;
    password;
    createdAt;
    isAdmin = false;
    isBusiness = false;
    constructor(user) {
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
    generateId() {
        const random = Math.floor(Math.random() * (9_000_000 - 1_000_000 + 1) + 1_000_000);
        return random;
    }
    setName(first, last) {
        const firstName = makeFirstLetterCapital(first);
        const lastName = makeFirstLetterCapital(last);
        return `${firstName} ${lastName}`;
    }
    changeBusinessStatus(user) {
        if (!user.isAdmin)
            return null;
        this.isBusiness = !this.isBusiness;
    }
    checkPhone(phoneNumber) {
        if (phoneNumber.match(/^0[0-9]{1,2}(\-?|\s?)[0-9]{3}(\-?|\s?)[0-9]{4}/g) ===
            null) {
            throw new Error("Please enter a valid phone number!");
        }
        return phoneNumber;
    }
    checkPassword(password) {
        if (password.match(/((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/g) === null)
            throw new Error("The password must contain at least one uppercase letter in English. One lowercase letter in English. Four numbers and one of the following special characters !@#$%^&*-");
        return password;
    }
    checkEmail(email) {
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
const user = new User({
    name: { first: "omri", last: "rajuan" },
    address: {
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
});
console.log(user);
