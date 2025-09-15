/// <reference path='Teacher.ts' />

namespace Subjects {
  export class Subject {
    teacher: Teacher | undefined; // attribute that implements Teacher interface

    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
