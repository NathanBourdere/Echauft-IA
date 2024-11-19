class ModelCourse {
    constructor() {
        this.courses = [];
    }

    addCourse(date, distance, time) {
        const averageSpeed = (distance / (time / 60)).toFixed(2);
        console.log("model add course", date, distance, time, averageSpeed)
        let course = { date, distance, time, averageSpeed };
        this.courses.push(course);

    }

    editCourse(index, newDistance, newTime) {
        const course = this.courses[index];
        course.distance = newDistance;
        course.time = newTime;
        course.averageSpeed = (newDistance / (newTime / 60)).toFixed(2);
    }

    getCourses() {
        return this.courses;
    }
}