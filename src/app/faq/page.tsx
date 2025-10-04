'use client'

import Navigation from '@/components/Navigation'
import { useState } from 'react'

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const faqData = [
    {
      question: '什么是诗经起名？',
      answer: '诗经起名是指从《诗经》这部中国古代诗歌总集中选取词汇来为孩子起名。《诗经》收集了西周初年至春秋中叶的诗歌305首，其中蕴含着丰富的文化内涵和美好的寓意，是起名取字的珍贵资源。通过诗经起名，可以为孩子选择一个既有文化底蕴又寓意美好的名字。'
    },
    {
      question: '什么是楚辞起名？',
      answer: '楚辞起名是指从《楚辞》这部战国时期楚国诗人创作的诗歌总集中选取词汇来为孩子起名。《楚辞》以其浪漫主义风格和丰富的想象力著称，其中的词汇华美典雅，寓意深远，特别适合起大气、有内涵的名字。'
    },
    {
      question: '为什么说"女诗经男楚辞"？',
      answer: '这个说法源于古代起名的传统观念。《诗经》中的诗歌多描写现实生活，语言朴实自然，适合起温和、文雅的名字，因此更适合女孩；而《楚辞》语言华美典雅，富有想象力，适合起大气、有内涵的名字，因此更适合男孩。当然，这只是传统观念，现代起名可以灵活运用。'
    },
    {
      question: '起名声调韵律有什么重要性？',
      answer: '声调韵律是中文起名的重要因素。恰当的声调组合能使名字发音流畅，给人以韵律美感。一般来说，应该避免全平或全仄，理想的组合是平仄相间，这样读起来朗朗上口，富有节奏感。同时，还要注意首字声调与姓氏的协调，以及尾字声调的选择。'
    },
    {
      question: '如何选择好听的名字？',
      answer: '选择好听的名字需要考虑多个方面：1）音韵和谐，平仄搭配得当；2）寓意美好，寄托父母的期望；3）文化内涵丰富，体现传统文化底蕴；4）避免谐音尴尬和生僻难认的字；5）结合现代审美和实用性。建议多参考古典文学作品，从中汲取灵感。'
    },
    {
      question: '男宝宝起名有什么特点？',
      answer: '男宝宝起名通常具有以下特点：1）寓意阳刚、坚强、有担当，如"志强"、"浩然"等；2）体现才华和智慧，如"文博"、"智轩"等；3）寄托远大志向，如"志远"、"鹏程"等；4）音韵雄浑有力，读起来有气势；5）可以借鉴《楚辞》中的大气词汇。'
    },
    {
      question: '女宝宝起名有什么特点？',
      answer: '女宝宝起名通常具有以下特点：1）寓意温柔、美丽、贤淑，如"婉清"、"雅静"等；2）体现文雅和气质，如"诗涵"、"书瑶"等；3）寄托美好品德，如"慧心"、"德馨"等；4）音韵柔美动听，读起来有韵味；5）可以借鉴《诗经》中的清雅词汇。'
    },
    {
      question: '历史上好听的名字有哪些？',
      answer: '历史上有很多好听的名字，如：李白（诗仙，名字简洁有力）、苏轼（东坡居士，寓意稳重可靠）、李清照（易安居士，清雅脱俗）、屈原（楚辞之祖，正直平和）、王维（诗佛，稳重持重）、陶渊明（五柳先生，深远明智）等。这些名字都具有深刻的文化内涵和美好的寓意。'
    },
    {
      question: '起名时如何避免常见问题？',
      answer: '起名时需要注意避免以下常见问题：1）谐音尴尬，如"杜子腾"、"史珍香"等；2）生僻难认的字，除非有特殊寓意；3）意义模糊或负面的字；4）声母韵母重复，影响发音清晰度；5）过于复杂或拗口的组合；6）与姓氏搭配不当。建议多读几遍，确保朗朗上口。'
    },
    {
      question: '如何结合现代审美起名？',
      answer: '结合现代审美起名需要注意：1）在传统基础上融入现代元素，如"梓涵"、"子轩"等；2）考虑现代人的审美习惯和接受度；3）确保名字的实用性和可读性；4）避免过于古板或过于新潮；5）注重名字的整体美感和协调性；6）可以参考现代名人的起名方式，但要有自己的特色。'
    }
  ]

  return (
    <div className="min-h-screen bg-eggshell">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-br from-cambridge-blue/10 to-sunset/10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-artistic font-bold text-delft-blue mb-6">
            常见问题
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            关于诗经起名、楚辞起名以及起名声调韵律的常见问题解答，
            帮助您更好地了解古典文学起名的精髓和技巧。
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-delft-blue mb-12">
            常见问题解答
          </h2>
          
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-up"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-bold text-delft-blue pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-5 h-5 text-cambridge-blue transform transition-transform duration-200 ${
                        openItems.includes(index) ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-delft-blue mb-12">
            更多资源
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-eggshell p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-cambridge-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">📚</span>
              </div>
              <h3 className="text-xl font-bold text-delft-blue mb-3">诗经原文</h3>
              <p className="text-gray-700 mb-4">
                浏览《诗经》原文，了解每首诗的背景和寓意，为起名提供更多灵感。
              </p>
              <a
                href="/shijing"
                className="inline-block bg-cambridge-blue text-white px-4 py-2 rounded-lg hover:bg-cambridge-blue/90 transition-colors duration-200"
              >
                查看原文
              </a>
            </div>
            
            <div className="bg-eggshell p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-burnt-sienna rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🎭</span>
              </div>
              <h3 className="text-xl font-bold text-delft-blue mb-3">楚辞原文</h3>
              <p className="text-gray-700 mb-4">
                探索《楚辞》原文，感受浪漫主义诗歌的魅力，发现更多起名素材。
              </p>
              <a
                href="/chuci"
                className="inline-block bg-burnt-sienna text-white px-4 py-2 rounded-lg hover:bg-burnt-sienna/90 transition-colors duration-200"
              >
                查看原文
              </a>
            </div>
            
            <div className="bg-eggshell p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-sunset rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🎵</span>
              </div>
              <h3 className="text-xl font-bold text-delft-blue mb-3">声调韵律</h3>
              <p className="text-gray-700 mb-4">
                学习起名声调韵律的原理和技巧，让名字更加朗朗上口，富有美感。
              </p>
              <a
                href="/tone-rhythm"
                className="inline-block bg-sunset text-white px-4 py-2 rounded-lg hover:bg-sunset/90 transition-colors duration-200"
              >
                学习技巧
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cambridge-blue to-delft-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            还有疑问？
          </h2>
          <p className="text-xl mb-8 opacity-90">
            如果您还有其他关于起名的问题，欢迎联系我们，我们将竭诚为您解答。
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4">中国传统文化起名研究院</h3>
            <p className="text-lg opacity-90">
              专注于中文起名文化传承，提供专业的起名指导和声调搭配建议。
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-eggshell text-gray-800 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold text-cambridge-blue mb-4">友情链接</h4>
              <a
                href="https://playloltcg.help/cardBuilder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-cambridge-blue transition-colors duration-200"
              >
                符文战场卡组构筑器
              </a>
            </div>
            <div>
              <h4 className="text-xl font-bold text-cambridge-blue mb-4">关于我们</h4>
              <p className="text-gray-600">
                专注于中文起名文化传承，提供专业的起名指导和声调搭配建议。
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-cambridge-blue mb-4">联系方式</h4>
              <p className="text-gray-600">中国传统文化起名研究院</p>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-8 pt-8 text-center">
            <p className="text-gray-500">© 2024 诗经起名字，楚辞起名字. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

