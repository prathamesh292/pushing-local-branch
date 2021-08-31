class Util {
    greeter() {
        return 'Hello ' + this.name;
    }
    setName(name) {
        this.name = name;
    }
}

const util = new Util();
util.setName('Ramesh');
const greetString = util.greeter();
console.log(greetString);