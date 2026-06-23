export default function Spinner() {
  return (
    <div className="site-container" role="status" aria-label="Loading page">
      <div className="spinner" aria-hidden="true" />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
