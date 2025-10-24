import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <h1>Испытай себя</h1>
      <div className="main-menu">
        <Link href="/game" className="start-button">
          Начать игру
        </Link>
        <div className="rules">
          <h2>Правила игры:</h2>
          <ul>
            <li>Выбирайте задания по стоимости очков</li>
            <li>Чем больше очков - тем сложнее задание</li>
            <li>✅ - задание выполнено</li>
            <li>❌ - задание не выполнено</li>
            <li>Постарайтесь выполнить как можно больше заданий!</li>
          </ul>
        </div>
        
        <div className="points-info">
          <h3>Сложность заданий:</h3>
          <div className="points-examples">
            <div className="points-example easy">20-30<br/>Легкие</div>
            <div className="points-example medium">40-50<br/>Средние</div>
            <div className="points-example hard">60<br/>Сложные</div>
          </div>
        </div>

        <div className="status-info">
          <h3>Статусы заданий:</h3>
          <div className="status-examples">
            <div className="status-example available">Доступно</div>
            <div className="status-example completed">✅ Выполнено</div>
            <div className="status-example failed">❌ Не выполнено</div>
          </div>
        </div>
      </div>
    </div>
  );
}