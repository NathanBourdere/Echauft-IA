class ControlerCourse {
    constructor(model) {
        this.model = model;
        this.view = new CourseView();
    }

    init() {
        this.initEventListeners();
        this.updateView();
    }

    initEventListeners() {
        document.getElementById('addCourseForm').addEventListener('submit', (e) => {
            e.preventDefault();

            const date = document.getElementById('courseDate').value;
            const distance = parseFloat(document.getElementById('courseDistance').value);
            const time = parseInt(document.getElementById('courseTime').value, 10);

            this.model.addCourse(date, distance, time);
            this.updateView();

            document.getElementById('addCourseForm').reset();
            const modal = bootstrap.Modal.getInstance(document.getElementById('addCourseModal'));
            modal.hide();
        });
    }

    updateView() {
        this.view.renderCourses(this.model.getCourses());
    }

    editCourseHandler(index) {
        const course = this.model.getCourses()[index];
        const newDistance = parseFloat(prompt('Entrez le nouveau nombre de kilomètres parcourus :', course.distance));
        const newTime = parseInt(prompt('Entrez le nouveau temps (en minutes) :', course.time), 10);

        if (newDistance && newTime) {
            this.model.editCourse(index, newDistance, newTime);
            this.updateView();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const model = new ModelCourse();
    window.controller = new ControlerCourse(model);
    window.controller.init();
});