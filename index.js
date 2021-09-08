import projects from "./projects.data.js";
import notes from "./notes.data.js"

loadProjects()
loadNotes()

function loadProjects() {
    let projectsRootElement = document.getElementById("projects-inject-root")

    projects.forEach(project => {
        projectsRootElement.innerHTML += `
            <div class="col col-lg-4 col-md-6 col-sm-12 pb-4">
                <div class="card shadowed full-height p-3 mb-3 bg-dark">
                    <div class="mx-auto p-3 outlined bg-dark card-icon-bi">
                        <i class="bi ${project.bootstrap_icon}"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"><strong>${project.name}</strong></h5>
                        <p class="card-text">${project.description}</p>
                        <p class="card-text"><small class="text-muted">${project.technologies}</small></p>
                    </div>
                    <div class="row">
                        <div class="col text-center">
                            <a href="${project.links.repository}" target="_blank">
                                <button class="btn btn-primary btn-lg fab-button" type="button">
                                    <i class="bi bi-github"></i>
                                </button>
                            </a>
                            <h6 class="mt-2">github</h6>
                        </div>
                        <div class="col text-center">
                            <a href="${project.links.website}" target="_blank">
                                <button class="btn btn-primary btn-lg fab-button fab-button-link" type="button">
                                    <i class="bi bi-link"></i>
                                </button>
                            </a>
                            <h6 class="mt-2">website</h6>
                        </div>
                    </div>
                </div>
            </div>
        `
    });
}

function loadNotes() {
    let notesRootElement = document.getElementById("notes-inject-root")

    notes.forEach(note => {
        notesRootElement.innerHTML += `
            <div class="col col-lg-4 col-md-6 col-sm-12 pb-4">
                <div class="card shadowed full-height p-3 mb-3 bg-dark">
                    <div class="mx-auto p-3 outlined bg-dark card-icon-bi">
                        <i class="bi ${note.bootstrap_icon}"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"><strong>${note.name}</strong></h5>
                        <p class="card-text">${note.description}</p>
                        <p class="card-text"><small class="text-muted">${note.technologies}</small></p>
                    </div>
                    <div class="row">
                        <div class="col text-center">
                            <a href="${note.website}" target="_blank">
                                <button class="btn btn-primary btn-lg fab-button fab-button-link" type="button">
                                    <i class="bi bi-link"></i>
                                </button>
                            </a>
                            <h6 class="mt-2">website</h6>
                        </div>
                    </div>
                </div>
            </div>
        `
    });
}