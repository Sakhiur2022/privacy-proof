import React from 'react';
import {
  FileSearch,
  BookOpen,
  Plane,
  Calendar,
  Columns2,
  Folder,
} from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      title: 'Real packet captures, not whitepapers.',
      description:
        'Our findings come from observed traffic during an actual note-taking session, not from what the vendor told us.',
      icon: FileSearch,
    },
    {
      title: 'Plain English, no jargon.',
      description:
        'Every report says what moved, where it went, and whether session content was in it — in words you can read between clients.',
      icon: BookOpen,
    },
    {
      title: 'The airplane-mode test.',
      description:
        'The clearest privacy signal there is: does the tool still produce your note with the network off? We check every time.',
      icon: Plane,
    },
    {
      title: 'Version-dated, so it stays honest.',
      description:
        'Software changes. Every report names the exact version and date tested, and we retest when updates ship.',
      icon: Calendar,
    },
    {
      title: 'Compare before you commit.',
      description:
        'Put two or three scribes side by side on the findings that matter before you move your documentation workflow.',
      icon: Columns2,
    },
    {
      title: 'Built for your procurement file.',
      description:
        'Export a one-page summary you can keep with your practice\'s records and show anyone who asks.',
      icon: Folder,
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
            Evidence instead of promises
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="p-8 bg-[#FFFFFF] flex flex-col justify-between"
                style={{
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <div>
                  <div className="mb-5 text-[#1F6B4E]">
                    <IconComponent
                      size={28}
                      strokeWidth={1.75}
                      className="text-[#1F6B4E]"
                    />
                  </div>
                  <h3 className="type-h3 text-[#24302B] font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p
                    className="type-body text-[#6B7268]"
                    style={{ textWrap: 'pretty' }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
