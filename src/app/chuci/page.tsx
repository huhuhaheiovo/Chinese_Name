'use client'

import Navigation from '@/components/Navigation'

export default function ChuciPage() {
  const poems = [
    {
      title: '离骚',
      author: '屈原',
      excerpt: `帝高阳之苗裔兮，朕皇考曰伯庸。
摄提贞于孟陬兮，惟庚寅吾以降。
皇览揆余初度兮，肇锡余以嘉名：
名余曰正则兮，字余曰灵均。
纷吾既有此内美兮，又重之以修能。
扈江离与辟芷兮，纫秋兰以为佩。
汨余若将不及兮，恐年岁之不吾与。
朝搴阰之木兰兮，夕揽洲之宿莽。
日月忽其不淹兮，春与秋其代序。
惟草木之零落兮，恐美人之迟暮。`,
      meaning: '《离骚》是屈原的代表作，表达了诗人对理想的不懈追求和对现实的深刻反思。',
      namingSuggestions: ['正则', '灵均', '修能', '江离', '辟芷', '秋兰', '木兰', '宿莽']
    },
    {
      title: '九歌·东皇太一',
      author: '屈原',
      excerpt: `吉日兮辰良，穆将愉兮上皇。
抚长剑兮玉珥，璆锵鸣兮琳琅。
瑶席兮玉瑱，盍将把兮琼芳。
蕙肴蒸兮兰藉，奠桂酒兮椒浆。
扬枹兮拊鼓，疏缓节兮安歌，陈竽瑟兮浩倡。
灵偃蹇兮姣服，芳菲菲兮满堂。
五音纷兮繁会，君欣欣兮乐康。`,
      meaning: '这首诗描写了祭祀东皇太一的盛大场面，体现了对神灵的虔诚和敬畏。',
      namingSuggestions: ['辰良', '琳琅', '琼芳', '蕙肴', '兰藉', '桂酒', '椒浆', '乐康']
    },
    {
      title: '九歌·山鬼',
      author: '屈原',
      excerpt: `若有人兮山之阿，被薜荔兮带女萝。
既含睇兮又宜笑，子慕予兮善窈窕。
乘赤豹兮从文狸，辛夷车兮结桂旗。
被石兰兮带杜衡，折芳馨兮遗所思。
余处幽篁兮终不见天，路险难兮独后来。
表独立兮山之上，云容容兮而在下。
杳冥冥兮羌昼晦，东风飘兮神灵雨。
留灵修兮憺忘归，岁既晏兮孰华予？`,
      meaning: '这首诗描写了山鬼的美丽形象和孤独心境，体现了诗人对美好事物的向往。',
      namingSuggestions: ['山鬼', '窈窕', '赤豹', '文狸', '辛夷', '桂旗', '石兰', '杜衡', '芳馨', '灵修']
    },
    {
      title: '九章·橘颂',
      author: '屈原',
      excerpt: `后皇嘉树，橘徕服兮。
受命不迁，生南国兮。
深固难徙，更壹志兮。
绿叶素华，纷其可喜兮。
曾枝剡棘，圆果抟兮。
青黄杂糅，文章烂兮。
精色内白，类任道兮。
纷缊宜修，姱而不丑兮。
嗟尔幼志，有以异兮。
独立不迁，岂不可喜兮？`,
      meaning: '这首诗以橘树为喻，赞美了坚贞不屈、独立不迁的高尚品格。',
      namingSuggestions: ['橘颂', '嘉树', '深固', '壹志', '素华', '精色', '内白', '任道', '宜修', '独立']
    },
    {
      title: '九辩',
      author: '宋玉',
      excerpt: `悲哉，秋之为气也！
萧瑟兮草木摇落而变衰。
憭栗兮若在远行，登山临水兮送将归。
泬寥兮天高而气清，寂寥兮收潦而水清。
憯悽增欷兮，薄寒之中人，
怆怳懭悢兮，去故而就新。
坎廪兮贫士失职而志不平，
廓落兮羁旅而无友生，
惆怅兮而私自怜。`,
      meaning: '这首诗描写了秋天的萧瑟景象，表达了诗人对人生际遇的感慨。',
      namingSuggestions: ['秋气', '萧瑟', '泬寥', '寂寥', '清寒', '廓落', '惆怅', '自怜']
    }
  ]

  return (
    <div className="min-h-screen bg-eggshell">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-br from-burnt-sienna/10 to-cambridge-blue/10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-artistic font-bold text-delft-blue mb-6">
            《楚辞》原文
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            《楚辞》是战国时期楚国诗人屈原等人创作的诗歌总集，以其浪漫主义风格和丰富的想象力著称。
            其中的词汇华美典雅，是起名取字的珍贵资源。
          </p>
        </div>
      </section>

      {/* Poems Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-delft-blue mb-12">
            经典篇章选读
          </h2>
          
          <div className="space-y-12">
            {poems.map((poem, index) => (
              <div
                key={poem.title}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-delft-blue mb-2">
                    {poem.title}
                  </h3>
                  <p className="text-burnt-sienna font-medium">
                    {poem.author}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-4">原文节选</h4>
                    <div className="bg-eggshell p-6 rounded-lg">
                      <pre className="text-sm leading-relaxed text-gray-800 font-mono whitespace-pre-wrap">
                        {poem.excerpt}
                      </pre>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-4">诗意解读</h4>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {poem.meaning}
                    </p>
                    
                    <h4 className="text-lg font-bold text-gray-800 mb-4">起名建议</h4>
                    <div className="flex flex-wrap gap-2">
                      {poem.namingSuggestions.map((suggestion, idx) => (
                        <span
                          key={idx}
                          className="bg-burnt-sienna text-white px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {suggestion}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Naming Guide Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-delft-blue mb-12">
            《楚辞》起名指南
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-eggshell p-6 rounded-xl">
              <h3 className="text-xl font-bold text-delft-blue mb-4">香草意象</h3>
              <p className="text-gray-700 mb-4">
                《楚辞》中大量运用香草意象，如兰、芷、蕙等，象征高洁的品格和美好的品质。
              </p>
              <div className="space-y-2">
                <span className="inline-block bg-burnt-sienna text-white px-3 py-1 rounded text-sm mr-2">秋兰</span>
                <span className="inline-block bg-burnt-sienna text-white px-3 py-1 rounded text-sm mr-2">辟芷</span>
                <span className="inline-block bg-burnt-sienna text-white px-3 py-1 rounded text-sm mr-2">蕙肴</span>
              </div>
            </div>
            
            <div className="bg-eggshell p-6 rounded-xl">
              <h3 className="text-xl font-bold text-delft-blue mb-4">自然元素</h3>
              <p className="text-gray-700 mb-4">
                诗中运用云、川、辰等自然元素，体现了开阔的格局和远大的志向。
              </p>
              <div className="space-y-2">
                <span className="inline-block bg-burnt-sienna text-white px-3 py-1 rounded text-sm mr-2">云容</span>
                <span className="inline-block bg-burnt-sienna text-white px-3 py-1 rounded text-sm mr-2">山川</span>
                <span className="inline-block bg-burnt-sienna text-white px-3 py-1 rounded text-sm mr-2">辰良</span>
              </div>
            </div>
            
            <div className="bg-eggshell p-6 rounded-xl">
              <h3 className="text-xl font-bold text-delft-blue mb-4">哲学词汇</h3>
              <p className="text-gray-700 mb-4">
                诗中蕴含深刻的哲学思想，如修、昭、怀等词汇，寄托了对德行和修养的追求。
              </p>
              <div className="space-y-2">
                <span className="inline-block bg-burnt-sienna text-white px-3 py-1 rounded text-sm mr-2">修能</span>
                <span className="inline-block bg-burnt-sienna text-white px-3 py-1 rounded text-sm mr-2">昭质</span>
                <span className="inline-block bg-burnt-sienna text-white px-3 py-1 rounded text-sm mr-2">怀瑾</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cambridge-blue/5 to-burnt-sienna/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-delft-blue mb-12">
            《诗经》与《楚辞》起名对比
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-cambridge-blue mb-6 text-center">《诗经》风格</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-cambridge-blue mr-3">•</span>
                  <span className="text-gray-700">语言朴实自然，贴近生活</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cambridge-blue mr-3">•</span>
                  <span className="text-gray-700">多描写现实生活场景</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cambridge-blue mr-3">•</span>
                  <span className="text-gray-700">适合起温和、文雅的名字</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cambridge-blue mr-3">•</span>
                  <span className="text-gray-700">音韵和谐，朗朗上口</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-burnt-sienna mb-6 text-center">《楚辞》风格</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-burnt-sienna mr-3">•</span>
                  <span className="text-gray-700">语言华美典雅，富有想象力</span>
                </li>
                <li className="flex items-start">
                  <span className="text-burnt-sienna mr-3">•</span>
                  <span className="text-gray-700">多运用神话传说和香草意象</span>
                </li>
                <li className="flex items-start">
                  <span className="text-burnt-sienna mr-3">•</span>
                  <span className="text-gray-700">适合起大气、有内涵的名字</span>
                </li>
                <li className="flex items-start">
                  <span className="text-burnt-sienna mr-3">•</span>
                  <span className="text-gray-700">词汇丰富，寓意深远</span>
                </li>
              </ul>
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

