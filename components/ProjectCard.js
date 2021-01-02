const ExternalLink = ({ href, children }) => (
  <a
    className="text-sm text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function ProjectCard({ title, description, href }) {
  return (
    <div className="bg-purple-300 border-white border-2 p-4 rounded-md w-52 relative">
      <ExternalLink href={href}>
        <svg
          className="h-5 w-5 abs relative left-40 -top-2"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </g>
        </svg>
      </ExternalLink>
      <h4 className="text-lg font-bold w-10">{title}</h4>
      <p className="text-sm">{description}</p>
    </div>
  );
}
