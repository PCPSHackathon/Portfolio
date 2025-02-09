'use client'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <section className='h-screen flex items-center justify-center'>
      <div className="text-center">
        <h2 className='font-lexend text-4xl'>Something went wrong!</h2>
        <p className='text-md py-4'>{error.message}</p>
        <button
          className='px-4 py-2 bg-white text-black rounded-md'
          onClick={
            () => reset()
          }
        >
          Try again
        </button>
    </div>
    </section>
  )
}