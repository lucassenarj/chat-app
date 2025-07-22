import { createRoute } from "@tanstack/react-router"
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import type { RootRoute } from "@tanstack/react-router"
import type { SignInFormData } from "@/types/login";
import Layout from "@/components/Layout";
import useSignIn from "@/services/api/signIn";
import useAuthentication from "@/hooks/useAuthentication";

function LoginPage() {
  const { isAuthenticated } = useAuthentication();

  if (isAuthenticated) {
    window.location.href = '/chat';
    return null;
  }

  const { register, handleSubmit, formState: { errors } } = useForm<SignInFormData>();
  const { mutate: signIn } = useSignIn();

  const onSubmit: SubmitHandler<SignInFormData> = (data) => {
    signIn(data, {
      onSuccess: () => {
        // Redirect to home page or perform any other action after successful sign-in
        window.location.href = '/chat';
      },
      onError: (error) => {
        console.error('Sign-in error:', error);
        // Handle error, e.g., show a notification
      }
    })
  }

  return (
    <Layout>
      <section className="bg-gray-50 dark:bg-gray-900 w-full h-full">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to access your messages
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                  <input
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    {...register("name", { required: "Name is required" })}
                  />
                </div>
                <div>
                  <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                  <input
                    type="text"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    {...register("username", { required: "Username is required" })}
                  />
                </div>
                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default (parentRoute: RootRoute) =>
  createRoute({
    path: '/',
    component: LoginPage,
    getParentRoute: () => parentRoute,
  })