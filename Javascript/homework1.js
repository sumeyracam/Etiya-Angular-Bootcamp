
 class User {
    constructor(id,fullName, email, password) {
        this.id = id
        this.fullName = fullName
        this.email = email
        this.password = password
    }

}

 class Course{
    constructor(courseId, courseTitle,courseInstructor,courseDescripton) {
        this.courseId = courseId;
        this.courseTitle = courseTitle;
        this.courseInstructor = courseInstructor;
        this.courseDescripton = courseDescripton;
       
      }
    }

class UserService {
    constructor() {
      this.users = [];
    }
  
    addUser(user) {
      this.users.push(user);
      console.log("Yeni bir kullanıcı kayıt oldu", user); 
    }
  }
 
  class CourseService {
    constructor() {
        this.courses = [];
    }
  
    addCourse(course) {
      this.courses.push(course);
      console.log("Yeni bir kurs eklendi",course); 
    }
  
  }


  const userService = new UserService();
  const newUser = new User(1,"sümeyra çam", "sumeyra@gmail.com", "1q2w3e");
  const newUser2 = new User(2,"begüm deneme", "deneme@gmail.com", "qawsed");

  userService.addUser(newUser); 
  userService.addUser(newUser2); 
  
  const courseService = new CourseService();
  
  const angularCourse = new Course(
         1,
        "Angular Course",
        "Engin Demirog",
        "This course is about Angular",
      );

      const javaCourse = new Course(
        2,
       "Java Course",
       "Engin Demirog",
       "This course is about Java",
     );

      courseService.addCourse(angularCourse); 
      courseService.addCourse(javaCourse); 
     

      

