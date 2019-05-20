const Course = require('./Course');
const operations = require('./operations');

const registrationData = {
    idCourse:{
        demand:true,
        alias:'id'
    },
    nameUser:{
        demand:true,
        alias:'n'
    },
    documentUser:{
        demand:true,
        alias:'d'
    }
}

const argv = require('yargs').command('inscribir','Incribir los cursos',registrationData).argv

var courses = []
courses.push(new Course(1,'Matematicas',"12 meses",35000))
courses.push(new Course(2,'Ingles',"12 meses",50000))
courses.push(new Course(3,'Etica',"6 meses",15000))

if(argv.id){
    let courseFound = courses.find(course => course.id == argv.id);
    if(courseFound === undefined)
    {
        console.log('No se encontro el curso con id = ' + argv.id);
        return;
    }
    operations.createFile(courseFound,argv.n,argv.d)
}else{
    operations.listar(courses)
}