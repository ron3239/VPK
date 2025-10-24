export interface Task {
  id: number;
  name: string;
  points: number;
  category: string;
  description?: string;
  status: 'available' | 'completed' | 'failed';
}

export interface TaskCategory {
  id: number;
  category: string;
  tasks: Task[];
}

export interface GameState {
  score: number;
  completedTasks: number[];
  failedTasks: number[];
  selectedTask: Task | null;
  isModalOpen: boolean;
}