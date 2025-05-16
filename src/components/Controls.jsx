import './Controls.scss';

export default function Controls({ enabled, setEnabled, autoRefresh, setAutoRefresh, onClick }) {
  return (
    <div className="controls">
      <label>
        <input
          type="checkbox"
          checked={enabled}
          onChange={(e) => setEnabled(e.target.checked)}
        />
        Enabled
      </label>

      <label>
        <input
          type="checkbox"
          checked={autoRefresh}
          onChange={(e) => setAutoRefresh(e.target.checked)}
          disabled={!enabled}
        />
        Auto-refresh every 5 second
      </label>

      <button onClick={onClick} disabled={!enabled}>
        Get cat
      </button>
    </div>
  );
}