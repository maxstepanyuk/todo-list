import { refs } from './refs';

export function createTask({ name, description, id }) {
  return `
    <li class="task-list-item">
        <h3 class="task-list-title">${name}</h3>
        <p class="task-list-description">${description}</p>
        <button data-id="${id}" class="task-list-delete-button" type="button">Delete</button>
    </li>
    `;
}

export function renderTask(task) {
  refs.taskList.insertAdjacentHTML('beforeend', createTask(task));
}

export function renderTasks(tasks) {
  const tasksMarkup = tasks.map(task => createTask(task)).join('');
  refs.taskList.innerHTML = tasksMarkup;
}
