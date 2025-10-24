interface ScoreBoardProps {
  score: number;
  completedTasks: number;
  failedTasks: number;
  availableTasks: number;
  totalTasks: number;
}

export default function ScoreBoard({ 
  score, 
  completedTasks, 
  failedTasks, 
  availableTasks, 
  totalTasks 
}: ScoreBoardProps) {
  return (
    <div className="score-board">
      <div className="score-item">
        <span className="score-label">Счет:</span>
        <span className="score-value">{score}</span>
      </div>
      <div className="score-item">
        <span className="score-label">Выполнено:</span>
        <span className="score-value completed">{completedTasks}</span>
      </div>
      <div className="score-item">
        <span className="score-label">Не выполнено:</span>
        <span className="score-value failed">{failedTasks}</span>
      </div>
      <div className="score-item">
        <span className="score-label">Осталось:</span>
        <span className="score-value available">{availableTasks}</span>
      </div>
    </div>
  );
}