
  
    const student1 = new Student('Cesare', 'Falzone');
    const student2 = new Student('Luca', 'Verduci');
    const student3 = new Student('Damiano', 'Di Lionardo');
    const student4 = new Student('Isabella', 'Ottonello');
    const student5 = new Student('Stefano', 'Florio');
    const student6 = new Student('Bryan', 'Rojas');
    const student7 = new Student('Stefania', 'Ghergut');
    const student8 = new Student('Francesca', 'Ercolani');
    const student9 = new Student('Manuela','Ariotti');
    const student10 = new Student('Ares', 'Fiumicelli');
    

    const classroom1 = new Classroom([student1,student2,student3,student4,student5,student6,student7,student8,student9,student10])



    // const studentArray = [student1, student2, student3, student4, student5, student6, student7, student8, student9, student10];
    
    // const shuffledStudents = Student.randomizeStudents(studentsArray);
    // console.log(shuffledStudents);
  
    
   
classroom1.shuffleStudents()
  
console.log(classroom1.printSquad())

