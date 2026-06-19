import { nanoid } from 'nanoid';
import { insertTask, renderTask } from './renderTasks';

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
    name: taskNameValue,
    description: taskDescriptionValue,
    id: nanoid(),
  };

  insertTask(renderTask(task));
}
