'use client'

import Navigation from '@/components/Navigation'

export default function ShijingPage() {
  const poems = [
    {
      title: '关雎',
      category: '国风·周南',
      content: `关关雎鸠，在河之洲。窈窕淑女，君子好逑。
参差荇菜，左右流之。窈窕淑女，寤寐求之。
求之不得，寤寐思服。悠哉悠哉，辗转反侧。
参差荇菜，左右采之。窈窕淑女，琴瑟友之。
参差荇菜，左右芼之。窈窕淑女，钟鼓乐之。`,
      meaning: '这首诗描写了君子对淑女的追求，体现了古代对美好爱情的向往。',
      namingSuggestions: ['关雎', '窈窕', '淑女', '君子', '好逑']
    },
    {
      title: '桃夭',
      category: '国风·周南',
      content: `桃之夭夭，灼灼其华。之子于归，宜其室家。
桃之夭夭，有蕡其实。之子于归，宜其家室。
桃之夭夭，其叶蓁蓁。之子于归，宜其家人。`,
      meaning: '这首诗以桃花比喻新娘的美丽，祝愿新娘婚后生活幸福美满。',
      namingSuggestions: ['桃夭', '灼灼', '蓁蓁', '宜家', '宜室']
    },
    {
      title: '静女',
      category: '国风·邶风',
      content: `静女其姝，俟我于城隅。爱而不见，搔首踟蹰。
静女其娈，贻我彤管。彤管有炜，说怿女美。
自牧归荑，洵美且异。匪女之为美，美人之贻。`,
      meaning: '这首诗描写了男子对静女的思念，表现了纯真的爱情。',
      namingSuggestions: ['静女', '其姝', '其娈', '彤管', '洵美']
    },
    {
      title: '蒹葭',
      category: '国风·秦风',
      content: `蒹葭苍苍，白露为霜。所谓伊人，在水一方。
溯洄从之，道阻且长。溯游从之，宛在水中央。
蒹葭萋萋，白露未晞。所谓伊人，在水之湄。
溯洄从之，道阻且跻。溯游从之，宛在水中坻。
蒹葭采采，白露未已。所谓伊人，在水之涘。
溯洄从之，道阻且右。溯游从之，宛在水中沚。`,
      meaning: '这首诗以蒹葭起兴，描写了对伊人的追求，体现了对美好事物的向往。',
      namingSuggestions: ['蒹葭', '伊人', '在水', '溯洄', '宛在']
    },
    {
      title: '硕鼠',
      category: '国风·魏风',
      content: `硕鼠硕鼠，无食我黍！三岁贯女，莫我肯顾。
逝将去女，适彼乐土。乐土乐土，爰得我所。
硕鼠硕鼠，无食我麦！三岁贯女，莫我肯德。
逝将去女，适彼乐国。乐国乐国，爰得我直。
硕鼠硕鼠，无食我苗！三岁贯女，莫我肯劳。
逝将去女，适彼乐郊。乐郊乐郊，谁之永号？`,
      meaning: '这首诗以硕鼠比喻剥削者，表达了人民对美好生活的向往。',
      namingSuggestions: ['乐土', '乐国', '乐郊', '永号', '适彼']
    }
  ]

  return (
    <div className="min-h-screen bg-eggshell">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-br from-cambridge-blue/10 to-sunset/10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-artistic font-bold text-delft-blue mb-6">
            《诗经》原文
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            《诗经》是中国古代诗歌的开端，收集了西周初年至春秋中叶的诗歌305首。
            这些诗歌不仅具有极高的文学价值，更是起名取字的宝库。
          </p>
        </div>
      </section>

      {/* Poems Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-delft-blue mb-12">
            经典诗篇选读
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
                  <p className="text-cambridge-blue font-medium">
                    {poem.category}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-4">原文</h4>
                    <div className="bg-eggshell p-6 rounded-lg">
                      <pre className="text-sm leading-relaxed text-gray-800 font-mono whitespace-pre-wrap">
                        {poem.content}
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
                          className="bg-cambridge-blue text-white px-3 py-1 rounded-full text-sm font-medium"
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
            《诗经》起名指南
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-eggshell p-6 rounded-xl">
              <h3 className="text-xl font-bold text-delft-blue mb-4">自然意象</h3>
              <p className="text-gray-700 mb-4">
                《诗经》中大量运用自然意象，如花鸟虫鱼、山川河流等，这些词汇寓意美好，适合起名。
              </p>
              <div className="space-y-2">
                <span className="inline-block bg-cambridge-blue text-white px-3 py-1 rounded text-sm mr-2">桃夭</span>
                <span className="inline-block bg-cambridge-blue text-white px-3 py-1 rounded text-sm mr-2">蒹葭</span>
                <span className="inline-block bg-cambridge-blue text-white px-3 py-1 rounded text-sm mr-2">关雎</span>
              </div>
            </div>
            
            <div className="bg-eggshell p-6 rounded-xl">
              <h3 className="text-xl font-bold text-delft-blue mb-4">品德词汇</h3>
              <p className="text-gray-700 mb-4">
                诗中赞美品德高尚的词汇，如贤淑、贞洁、仁爱等，体现了古人对美好品德的追求。
              </p>
              <div className="space-y-2">
                <span className="inline-block bg-cambridge-blue text-white px-3 py-1 rounded text-sm mr-2">淑女</span>
                <span className="inline-block bg-cambridge-blue text-white px-3 py-1 rounded text-sm mr-2">君子</span>
                <span className="inline-block bg-cambridge-blue text-white px-3 py-1 rounded text-sm mr-2">静女</span>
              </div>
            </div>
            
            <div className="bg-eggshell p-6 rounded-xl">
              <h3 className="text-xl font-bold text-delft-blue mb-4">情感表达</h3>
              <p className="text-gray-700 mb-4">
                诗中表达美好情感的词汇，如思念、爱慕、祝福等，寄托了父母对孩子的美好期望。
              </p>
              <div className="space-y-2">
                <span className="inline-block bg-cambridge-blue text-white px-3 py-1 rounded text-sm mr-2">思服</span>
                <span className="inline-block bg-cambridge-blue text-white px-3 py-1 rounded text-sm mr-2">好逑</span>
                <span className="inline-block bg-cambridge-blue text-white px-3 py-1 rounded text-sm mr-2">宜家</span>
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

