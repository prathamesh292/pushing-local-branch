class Util {
    greeter() {
        return 'Hello How are you? ' + this.name;
    }
    setName(name) {
        this.name = name;
    }
}

const util = new Util();
util.setName('Ramesh');
const greetString = util.greeter();
console.log(greetString);
//added some changes