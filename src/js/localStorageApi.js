import { STORAGE_KEYS } from './constants';

export function getTasks() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.TASKS));
  } catch (e) {
    console.log(e);
  }
}

export function saveTask(task) {
  const tasksLocal = getTasks();
  const tasksNew = [...tasksLocal, task];
  localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(tasksNew));
}

export function initTasks() {
  const emptyArray = [];
  const tasks = getTasks() ?? emptyArray;
  localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(tasks));
}

export function deleteTask(taskId) {
  const tasks = getTasks();
  const filterredTasks = tasks.filter(task => task.id !== taskId);
  localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(filterredTasks));
}
