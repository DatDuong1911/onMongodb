var mongoose = require('../configs/dbConnect')
var Schema = mongoose.Schema

//định nghĩa cột (key trong một bản ghi)

var userSchema = new Schema({
    username: String,
    password: String
})

var UserModel = mongoose.model("user", userSchema)
    //tạo data 


// UserModel.create({
//     username: "Duong",
//     password: 1996
// }).then(function(data) {
//     console.log(data);
// }).catch(function(err) {
//     console.log(err);
// })
//cập nhật
// UserModel.updateMany({
//     password: "123"
// }, {
//     username: "Dat Duong"
// }).then(function(data) {
//     console.log(data);
// }).catch(function(err) {
//     console.log(err);
// })

//xóa 1 bản ghi

UserModel.deleteMany({
    password: "1234"
}).then(function(data) {
    console.log(data);
}).catch(function(err) {
    console.log(err);
})