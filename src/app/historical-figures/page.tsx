'use client'

import Navigation from '@/components/Navigation'

export default function HistoricalFiguresPage() {
  const figures = [
    {
      name: '李白',
      period: '唐代',
      title: '诗仙',
      description: '唐代伟大的浪漫主义诗人，被誉为"诗仙"。其诗歌豪放飘逸，想象丰富，语言流转自然，音律和谐多变。',
      famousNames: ['李白', '太白', '青莲居士'],
      nameMeaning: '李：姓氏；白：纯洁、明亮，寓意光明磊落',
      poems: ['静夜思', '将进酒', '蜀道难', '行路难'],
      namingInspiration: '李白之名简洁有力，"白"字寓意纯洁光明，适合追求简洁大气的名字风格。'
    },
    {
      name: '苏轼',
      period: '宋代',
      title: '东坡居士',
      description: '北宋文学家、书画家、美食家，豪放派词人的代表。其作品豪放旷达，清新豪健，独具风格。',
      famousNames: ['苏轼', '子瞻', '东坡居士'],
      nameMeaning: '苏：姓氏；轼：车前横木，寓意稳重可靠',
      poems: ['水调歌头·明月几时有', '念奴娇·赤壁怀古', '江城子·密州出猎'],
      namingInspiration: '苏轼之名体现了稳重与才华的结合，"轼"字寓意可靠稳重，适合希望孩子稳重有才的父母。'
    },
    {
      name: '李清照',
      period: '宋代',
      title: '易安居士',
      description: '宋代女词人，婉约词派代表，有"千古第一才女"之称。其词语言清丽，善于运用白描手法。',
      famousNames: ['李清照', '易安居士'],
      nameMeaning: '李：姓氏；清：清澈、纯洁；照：光明、照耀',
      poems: ['声声慢·寻寻觅觅', '如梦令·常记溪亭日暮', '醉花阴·薄雾浓云愁永昼'],
      namingInspiration: '李清照之名清雅脱俗，"清照"寓意清澈光明，适合追求清雅文静的女孩名字。'
    },
    {
      name: '屈原',
      period: '战国',
      title: '楚辞之祖',
      description: '战国时期楚国诗人、政治家，中国浪漫主义文学的奠基人。其作品想象丰富，语言华美，情感真挚。',
      famousNames: ['屈原', '屈平', '正则', '灵均'],
      nameMeaning: '屈：姓氏；原：平原、根本；平：公正、平和',
      poems: ['离骚', '九歌', '九章', '天问'],
      namingInspiration: '屈原之名体现了正直与平和，"原"字寓意根本、本源，适合希望孩子保持本心的父母。'
    },
    {
      name: '王维',
      period: '唐代',
      title: '诗佛',
      description: '唐代诗人、画家，被誉为"诗佛"。其诗歌以山水田园诗见长，风格清新淡远，意境优美。',
      famousNames: ['王维', '摩诘'],
      nameMeaning: '王：姓氏；维：维系、保持，寓意稳重持重',
      poems: ['山居秋暝', '鸟鸣涧', '鹿柴', '竹里馆'],
      namingInspiration: '王维之名简洁稳重，"维"字寓意维系、保持，适合希望孩子稳重持重的父母。'
    },
    {
      name: '陶渊明',
      period: '东晋',
      title: '五柳先生',
      description: '东晋诗人、辞赋家，田园诗派创始人。其作品语言质朴自然，意境深远，体现了对自然和田园生活的热爱。',
      famousNames: ['陶渊明', '陶潜', '五柳先生'],
      nameMeaning: '陶：姓氏；渊：深水、深远；明：光明、明智',
      poems: ['桃花源记', '归去来兮辞', '饮酒·其五', '归园田居'],
      namingInspiration: '陶渊明之名寓意深远明智，"渊明"二字体现了深度与智慧的结合，适合追求内涵的父母。'
    }
  ]

  return (
    <div className="min-h-screen bg-eggshell">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-br from-sunset/10 to-cambridge-blue/10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-artistic font-bold text-delft-blue mb-6">
            历史人物
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            历史上许多著名人物的名字都蕴含着深刻的文化内涵和美好的寓意。
            通过了解这些历史人物的名字，我们可以从中汲取起名的灵感和智慧。
          </p>
        </div>
      </section>

      {/* Figures Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-delft-blue mb-12">
            历史名人名字解析
          </h2>
          
          <div className="space-y-12">
            {figures.map((figure, index) => (
              <div
                key={figure.name}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-bold text-delft-blue mb-2">
                    {figure.name}
                  </h3>
                  <p className="text-lg text-cambridge-blue font-medium mb-1">
                    {figure.period} · {figure.title}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-4">人物简介</h4>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {figure.description}
                    </p>
                    
                    <h4 className="text-lg font-bold text-gray-800 mb-4">名字解析</h4>
                    <div className="bg-eggshell p-4 rounded-lg mb-4">
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>名字：</strong>{figure.famousNames.join('、')}
                      </p>
                      <p className="text-sm text-gray-700">
                        <strong>寓意：</strong>{figure.nameMeaning}
                      </p>
                    </div>
                    
                    <h4 className="text-lg font-bold text-gray-800 mb-4">起名启示</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {figure.namingInspiration}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-4">代表作品</h4>
                    <div className="space-y-2 mb-6">
                      {figure.poems.map((poem, idx) => (
                        <span
                          key={idx}
                          className="inline-block bg-cambridge-blue text-white px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2"
                        >
                          {poem}
                        </span>
                      ))}
                    </div>
                    
                    <h4 className="text-lg font-bold text-gray-800 mb-4">起名建议</h4>
                    <div className="bg-sunset/20 p-4 rounded-lg">
                      <p className="text-sm text-gray-700 mb-3">
                        基于{figure.name}的名字特点，可以考虑以下起名方向：
                      </p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• 选择寓意美好的单字</li>
                        <li>• 注重音韵的和谐搭配</li>
                        <li>• 体现文化内涵和深度</li>
                        <li>• 结合现代审美和实用性</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Naming Principles Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-delft-blue mb-12">
            历史人物起名规律总结
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-eggshell p-6 rounded-xl">
              <h3 className="text-xl font-bold text-delft-blue mb-4">简洁有力</h3>
              <p className="text-gray-700 mb-4">
                历史名人的名字大多简洁明了，如李白、苏轼等，体现了"大道至简"的智慧。
              </p>
              <div className="space-y-2">
                <span className="inline-block bg-cambridge-blue text-white px-3 py-1 rounded text-sm mr-2">李白</span>
                <span className="inline-block bg-cambridge-blue text-white px-3 py-1 rounded text-sm mr-2">苏轼</span>
                <span className="inline-block bg-cambridge-blue text-white px-3 py-1 rounded text-sm mr-2">王维</span>
              </div>
            </div>
            
            <div className="bg-eggshell p-6 rounded-xl">
              <h3 className="text-xl font-bold text-delft-blue mb-4">寓意深刻</h3>
              <p className="text-gray-700 mb-4">
                每个字都有深刻的寓意，如李清照的"清照"寓意清澈光明，体现了对美好品德的追求。
              </p>
              <div className="space-y-2">
                <span className="inline-block bg-cambridge-blue text-white px-3 py-1 rounded text-sm mr-2">清照</span>
                <span className="inline-block bg-cambridge-blue text-white px-3 py-1 rounded text-sm mr-2">渊明</span>
                <span className="inline-block bg-cambridge-blue text-white px-3 py-1 rounded text-sm mr-2">正则</span>
              </div>
            </div>
            
            <div className="bg-eggshell p-6 rounded-xl">
              <h3 className="text-xl font-bold text-delft-blue mb-4">音韵和谐</h3>
              <p className="text-gray-700 mb-4">
                名字的读音朗朗上口，平仄搭配得当，体现了对音韵美的追求。
              </p>
              <div className="space-y-2">
                <span className="inline-block bg-cambridge-blue text-white px-3 py-1 rounded text-sm mr-2">陶渊明</span>
                <span className="inline-block bg-cambridge-blue text-white px-3 py-1 rounded text-sm mr-2">李清照</span>
                <span className="inline-block bg-cambridge-blue text-white px-3 py-1 rounded text-sm mr-2">屈原</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Application Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cambridge-blue/5 to-sunset/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-delft-blue mb-12">
            现代起名应用
          </h2>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-delft-blue mb-6 text-center">
              如何借鉴历史人物起名
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-4">选择寓意美好的字</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 从历史人物的名字中提取寓意美好的字</li>
                  <li>• 如"清"、"明"、"正"、"雅"等</li>
                  <li>• 结合现代审美和实用性</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-4">注重音韵搭配</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 学习历史人物名字的音韵规律</li>
                  <li>• 平仄搭配，朗朗上口</li>
                  <li>• 避免拗口和歧义</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-4">体现文化内涵</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 选择有文化底蕴的字</li>
                  <li>• 体现对传统文化的传承</li>
                  <li>• 寄托美好的期望和祝福</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-4">结合时代特色</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 在传统基础上融入现代元素</li>
                  <li>• 考虑现代人的审美习惯</li>
                  <li>• 确保名字的实用性和可读性</li>
                </ul>
              </div>
            </div>
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

