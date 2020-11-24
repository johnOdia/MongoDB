exports.instructor = require('./instructor')

//create an instructor
Instructor.create({firstName: 'John'}).then(
    newInstance => console.log(newInstance)    
).catch(err => console.log('Error creating'));

//find multiple instructor records
Instructor.find({}).then(instructors => {
    console.log(instructors);    
})

//Update
Instructor.update({}, {isHilarious: false})
.then(instances => console.log(instances))
.catch(err => console.log(err));

//remove
Instructor.remove({isHilarious: false})
.then(intances => console.log(instances))
.catch(err => console.log('Error!', err));