function ProgressBar({ step }) {
  const percentage = (step / 6) * 100;

  return (
    <div className="mb-4">
      <div className="progress">
        <div
          className="progress-bar"
          style={{
            width: `${percentage}%`,
          }}
        >
          {percentage}%
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;