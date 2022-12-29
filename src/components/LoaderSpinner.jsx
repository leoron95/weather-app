
export const LoaderSpinner = () => {
    return (
    <div className="flex justify-center items-center h-screen bg-[#1E213A]">
    <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#1E213A] rounded-full border-2 border-[#1E213A]"></div>
    </div>
</div>
  )
}
