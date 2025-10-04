export default function Loading() {
  return (
    <div className="min-h-screen bg-eggshell flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cambridge-blue mx-auto mb-4"></div>
        <p className="text-gray-600">加载中...</p>
      </div>
    </div>
  )
}

