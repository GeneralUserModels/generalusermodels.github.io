const destinations = [
  {
    name: 'GUM',
    eyebrow: 'General User Models',
    description:
      'Research, demos, and API docs for models that learn user context from computer use.',
    primaryHref: '/gum/',
    primaryLabel: 'Open GUM site',
    secondaryHref: '/gum/docs/',
    secondaryLabel: 'Read docs',
  },
  {
    name: 'TADA',
    eyebrow: 'Task-aware desktop assistant',
    description:
      'A desktop assistant that predicts and prepares what you will need next.',
    primaryHref: '/tada/',
    primaryLabel: 'Open TADA site',
    secondaryHref: 'https://github.com/GeneralUserModels/tada',
    secondaryLabel: 'GitHub',
  },
];

function App() {
  return (
    <main className="site-shell">
      <section className="intro" aria-labelledby="page-title">
        <p className="kicker">General User Models</p>
        <h1 id="page-title">Choose a project</h1>
        <p className="lede">
          GUM is the research and developer platform for user models. TADA is
          the assistant experience built from that line of work.
        </p>
      </section>

      <section className="destination-grid" aria-label="Project destinations">
        {destinations.map((destination) => (
          <article className="destination-card" key={destination.name}>
            <p className="card-eyebrow">{destination.eyebrow}</p>
            <h2>{destination.name}</h2>
            <p>{destination.description}</p>
            <div className="card-actions">
              <a className="button button-primary" href={destination.primaryHref}>
                {destination.primaryLabel}
              </a>
              <a className="button button-secondary" href={destination.secondaryHref}>
                {destination.secondaryLabel}
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;
