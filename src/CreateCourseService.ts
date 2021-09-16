interface Course {
  name: string;
  duration: number;
  educator: string;
}
class CreateCourseService {
  execute({ duration = 8, educator, name }: Course) {
    console.log(duration, educator, name);
  }
}

export default new CreateCourseService();
