export default function Footer() {
  return (
    <footer className="mt-12 pb-8">
      <div className="max-w-full mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-200 space-y-4 sm:space-y-0">
          <p className="text-sm text-gray-500">© 2025 All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a
              href="/privacy"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Terms &amp; Conditions
            </a>
            <a
              href="/community-guidelines"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Community Guidelines
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
