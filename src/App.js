const destinations = [
  {
    name: 'GUM',
    eyebrow: 'General User Models',
    description:
      'The research, demos, and developer docs for models that learn user context from computer use.',
    primaryHref: '/gum/',
    primaryLabel: 'Explore GUM',
    secondaryHref: '/gum/docs/',
    secondaryLabel: 'Docs',
  },
  {
    name: 'TADA',
    eyebrow: 'Desktop assistant',
    description:
      'A softer assistant experience that predicts, prepares, and keeps useful context close by.',
    primaryHref: '/tada/',
    primaryLabel: 'Visit TADA',
    secondaryHref: 'https://github.com/GeneralUserModels/tada',
    secondaryLabel: 'GitHub',
  },
];

function App() {
  return (
    <main className="page">
      <div className="grain" aria-hidden="true" />
      <section className="site-shell" aria-labelledby="page-title">
        <div className="intro">
          <p className="kicker">General User Models</p>
          <h1 id="page-title">User models that feel more personal.</h1>
          <p className="lede">
            Start with the GUM research platform, or see how the same ideas
            show up in TADA as a desktop assistant.
          </p>
        </div>

        <section className="destination-grid" aria-label="Project destinations">
          {destinations.map((destination) => (
            <article className="destination-card" key={destination.name}>
              <div>
                <p className="card-eyebrow">{destination.eyebrow}</p>
                <h2>{destination.name}</h2>
                <p>{destination.description}</p>
              </div>
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
      </section>
    </main>
  );
}

export default App;
