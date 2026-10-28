
import Link from "next/link";

export default function SignUpPage() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-white px-4 text-black">
      <div className="w-full max-w-md">
        <h1 className="text-center text-3xl font-bold tracking-widest">
          ROVYN.
        </h1>

        <h2 className="mt-8 text-center text-2xl font-semibold">
          Create Account
        </h2>

        <p className="mt-2 text-center text-sm text-gray-500">
          Join ROVYN for a better shopping experience
        </p>

        <form className="mt-8 space-y-5">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              required
              className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Create a password"
              minLength={8}
              required
              className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black py-3 text-white transition hover:bg-gray-800"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/signin" className="font-semibold text-black underline">
            Sign In
          </Link>
        </p>
      </div>
    </main>
  );
}
