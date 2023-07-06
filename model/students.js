class Student {
    constructor(name, surname, classroom) {
        this.name = name;
        this.surname = surname;
        this.classroom = classroom;
      }
    
      toString() {
        return 'Nome: ' + this.name + '\n' + 'Cognome: ' + this.surname + '\n' + 'Classe: ' + this.classroom + '\n';
      }
    
      static randomizeStudents(array) {
        const tempArray = array.slice();
    
        if (tempArray.length === 1) {
          return [tempArray[0]];
        }
    
        const mix = [];
        while (tempArray.length > 1) {
          const el1 = Math.floor(Math.random() * tempArray.length);
          const stud1 = tempArray.splice(el1, 1)[0];
          const el2 = Math.floor(Math.random() * tempArray.length);
          const stud2 = tempArray.splice(el2, 1)[0];
    
          mix.push([stud1, stud2]);
        }
    
        return mix;
      }
    }
    