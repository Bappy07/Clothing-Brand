
import Link from "next/link";

export default function SignInPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-5 text-black">
      <div className="w-full max-w-md">
        {/* Brand */}
        <Link
          href="/"
          className="block text-center text-3xl font-black tracking-[0.3em]"
        >
          ROVYN.
        </Link>

        <h1 className="mt-12 text-center text-3xl font-semibold">
          Welcome Back
        </h1>

        <p className="mt-3 text-center text-sm text-gray-500">
          Sign in to continue shopping.
        </p>

        {/* Form */}
        <form className="mt-10 space-y-6">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              Email Address
            </label>

            <input
              id="email"
              type="email"
              placeholder="name@example.com"
              required
              className="w-full border border-gray-300 px-4 py-3.5 outline-none transition focus:border-black"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              required
              className="w-full border border-gray-300 px-4 py-3.5 outline-none transition focus:border-black"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black py-4 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-gray-800"
          >
            Sign In
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold text-black underline underline-offset-4"
          >
            Create Account
          </Link>
        </p>

        <Link
          href="/"
          className="mt-8 block text-center text-xs uppercase tracking-widest text-gray-400 transition hover:text-black"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
