const Footer = () => {
  const currentYear = new Date().getFullYear();


  return (
    <footer className="bg-border-tint/30 text-primary-text py-8">
      <div className="container-content">
        <div className="flex flex-col items-center justify-center space-y-6">

          {/* Back to Top */}
          <div>
            <a
              href="#top"
              className="inline-flex items-center gap-2 text-sm text-secondary-gray hover:text-accent transition-colors"
            >
              <span>Back to Top</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-secondary-gray">
            <p>
              &copy; {currentYear} Michael Moawad. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 