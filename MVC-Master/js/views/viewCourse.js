class CourseView {
    constructor(){
        
    }
    renderCourses(courses) {
        const courseList = document.getElementById('course-list');
        courseList.innerHTML = '';

        courses.forEach((course, index) => {
            const courseCard = document.createElement('div');
            courseCard.className = 'card shadow-sm';
            courseCard.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">Course du : ${course.date}</h5>
                    <p class="card-text">Km parcourus : ${course.distance}</p>
                    <p class="card-text">Km/h moyen : ${course.averageSpeed}</p>
                    <p class="card-text">Temps : ${course.time} min</p>
                    <button class="btn btn-dark w-100" onclick="controller.editCourseHandler(${index})">Modifier</button>
                </div>
            `;
            courseList.appendChild(courseCard);
        });
    }
}