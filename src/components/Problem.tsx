import React from 'react';

export const Problem: React.FC = () => {
  const points = [
    {
      lead: 'The marketing says "never leaves your device."',
      follow: 'The privacy policy is 4,000 words of maybe. You have no way to verify either.',
    },
    {
      lead: "If a client's session leaks, it's your license and your liability",
      follow: "— not the vendor's.",
    },
    {
      lead: "You can't exactly run a network sniffer between back-to-back clients.",
      follow: "So you're forced to just trust the sales page.",
    },
    {
      lead: "Your clients already feel it: in one survey, only 8% of patients said they'd trust an AI in a therapy context.",
      follow: '"We tested it" is a very different conversation than "the vendor promised."',
    },
  ];

  return (
    <section
      className="w-full py-20 lg:py-24"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div
        className="mx-auto px-6"
        style={{ maxWidth: 'var(--max-content-width)' }}
      >
        <div className="max-w-[760px] mb-12 lg:mb-16">
          <h2 className="type-h2 text-[#24302B]">
            Every scribe says &ldquo;100% local.&rdquo; Nobody checks.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#FAF8F4] flex flex-col justify-between"
              style={{
                borderRadius: 'var(--radius)',
                border: '1px solid var(--color-border)',
              }}
            >
              <div className="flex items-start gap-4">
                <span
                  className="type-h3 text-[#6B7268] font-mono select-none"
                  aria-hidden="true"
                >
                  0{idx + 1}
                </span>
                <div className="space-y-2">
                  <p className="type-h3 text-[#24302B] font-semibold">
                    {point.lead}
                  </p>
                  <p className="type-body text-[#6B7268]" style={{ textWrap: 'pretty' }}>
                    {point.follow}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
