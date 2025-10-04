import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-eggshell flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-delft-blue mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-700 mb-4">页面未找到</h2>
        <p className="text-gray-600 mb-8">抱歉，您访问的页面不存在。</p>
        <Link
          href="/"
          className="bg-cambridge-blue text-white px-6 py-3 rounded-lg hover:bg-cambridge-blue/90 transition-colors duration-200"
        >
          返回首页
        </Link>
      </div>
    </div>
  )
}

