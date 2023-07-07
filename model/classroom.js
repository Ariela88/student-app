class Classroom {

    constructor(studenstArray = []) {

        this.studenstArray = studenstArray



    }

    addStudents(student) {

        this.studenstArray.push(student)
    }


    printSquad() {

        let acc = '';

        for (let i = 0; i < this.studenstArray.length; i++) {
            const student = this.studenstArray[i];

            if (i % 2 === 0) {
                acc += 'Coppia ' + (i / 2 + 1) + ': ' + '\n'

            } acc += student.toString();
        } return acc;

    }


    shuffleStudents() {

        const tempArray = []
        const originalLength = this.studenstArray.length;

        for (let i = 0; i < originalLength; i++) {
            const randomIndex = Math.floor(Math.random() * this.studenstArray.length);

            const student = this.studenstArray[randomIndex]
            tempArray.push([student]);
            this.studenstArray.splice(randomIndex, 1)

        } this.studenstArray = tempArray

    }
}











