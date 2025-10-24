'use client';
import ScoreBoard from '@/components/ScoreBoard';
import TaskModal from '@/components/TaskModal';
import TaskTable from '@/components/TaskTable';
import { tasks } from '@/data/tasks';
import { GameState, Task } from '@/types';
import { useState } from 'react';


export default function Game() {
  const [gameState, setGameState] = useState<GameState>({
    score: 0,
    completedTasks: [],
    failedTasks: [],
    selectedTask: null,
    isModalOpen: false
  });

  const allTasks = tasks.flatMap(category => category.tasks);
  const totalTasks = allTasks.length;
  const completedCount = gameState.completedTasks.length;
  const failedCount = gameState.failedTasks.length;
  const availableCount = totalTasks - completedCount - failedCount;

  const handleTaskSelect = (task: Task) => {
    setGameState(prev => ({
      ...prev,
      selectedTask: task,
      isModalOpen: true
    }));
  };

  const handleTaskComplete = (task: Task) => {
    if (!gameState.completedTasks.includes(task.id) && !gameState.failedTasks.includes(task.id)) {
      setGameState(prev => ({
        ...prev,
        score: prev.score + task.points,
        completedTasks: [...prev.completedTasks, task.id],
        isModalOpen: false,
        selectedTask: null
      }));
    }
  };

  const handleTaskFail = (task: Task) => {
    if (!gameState.completedTasks.includes(task.id) && !gameState.failedTasks.includes(task.id)) {
      setGameState(prev => ({
        ...prev,
        failedTasks: [...prev.failedTasks, task.id],
        isModalOpen: false,
        selectedTask: null
      }));
    }
  };

  const handleCloseModal = () => {
    setGameState(prev => ({
      ...prev,
      isModalOpen: false,
      selectedTask: null
    }));
  };

  const handleSkipTask = () => {
    setGameState(prev => ({
      ...prev,
      isModalOpen: false,
      selectedTask: null
    }));
  };

  const handleNewGame = () => {
    setGameState({
      score: 0,
      completedTasks: [],
      failedTasks: [],
      selectedTask: null,
      isModalOpen: false
    });
  };

  const isGameCompleted = completedCount + failedCount === totalTasks;

  return (
    <div className="game-page">
      <header className="game-header">
        <h1>Испытай себя</h1>
        <p>Выбери задание и выполни его!</p>
      </header>

      <ScoreBoard 
        score={gameState.score}
        completedTasks={completedCount}
        failedTasks={failedCount}
        availableTasks={availableCount}
        totalTasks={totalTasks}
      />

      {isGameCompleted ? (
        <div className="game-completed">
          <h2>🎉 Игра завершена! 🎉</h2>
          <div className="final-stats">
            <p>Финальный счет: <strong>{gameState.score}</strong></p>
            <p>Выполнено заданий: <strong>{completedCount}</strong></p>
            <p>Не выполнено: <strong>{failedCount}</strong></p>
          </div>
          <button onClick={handleNewGame} className="new-game-btn">
            🆕 Начать новую игру
          </button>
        </div>
      ) : (
        <>
          <TaskTable
            tasks={tasks}
            completedTasks={gameState.completedTasks}
            failedTasks={gameState.failedTasks}
            onTaskSelect={handleTaskSelect}
          />
          
          <div className="game-controls">
            <button onClick={handleNewGame} className="control-btn">
              Новая игра
            </button>
          </div>
        </>
      )}

      <TaskModal
        task={gameState.selectedTask}
        isOpen={gameState.isModalOpen}
        onClose={handleCloseModal}
        onComplete={handleTaskComplete}
        onFail={handleTaskFail}
        onSkip={handleSkipTask}
      />
    </div>
  );
}