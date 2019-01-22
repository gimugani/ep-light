var Response = require('../models/Response');

module.exports = {
    async index (req, res) {
        try {
            const responses = await Response.find().sort({date: -1})
            res.send(responses)
        } catch (err){
            res.status(500).send({
                error: 'An error has occured trying to fetch responses'
            })
        }
    },
    async post (req, res) {
        try {
            const response = await Response.create(req.body);
            res.send(response)
        } catch (err){
            res.status(400).send({
                error: 'An error has occured trying to create a response'
            })
        }
    },
    // async show (req, res) {
    //     try {
    //         const response = await Response.findById({
    //             _id: req.params.responseId
    //         })
    //         .populate({path:'sessions'})
    //         .exec(function(err, student){
    //             if (err) {
    //                 res.send({
    //                     error: 'An error has occured trying to fetch a student'
    //                 });
    //             } else {
    //                 res.send(student);
    //             }
    //         });
    //     } catch (err) {
    //         res.status(500).send({
    //             error: 'An error has occured trying to fetch a student'
    //         });
    //     }
    // },
    // async update (req, res) {
    //     try {
    //         const student = await Student.findByIdAndUpdate({
    //             _id: req.params.studentId
    //         }, req.body);
    //         res.send(req.body)
    //     } catch (err){
    //         res.status(500).send({
    //             error: 'An error has occured trying to update the student'
    //         })
    //     }
    // },
    // async delete (req, res) {
    //     try {
    //         const student = await Student.findById({
    //             _id: req.params.studentId
    //         });
    //         // Delete from a session
    //         if (student.sessions.length != 0){
    //             student.sessions.forEach(async function(session) {
    //                 const sess = await Session.findById({
    //                     _id: String(session._id)
    //                 });
    //                 if (!sess){
    //                     res.status(500).send({
    //                         error: 'An error has occured trying to find a session'
    //                     });
    //                 } else {
    //                     for (var i = 0; i < sess.students.length; i++){
    //                         if (sess.students[i]._id == req.params.studentId){
    //                             sess.students.splice(i,1);
    //                             sess.save();
    //                         }
    //                     }
    //                 }
    //             });
    //         }
    //         student.remove();
    //         res.send(student);
    //     }  catch (err){ 
    //         res.status(500).send({
    //             error: 'An error has occured trying to delete the student'
    //         })
    //     }
    // }
}