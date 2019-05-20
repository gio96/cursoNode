const fs = require('fs');

function listar(courses){
    let listCourses = (curso,callback) =>{
        let time = 2000
        for (let index = 0; index < curso.length; index++) {
            setTimeout(function () {
                let resultado = curso[index]
                callback(resultado)
            }, time);
            time = time + 2000
        }
        
    }

    listCourses(courses,function(resultado){
        console.log(resultado)
    })
}

function createFile(course,name,document) {
    let texto = 'Datos del Curso'+'\nId Curso = ' + course.id + '\nCurso = ' + course.name + '\nDuración = ' + course.duration + '\nValor = ' + course.amount 
    + '\nDatos del estudiante preinscrito'+'\nNombre = ' + name + '\nCedula = ' + document;
     fs.writeFile('preinscripcion.txt',texto,(err)=>{
         if(err) throw(err);
         console.log("Se ha creado el archivo Correctamente")
     });
 }

module.exports = {
    listar,
    createFile
}