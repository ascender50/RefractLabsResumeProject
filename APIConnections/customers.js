const db = require('../config/db.config');

router.get('/save', function(req, res) {
    var newStudent = new StudentModel({StudentId:101, 
        Name:"Sam", Roll:1, Birthday:2001-09-08});

    newStudent.save(function(err, data) {
        if(err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});