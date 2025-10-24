import { Task, TaskCategory } from '../types';

interface TaskTableProps {
  tasks: TaskCategory[];
  completedTasks: number[];
  failedTasks: number[];
  onTaskSelect: (task: Task) => void;
}

export default function TaskTable({ tasks, completedTasks, failedTasks, onTaskSelect }: TaskTableProps) {
  const isTaskCompleted = (taskId: number) => completedTasks.includes(taskId);
  const isTaskFailed = (taskId: number) => failedTasks.includes(taskId);

  const getPointsColor = (points: number) => {
    if (points <= 30) return 'points-easy';
    if (points <= 50) return 'points-medium';
    return 'points-hard';
  };

  const getTaskStatus = (taskId: number) => {
    if (isTaskCompleted(taskId)) return 'completed';
    if (isTaskFailed(taskId)) return 'failed';
    return 'available';
  };

  return (
    <div className="task-table">
      {tasks.map((category) => (
        <div key={category.id} className="category-section">
          <h3 className="category-title">{category.category}</h3>
          <div className="tasks-grid">
            {category.tasks.map((task) => (
              <div
                key={task.id}
                className={`task-cell ${getTaskStatus(task.id)} ${getPointsColor(task.points)}`}
                onClick={() => getTaskStatus(task.id) === 'available' && onTaskSelect(task)}
              >
                <div className="task-points">{task.points}</div>
                {getTaskStatus(task.id) === 'completed' && (
                  <div className="status-badge completed">✅</div>
                )}
                {getTaskStatus(task.id) === 'failed' && (
                  <div className="status-badge failed">❌</div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}