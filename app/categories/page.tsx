import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-outfit font-bold tracking-tight">
          Categories
        </h1>
        <p className="mt-2 text-lg text-gray-600">Browse tools by category</p>
      </div>
      <div className="max-w-5xl mx-auto mt-8 px-4">
        <div className="flex flex-row-reverse gap-8">
          <div className="flex-1">
            <div className="space-y-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <Link
                  href="?category=Analytics"
                  className="block p-4 rounded-xl border transition-all bg-white hover:border-gray-300 border-gray-100"
                >
                  <h3 className="font-outfit font-semibold mb-1">Analytics</h3>
                  <p className="text-sm text-gray-500">31 products</p>
                </Link>
                <Link
                  href="?category=API%20Tools"
                  className="block p-4 rounded-xl border transition-all bg-white hover:border-gray-300 border-gray-100"
                >
                  <h3 className="font-outfit font-semibold mb-1">API Tools</h3>
                  <p className="text-sm text-gray-500">35 products</p>
                </Link>
                <Link
                  href="?category=Art%20%26%20Design"
                  className="block p-4 rounded-xl border transition-all bg-white hover:border-gray-300 border-gray-100"
                >
                  <h3 className="font-outfit font-semibold mb-1">
                    Art &amp; Design
                  </h3>
                  <p className="text-sm text-gray-500">73 products</p>
                </Link>
                <Link
                  href="?category=Artificial%20Intelligence"
                  className="block p-4 rounded-xl border transition-all bg-white hover:border-gray-300 border-gray-100"
                >
                  <h3 className="font-outfit font-semibold mb-1">
                    Artificial Intelligence
                  </h3>
                  <p className="text-sm text-gray-500">226 products</p>
                </Link>
                <Link
                  href="?category=Authentication"
                  className="block p-4 rounded-xl border transition-all bg-white hover:border-gray-300 border-gray-100"
                >
                  <h3 className="font-outfit font-semibold mb-1">
                    Authentication
                  </h3>
                  <p className="text-sm text-gray-500">6 products</p>
                </Link>
                <Link
                  href="?category=Blockchain"
                  className="block p-4 rounded-xl border transition-all bg-white hover:border-gray-300 border-gray-100"
                >
                  <h3 className="font-outfit font-semibold mb-1">Blockchain</h3>
                  <p className="text-sm text-gray-500">1 product</p>
                </Link>
                <Link
                  href="?category=Books"
                  className="block p-4 rounded-xl border transition-all bg-white hover:border-gray-300 border-gray-100"
                >
                  <h3 className="font-outfit font-semibold mb-1">Books</h3>
                  <p className="text-sm text-gray-500">6 products</p>
                </Link>
                <Link
                  href="?category=Bots"
                  className="block p-4 rounded-xl border transition-all bg-white hover:border-gray-300 border-gray-100"
                >
                  <h3 className="font-outfit font-semibold mb-1">Bots</h3>
                  <p className="text-sm text-gray-500">4 products</p>
                </Link>
                <Link
                  href="?category=Business%20Tools"
                  className="block p-4 rounded-xl border transition-all bg-white hover:border-gray-300 border-gray-100"
                >
                  <h3 className="font-outfit font-semibold mb-1">
                    Business Tools
                  </h3>
                  <p className="text-sm text-gray-500">102 products</p>
                </Link>
                <Link
                  href="?category=Calendar"
                  className="block p-4 rounded-xl border transition-all bg-white hover:border-gray-300 border-gray-100"
                >
                  <h3 className="font-outfit font-semibold mb-1">Calendar</h3>
                  <p className="text-sm text-gray-500">5 products</p>
                </Link>
                <Link
                  href="?category=Chat"
                  className="block p-4 rounded-xl border transition-all bg-white hover:border-gray-300 border-gray-100"
                >
                  <h3 className="font-outfit font-semibold mb-1">Chat</h3>
                  <p className="text-sm text-gray-500">19 products</p>
                </Link>
                <Link
                  href="?category=Chrome%20Extensions"
                  className="block p-4 rounded-xl border transition-all bg-white hover:border-gray-300 border-gray-100"
                >
                  <h3 className="font-outfit font-semibold mb-1">
                    Chrome Extensions
                  </h3>
                  <p className="text-sm text-gray-500">17 products</p>
                </Link>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
