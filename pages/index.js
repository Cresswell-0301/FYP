export default function Home(){
  return(
    <div className="flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-800">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-blue-300">
          Login / Sign Up
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-blue-300">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-blue-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-blue-300">
                Password
              </label>
            </div>

            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="text-xs float-right">
              <a href="#" className="font-semibold text-indigo-300 hover:text-indigo-500 hover:underline">
                Forgot password?
              </a>
            </div>

          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
              Proceed
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500 pb-4">
          --------------------------<span className="text-gray-450"> or Login with </span>--------------------------
        </p>

        <div class="px-6 sm:px-0 max-w-sm">
          <button type="button"
          className="text-gray-600
           font-semibold
           w-full
           bg-[#ffffff]
           hover:bg-slate-300
           hover:text-black 
           focus:ring-4 
           focus:outline-none 
           focus:ring-[#4285F4]/50 
           rounded-lg 
           text-base 
           px-5 
           py-2.5 
           text-center 
           inline-flex 
           items-center 
           justify-between 
           dark:focus:ring-[#4285F4]/55 
           mr-2 mb-2">
           <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
           Sign up with Google
           <span></span>
          </button>
        </div>

        <button type="button" class="py-2 px-4 max-w-md flex justify-between items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
          <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
          </svg>
          Sign in with Facebook
          <span></span>
        </button>

      </div>
    </div>
  )
}