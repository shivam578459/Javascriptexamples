class Student {
     // local variables
     
     // Constructor is a method used only for initializing the data
     // constructo will take arguments but it is only meant for initializing the value
     // At the time of object creation constructor will be invoked
    constructor(sid, sname, grade ){
        this.sid = sid;
        this.sname = sname
        this.grade = grade
    }

    
    //  constructor(sid, sname, grade  ){
    //     this.sid = sid;
    //     this.sname = sname
    //     this.grade = grade
    // }
// methods can be accessed through object only

    display(){
        console.log(this.sid, this.sname, this.grade)
    }
}

let stu = new Student(101,"john","A")
let stu1 = new Student(102,"robert","B")
//stu.setDetails()
stu1.display()
stu.display()


