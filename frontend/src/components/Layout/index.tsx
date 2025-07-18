import NavBar from '../NavBar';

type ILayout = {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <div className='bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 min-h-screen'>
      <NavBar />
      <main className="container mx-auto px-4 py-6 max-w-screen-xl mx-auto flex flex-col items-start gap-4 sm:flex-row">
        { children }
      </main>
    </div>
  )
}

