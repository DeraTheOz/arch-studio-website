export default function SpinnerMini() {
  return (
    <div className="site-container" role="status" aria-label="Loading project">
      <div className="spinner-mini" aria-hidden="true" />
      <span className="sr-only">Loading project...</span>
    </div>
  );
}
