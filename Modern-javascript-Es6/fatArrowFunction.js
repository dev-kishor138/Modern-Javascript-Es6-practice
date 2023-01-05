var javascript = {
  name: "javascript",
  libraries: ["react", "angular", "vue"],
  print: function () {
    this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`));
  },
};

javascript.print();

var Person = (name) => {
  this.name = name;
};

var sakib = new Person("Shakib");
