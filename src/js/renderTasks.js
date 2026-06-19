import { refs } from './refs';

export function renderTask({ name, description, id }) {
  return `
    <li class="task-list-item">
        <h3 class="task-list-title">${name} (id: ${id})</h3>
        <p class="task-list-description">${description}</p>
        <button class="task-list-delete-button" type="button">Delete</button>
    </li>
    `;
}

export function insertTask(task) {
  refs.taskList.insertAdjacentHTML('afterend', task);
}
