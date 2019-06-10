const Course = require('./Course');
const operations = require('./operations');
const express = require('express')
const app = express()

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

//app.use(express.static(__dirname + '/public'))//Se puede utlizar lo que esta en esta carpeta

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
    var datos = operations.showDataInPage(courseFound,argv.n,argv.d);
    //document.getElementById('resultado').innerHTML = ""
    //operations.createFile(courseFound,argv.n,argv.d)
}else{
    operations.listar(courses)
}

app.get('/', function (req, res) {
  res.send('<div>' + datos +'</div>')
})

app.listen(3000 , function(){
  console.log('La aplicacion esta corriendo en el puerto 3000');
});
