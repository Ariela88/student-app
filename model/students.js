class Student {


  constructor(name, surname) {
    this.name = name;
    this.surname = surname;

  }

  toString() {
    return this.name + ' ' + this.surname + '\n';

  }

  // static randomizeStudents(array) {
  //   const tempArray = array.slice();
  //   const mix = [];

  //   if (tempArray.length === 1) {
  //     return [tempArray[0], null];
  //   }


  //   while (tempArray.length > 1) {
  //     const index1 = Math.floor(Math.random() * tempArray.length);
  //     const stud1 = tempArray.splice(index1, 1)[0];
  //     const index2 = Math.floor(Math.random() * tempArray.length);
  //     const stud2 = tempArray.splice(index2, 1)[0];

  //     mix.push([stud1, stud2]);
  //   }

  //   return mix;
  // }
}
