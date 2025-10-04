'use client'

import Navigation from '@/components/Navigation'
import { useState } from 'react'

// 名字数据
const nameData = {
  boys: [
    {
      name: '翰飞',
      pronunciation: 'Hàn Fēi',
      source: '诗经《节南山之什·小宛》',
      meaning: '高飞，寓意男孩志向高远，能够展翅高飞',
      fullQuote: '宛彼鸣鸠，翰飞戾天'
    },
    {
      name: '俊彦',
      pronunciation: 'Jùn Yàn',
      source: '诗经《郑风·羔裘》',
      meaning: '才智出众的人，寓意男孩才华横溢，将来能够成为国家的栋梁之才',
      fullQuote: '彼其之子，邦之彦兮'
    },
    {
      name: '嘉志',
      pronunciation: 'Jiā Zhì',
      source: '诗经《鹿鸣之什·采薇》',
      meaning: '美好的志向，寓意男孩有远大的理想和抱负',
      fullQuote: '我有旨酒，嘉宾式燕以敖'
    },
    {
      name: '明哲',
      pronunciation: 'Míng Zhé',
      source: '诗经《大雅·烝民》',
      meaning: '明智、通达，寓意男孩聪明睿智，能够明辨是非',
      fullQuote: '既明且哲，以保其身'
    },
    {
      name: '凯风',
      pronunciation: 'Kǎi Fēng',
      source: '诗经《邶风·凯风》',
      meaning: '和暖的风，寓意男孩性格温和，能够给人带来温暖和舒适',
      fullQuote: '凯风自南，吹彼棘薪'
    },
    {
      name: '邦彦',
      pronunciation: 'Bāng Yàn',
      source: '诗经《郑风·羔裘》',
      meaning: '国家的杰出人才，寓意男孩将来能够成为国家的栋梁之才',
      fullQuote: '彼其之子，邦之彦兮'
    },
    {
      name: '文羽',
      pronunciation: 'Wén Yǔ',
      source: '《大禹谟》',
      meaning: '文化与武力并重，寓意男孩智勇双全，能够施展才能与抱负',
      fullQuote: '帝乃诞敷文德，舞干羽于多阶，七旬有苗格'
    },
    {
      name: '谨仁',
      pronunciation: 'Jǐn Rén',
      source: '楚辞《九章》',
      meaning: '谨慎仁德，寓意男孩注重仁义，办事认真可靠，温和仁德',
      fullQuote: '重仁袭义兮，谨厚认为丰'
    },
    {
      name: '承德',
      pronunciation: 'Chéng Dé',
      source: '古典文学',
      meaning: '继承美德，寓意男孩能够传承和发扬美好的品德',
      fullQuote: '承天之德，继往开来'
    },
    {
      name: '鸿光',
      pronunciation: 'Hóng Guāng',
      source: '古典文学',
      meaning: '宏大的光芒，寓意男孩前途光明，能够发光发热',
      fullQuote: '鸿鹄之志，光耀门楣'
    }
  ],
  girls: [
    {
      name: '清涟',
      pronunciation: 'Qīng Lián',
      source: '诗经《伐檀》',
      meaning: '清澈的水波，寓意女孩心灵纯洁，美丽动人',
      fullQuote: '河水清且涟猗'
    },
    {
      name: '柔惠',
      pronunciation: 'Róu Huì',
      source: '诗经《崧高》',
      meaning: '柔和、贤惠，寓意女孩温柔善良，品德高尚',
      fullQuote: '申伯之德，柔惠且直'
    },
    {
      name: '静姝',
      pronunciation: 'Jìng Shū',
      source: '诗经《静女》',
      meaning: '娴静美好，寓意女孩端庄优雅，美丽大方',
      fullQuote: '静女其姝，俟我于城隅'
    },
    {
      name: '文茵',
      pronunciation: 'Wén Yīn',
      source: '诗经《秦风·小戎》',
      meaning: '车中的虎皮坐褥，寓意女孩有才华，有内涵',
      fullQuote: '文茵畅毂，驾我骐馵'
    },
    {
      name: '婉兮',
      pronunciation: 'Wǎn Xī',
      source: '诗经《国风·郑风·野有蔓草》',
      meaning: '美丽，寓意女孩温婉动人，美丽可爱',
      fullQuote: '有美一人，清扬婉兮'
    },
    {
      name: '英粲',
      pronunciation: 'Yīng Càn',
      source: '诗经《郑风·羔裘》',
      meaning: '美丽灿烂，寓意女孩光彩照人，美丽动人',
      fullQuote: '羔裘晏兮，三英粲兮'
    },
    {
      name: '南乔',
      pronunciation: 'Nán Qiáo',
      source: '诗经《国风·汉广》',
      meaning: '南方的乔木，寓意女孩高大美丽，不可企及',
      fullQuote: '南有乔木，不可休思'
    },
    {
      name: '甘棠',
      pronunciation: 'Gān Táng',
      source: '诗经《国风·甘棠》',
      meaning: '甘美的棠梨，寓意女孩甜美可爱，受人喜爱',
      fullQuote: '蔽芾甘棠，勿剪勿伐'
    },
    {
      name: '且惠',
      pronunciation: 'Qiě Huì',
      source: '诗经《邶风·燕燕》',
      meaning: '温和贤惠，寓意女孩温柔善良，品德高尚',
      fullQuote: '终温且惠，淑慎其身'
    },
    {
      name: '静好',
      pronunciation: 'Jìng Hǎo',
      source: '诗经《郑风·女曰鸡鸣》',
      meaning: '安静美好，寓意女孩生活和谐美满，性格温和',
      fullQuote: '琴瑟在御，莫不静好'
    },
    {
      name: '灵雨',
      pronunciation: 'Líng Yǔ',
      source: '诗经《鄘风·定之方中》',
      meaning: '及时雨，寓意女孩如甘露般滋润人心',
      fullQuote: '灵雨既零，命彼倌人'
    },
    {
      name: '彤炜',
      pronunciation: 'Tóng Wěi',
      source: '诗经《邶风·静女》',
      meaning: '红润有光泽，寓意女孩美丽动人，光彩照人',
      fullQuote: '彤管有炜，说怿女美'
    },
    {
      name: '德音',
      pronunciation: 'Dé Yīn',
      source: '诗经《郑风·有女同车》',
      meaning: '美好的声誉，寓意女孩品德高尚，声名远播',
      fullQuote: '彼美孟姜，德音不忘'
    },
    {
      name: '伊湄',
      pronunciation: 'Yī Méi',
      source: '诗经《秦风·蒹葭》',
      meaning: '在水边，寓意女孩如水般温柔，美丽动人',
      fullQuote: '所谓伊人，在水之湄'
    },
    {
      name: '清扬',
      pronunciation: 'Qīng Yáng',
      source: '诗经《鄘风·君子偕老》',
      meaning: '眉目清秀，寓意女孩容貌清秀，气质高雅',
      fullQuote: '子之清扬，扬且之颜也'
    }
  ]
}

export default function HomePage() {
  const [selectedGender, setSelectedGender] = useState<'boys' | 'girls'>('boys')
  const [selectedNames, setSelectedNames] = useState(nameData.boys)

  const handleGenderChange = (gender: 'boys' | 'girls') => {
    setSelectedGender(gender)
    setSelectedNames(nameData[gender])
  }

  return (
    <div className="min-h-screen bg-eggshell">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cambridge-blue/10 to-sunset/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-artistic font-bold text-delft-blue mb-6 animate-fade-in-up">
            诗经起名字
          </h1>
          <h2 className="text-3xl md:text-5xl font-artistic font-bold text-cambridge-blue mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            楚辞起名字
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            《诗经》和《楚辞》是中国古代文学的两部经典之作，其中蕴含着丰富的文化内涵和艺术价值。
            许多家长在给孩子取名时，会从这两部经典中汲取灵感，为孩子取一个富有文化底蕴的名字。
          </p>
          
          {/* Gender Selection */}
          <div className="flex justify-center mb-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="bg-white rounded-full p-2 shadow-lg">
              <button
                onClick={() => handleGenderChange('boys')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedGender === 'boys'
                    ? 'bg-cambridge-blue text-white shadow-md'
                    : 'text-gray-600 hover:text-cambridge-blue'
                }`}
              >
                男宝宝起名
              </button>
              <button
                onClick={() => handleGenderChange('girls')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedGender === 'girls'
                    ? 'bg-cambridge-blue text-white shadow-md'
                    : 'text-gray-600 hover:text-cambridge-blue'
                }`}
              >
                女宝宝起名
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Names Display Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-delft-blue mb-12">
            {selectedGender === 'boys' ? '精选男孩名字' : '精选女孩名字'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {selectedNames.map((name, index) => (
              <div
                key={name.name}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <div className="text-center mb-4">
                  <h4 className="text-3xl font-artistic font-bold text-delft-blue mb-2">
                    {name.name}
                  </h4>
                  <p className="text-lg text-cambridge-blue font-medium">
                    {name.pronunciation}
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-eggshell p-3 rounded-lg">
                    <p className="text-sm font-medium text-gray-600 mb-1">出处</p>
                    <p className="text-sm text-gray-800">{name.source}</p>
                    <p className="text-xs text-gray-500 italic mt-1">"{name.fullQuote}"</p>
                  </div>
                  
                  <div className="bg-sunset/20 p-3 rounded-lg">
                    <p className="text-sm font-medium text-gray-600 mb-1">寓意</p>
                    <p className="text-sm text-gray-800">{name.meaning}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-delft-blue mb-12">
            为什么选择古典文学起名？
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-cambridge-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">📚</span>
              </div>
              <h4 className="text-xl font-bold text-delft-blue mb-3">文化底蕴深厚</h4>
              <p className="text-gray-600">
                《诗经》和《楚辞》承载着中华文化的精髓，从中选取的名字具有深厚的文化内涵。
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-burnt-sienna rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🎵</span>
              </div>
              <h4 className="text-xl font-bold text-delft-blue mb-3">音韵优美动听</h4>
              <p className="text-gray-600">
                古典文学中的词汇经过千百年锤炼，音韵搭配和谐，读起来朗朗上口。
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-sunset rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">✨</span>
              </div>
              <h4 className="text-xl font-bold text-delft-blue mb-3">寓意美好深远</h4>
              <p className="text-gray-600">
                每个名字都蕴含着美好的寓意，寄托着父母对孩子的期望和祝福。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cambridge-blue to-delft-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">
            开始为您的孩子选择一个有意义的名字
          </h3>
          <p className="text-xl mb-8 opacity-90">
            探索更多《诗经》和《楚辞》中的经典名字，传承中华文化之美
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/tone-rhythm"
              className="bg-white text-cambridge-blue px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              了解起名声调韵律
            </a>
            <a
              href="/shijing"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-cambridge-blue transition-colors duration-300"
            >
              浏览诗经原文
            </a>
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

