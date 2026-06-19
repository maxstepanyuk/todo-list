import { nanoid } from 'nanoid';
import { renderTask, renderTasks } from './renderTasks';
import { saveTask, getTasks, initTasks, deleteTask } from './localStorageApi';

export function onTaskFormSubmit(event) {
  event.preventDefault();

  const { taskName, taskDescription } = event.target.elements;

  const taskNameValue = taskName.value.trim();
  const taskDescriptionValue = taskDescription.value.trim();

  if (!taskNameValue || !taskDescriptionValue) {
    alert('not all fields are filled');
    return;
  }

  const task = {
    id: nanoid(),
    name: taskNameValue,
    description: taskDescriptionValue,
  };

  renderTask(task);
  saveTask(task);

  event.target.reset();
}

export function initHomePage() {
  initTasks();

  const tasks = getTasks();
  renderTasks(tasks);
}

export function onTaskButtonDeleteClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const taskId = event.target.dataset.id;
  deleteTask(taskId);

  const tasks = getTasks();
  renderTasks(tasks);
}
