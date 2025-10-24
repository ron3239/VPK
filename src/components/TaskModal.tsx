import { Task } from '../types';

interface TaskModalProps {
  task: Task | null;
  isOpen: boolean;
  onClose: () => void;
  onComplete: (task: Task) => void;
  onFail: (task: Task) => void;
  onSkip: () => void;
}

export default function TaskModal({ task, isOpen, onClose, onComplete, onFail, onSkip }: TaskModalProps) {
  if (!isOpen || !task) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Задание за {task.points} очков</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="task-info">
          <div className="task-category">{task.category}</div>
          <h3 className="task-title">{task.name}</h3>
        </div>

        <div className="modal-actions">
          <button 
            className="complete-btn"
            onClick={() => onComplete(task)}
          >
            ✅ Задание выполнено
          </button>
          <button 
            className="fail-btn"
            onClick={() => onFail(task)}
          >
            ❌ Задание не выполнено
          </button>
          <button 
            className="skip-btn"
            onClick={onSkip}
          >
            ↩️ Вернуться к выбору
          </button>
        </div>
      </div>
    </div>
  );
}