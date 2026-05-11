const sections = [
  {
    title: 'Papers',
    destinations: [
      {
        name: 'Learning Next Action Predictors',
        subtitle: 'from Human-Computer Interaction',
        venue: 'arXiv 2026',
        actions: [
          { href: '/nap/', label: 'Project' },
          { href: 'https://arxiv.org/abs/2603.05923', label: 'PDF' },
        ],
      },
      {
        name: 'Creating General User Models',
        subtitle: 'from Computer Use',
        venue: 'UIST 2025',
        note: 'Best Paper Honorable Mention',
        actions: [
          { href: '/gum/', label: 'Project' },
          { href: '/gum/docs/', label: 'Demo' },
          { href: 'https://arxiv.org/abs/2505.10831', label: 'PDF' },
          { href: 'https://github.com/GeneralUserModels/gum', label: 'Code' },
        ],
      },
    ],
  },
  {
    title: 'Applications',
    destinations: [
      {
        name: 'Tada 🎉',
        subtitle:
          'A research platform for prototyping personal AI interfaces that learn from computer use, model user context, and anticipate what people need next.',
        actions: [
          { href: '/tada/', label: 'Project' },
          { href: 'https://github.com/GeneralUserModels/tada', label: 'Repository' },
        ],
      },
    ],
  },
];

function App() {
  return (
    <main className="page">
      <div className="grain" aria-hidden="true" />
      <section className="site-shell" aria-labelledby="page-title">
        <div className="intro">
          <h1 id="page-title">Research on General User Models.</h1>
          <p className="lede">
            Papers and applications related to <b>General User Models</b>:
            computational models of users built by privately observing user
            behavior.
          </p>
        </div>

        <div className="project-sections">
          {sections.map((section) => (
            <section
              className="project-section"
              aria-labelledby={`${section.title}-heading`}
              key={section.title}
            >
              <h2 className="section-title" id={`${section.title}-heading`}>
                {section.title}
              </h2>
              <div className="destination-grid">
                {section.destinations.map((destination) => (
                  <article className="destination-card" key={destination.name}>
                    <div>
                      <h3>{destination.name}</h3>
                      {destination.subtitle && <p>{destination.subtitle}</p>}
                      {destination.venue && (
                        <p className="card-meta">{destination.venue}</p>
                      )}
                      {destination.note && <p className="card-note">{destination.note}</p>}
                    </div>
                    <div className="card-actions">
                      {destination.actions.map((action, index) => (
                        <a
                          className={`button ${
                            index === 0 ? 'button-primary' : 'button-secondary'
                          }`}
                          href={action.href}
                          key={action.label}
                        >
                          {action.label}
                        </a>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
