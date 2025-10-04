'use client'

import { useState } from 'react'

export default function ToneRhythmPage() {
  const [isPromptVisible, setIsPromptVisible] = useState(true)

  return (
    <div className="min-h-screen bg-eggshell">
      <div className="page-container relative w-full h-screen overflow-hidden flex">
        {/* Diagonal Layout Background */}
        <div className="absolute w-[200%] h-full transform -rotate-[10deg] origin-top-left -left-1/2 -top-[20%] flex">
          <div className="relative flex-1 p-8 h-[140%] bg-white z-[1]"></div>
          <div className="relative flex-1 p-8 h-[140%] bg-eggshell text-gray-800"></div>
          <div className="relative flex-1 p-8 h-[140%] bg-gray-50"></div>
        </div>

        {/* Content Wrapper */}
        <div className="absolute top-0 left-0 w-full h-full p-8 flex flex-col overflow-y-auto z-10">
          {/* Header */}
          <header className="flex justify-between items-center mb-8">
            <div className="text-4xl font-bold font-artistic leading-none text-cambridge-blue">
              起名声调韵律
            </div>
            <div className="w-8 h-6 flex flex-col justify-between cursor-pointer">
              <div className="w-full h-1 bg-cambridge-blue"></div>
              <div className="w-full h-1 bg-cambridge-blue"></div>
              <div className="w-full h-1 bg-cambridge-blue"></div>
            </div>
          </header>

          {/* Main Content */}
          <main className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
            {/* Left Column - Naming Principles */}
            <article className="p-6">
              <h2 className="text-xl font-bold mb-4 border-b-2 border-cambridge-blue pb-2 text-cambridge-blue">
                起名声调原理
              </h2>
              <p className="text-sm mb-4 leading-relaxed">
                中文起名中，声调搭配是一个关键因素。恰当的声调组合能使名字发音流畅，给人以韵律美感。
              </p>

              <div className="bg-gray-100 p-4 rounded mb-4 relative overflow-hidden">
                <div className="relative z-10">
                  <p><strong>平声</strong>：一声（阴平）、二声（阳平）—— 音调平稳或上扬</p>
                  <p><strong>仄声</strong>：三声（上声）、四声（去声）—— 音调转折或下沉</p>
                </div>
              </div>

              <p className="text-sm mb-4 leading-relaxed">
                起名时若能平仄交替搭配，会更有节奏感和音律美：
              </p>

              <div className="bg-gray-100 p-4 rounded mb-4 relative overflow-hidden">
                <div className="relative z-10">
                  <p>✓ 李向阳（Lǐ Xiàngyáng）—— 三声→四声→二声，平仄相间，朗朗上口</p>
                  <p>✗ 李雨柳（Lǐ Yǔliǔ）—— 三声→三声→三声，全是三声，发音容易变调，很拗口</p>
                </div>
              </div>

              <h2 className="text-xl font-bold mb-4 border-b-2 border-cambridge-blue pb-2 text-cambridge-blue">
                起名声调搭配原则
              </h2>

              <p className="text-sm mb-4 leading-relaxed">
                <span className="font-bold text-cambridge-blue">1. 避免全平或全仄</span><br />
                连续相同声调的名字往往拗口难念，缺乏韵律感。
              </p>

              <p className="text-sm mb-4 leading-relaxed">
                <span className="font-bold text-cambridge-blue">2. 理想的声调组合模式</span>
              </p>
              <div className="bg-gray-100 p-4 rounded mb-4 relative overflow-hidden">
                <div className="relative z-10">
                  <p><strong>仄平仄</strong>：李白石（Lǐ Bái Shí，三声→二声→二声）</p>
                  <p><strong>平仄平</strong>：周恩来（Zhōu Ēn Lái，一声→一声→二声）</p>
                </div>
              </div>

              <p className="text-sm mb-4 leading-relaxed">
                <span className="font-bold text-cambridge-blue">3. 首字声调与姓氏的协调</span>
              </p>
              <div className="bg-gray-100 p-4 rounded mb-4 relative overflow-hidden">
                <div className="relative z-10">
                  <p>● 若姓氏为仄声（三、四声），名字首字可用平声调和，避免整体压抑</p>
                  <p>● 若姓氏为平声（一、二声），名字可适当加入仄声，增强层次感</p>
                </div>
              </div>

              <p className="text-sm mb-4 leading-relaxed">
                <span className="font-bold text-cambridge-blue">4. 尾字声调的选择</span><br />
                起名时，名字的最后一个字建议使用开口音（韵母为a、o等）或阳平声调（二声），使名字更响亮。
              </p>

              <div className="bg-gray-100 p-4 rounded mb-4 relative overflow-hidden">
                <div className="relative z-10">
                  <p>王俊凯（Wáng Jùn Kǎi，二声→四声→三声）→ 尾字"凯"虽为三声，但有开口音，使名字发音洪亮</p>
                </div>
              </div>

              <h2 className="text-xl font-bold mb-4 border-b-2 border-cambridge-blue pb-2 text-cambridge-blue">
                《楚辞》起名方向
              </h2>
              <p className="text-sm mb-4 leading-relaxed">
                选取《楚辞》中词汇入名，不仅能彰显文化底蕴，更能赋予名字独特的气质与意境。可侧重以下方向：
              </p>

              <p><span className="inline-block bg-blue-100 px-2 py-1 rounded text-sm mr-2 text-cambridge-blue">香草意象</span> 兰、芷、蕙 —— 象征高洁品性</p>
              <p><span className="inline-block bg-blue-100 px-2 py-1 rounded text-sm mr-2 text-cambridge-blue">自然元素</span> 云、川、辰 —— 体现开阔格局</p>
              <p><span className="inline-block bg-blue-100 px-2 py-1 rounded text-sm mr-2 text-cambridge-blue">哲学词汇</span> 修、昭、怀 —— 寄托德行追求</p>
            </article>

            {/* Center Column - Artistic Display */}
            <div className="relative flex flex-col bg-eggshell text-gray-800 p-0 h-full overflow-hidden">
              <div className="absolute w-full h-full top-0 left-0 bg-white bg-opacity-70 z-10 rounded-2xl p-8 max-w-[80%] mx-auto left-1/2 transform -translate-x-1/2 shadow-lg"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-1/4 left-[15%] w-12 h-12 border-2 border-cambridge-blue border-opacity-30 rounded-full animate-float z-30"></div>
              <div className="absolute bottom-1/5 right-[15%] w-6 h-6 bg-purple-200 transform rotate-45 animate-float z-30" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-[15%] right-[20%] w-8 h-8 border border-cambridge-blue border-opacity-30 rounded animate-float z-30" style={{animationDelay: '0.5s'}}></div>

              {/* Main Headline */}
              <div className="flex flex-col items-center mb-4 absolute top-2/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-20">
                <div className="w-32 h-8 bg-cambridge-blue bg-opacity-15 rounded absolute -left-32 top-4"></div>
                <div className="w-20 h-20 bg-purple-100 absolute -bottom-0 -right-32"></div>
                <h1 className="font-artistic text-6xl font-bold leading-tight mb-2 relative z-50 bg-gradient-to-br from-cambridge-blue to-purple-600 bg-clip-text text-transparent tracking-wider">
                  如何起一个
                </h1>
                <h1 className="font-artistic text-4xl font-bold leading-tight mb-0 relative z-50 bg-gradient-to-br from-cambridge-blue to-purple-600 bg-clip-text text-transparent tracking-wider">
                  好听的中文名字
                </h1>
                <div className="w-48 h-4 bg-cambridge-blue bg-opacity-20 rounded-full absolute top-3/5 left-1/2 transform -translate-x-1/2 rotate-[5deg] -z-10"></div>
              </div>

              <div className="absolute top-12 right-8 bg-cambridge-blue text-white p-4 text-2xl font-bold leading-none text-center rounded-full w-20 h-20 flex flex-col justify-center animate-float z-20" style={{animationDuration: '4s'}}>
                名字
              </div>

              {/* Intro Text */}
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-base text-gray-800 max-w-[80%] z-20 bg-white bg-opacity-70 p-4 rounded-lg shadow-md">
                <p>基于《诗经》和《楚辞》的古典文学起名指导，传承中华文化精髓，为您的孩子选择一个富有内涵的好名字。</p>
              </div>
            </div>

            {/* Right Column - Examples */}
            <section className="p-6 bg-gray-50">
              <h2 className="text-xl font-bold mb-4 border-b-2 border-cambridge-blue pb-2 text-cambridge-blue">
                精选起名示例解析
              </h2>

              <div className="bg-white rounded-lg p-5 mb-6 shadow-sm border-l-4 border-blue-300 relative overflow-hidden">
                <h3 className="text-xl font-bold mb-2 text-gray-800">刘景然（Liú Jǐng Rán）</h3>
                <div className="text-sm font-bold mt-3 mb-1 text-cambridge-blue">声调分析</div>
                <p className="text-sm mb-1">二声（平）→ 三声（仄）→ 二声（平）</p>
                <p className="text-sm mb-1">平仄平，节奏起伏，朗朗上口</p>

                <div className="text-sm font-bold mt-3 mb-1 text-cambridge-blue">字义</div>
                <p className="text-sm mb-1">景：取自"高山仰止，景行行止"（《诗经》），象征光明与德行</p>
                <p className="text-sm mb-1">然：悠然自得，寓意心境豁达，亦可呼应"蓦然回首，灯火阑珊"</p>

                <div className="text-sm font-bold mt-3 mb-1 text-cambridge-blue">整体意境</div>
                <p className="text-sm mb-1">如画景致般开阔明朗，兼具文雅与洒脱</p>
              </div>

              <div className="bg-white rounded-lg p-5 mb-6 shadow-sm border-l-4 border-blue-300 relative overflow-hidden">
                <h3 className="text-xl font-bold mb-2 text-gray-800">刘墨川（Liú Mò Chuān）</h3>
                <div className="text-sm font-bold mt-3 mb-1 text-cambridge-blue">声调分析</div>
                <p className="text-sm mb-1">二声（平）→ 四声（仄）→ 一声（平）</p>
                <p className="text-sm mb-1">平仄平，声调错落有致</p>

                <div className="text-sm font-bold mt-3 mb-1 text-cambridge-blue">字义</div>
                <p className="text-sm mb-1">墨：文房四宝之一，寓意才华横溢，如"胸中丘壑，笔底烟霞"</p>
                <p className="text-sm mb-1">川：取自"子在川上曰，逝者如斯夫"（《论语》），暗含哲思与进取</p>

                <div className="text-sm font-bold mt-3 mb-1 text-cambridge-blue">整体意境</div>
                <p className="text-sm mb-1">文墨与山河交融，兼具书卷气与豪迈感</p>
              </div>

              <div className="bg-white rounded-lg p-5 mb-6 shadow-sm border-l-4 border-blue-300 relative overflow-hidden">
                <h3 className="text-xl font-bold mb-2 text-gray-800">刘清晏（Liú Qīng Yàn）</h3>
                <div className="text-sm font-bold mt-3 mb-1 text-cambridge-blue">声调分析</div>
                <p className="text-sm mb-1">二声（平）→ 一声（平）→ 四声（仄）</p>
                <p className="text-sm mb-1">平平仄，尾字"晏"虽为仄声，但韵母"an"为开口音，补足响亮感</p>

                <div className="text-sm font-bold mt-3 mb-1 text-cambridge-blue">出处</div>
                <p className="text-sm mb-1">成语"河清海晏"，出自唐代郑锡《日中有王字赋》"河清海晏，时和岁丰"</p>

                <div className="text-sm font-bold mt-3 mb-1 text-cambridge-blue">字义</div>
                <p className="text-sm mb-1">清：澄澈高洁，如"清水出芙蓉"</p>
                <p className="text-sm mb-1">晏：安宁祥和，亦有"晏如"（安然自若）之意</p>

                <div className="text-sm font-bold mt-3 mb-1 text-cambridge-blue">整体意境</div>
                <p className="text-sm mb-1">清平盛世，寓意人生安稳从容，心怀坦荡</p>
              </div>

              <h2 className="text-xl font-bold mb-4 border-b-2 border-cambridge-blue pb-2 text-cambridge-blue">
                经典声调组合示例表
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse mb-4 rounded-lg overflow-hidden shadow-sm">
                  <thead className="bg-blue-50 text-cambridge-blue">
                    <tr>
                      <th className="p-3 text-left border-b border-gray-200">姓氏声调</th>
                      <th className="p-3 text-left border-b border-gray-200">名字声调组合</th>
                      <th className="p-3 text-left border-b border-gray-200">示例</th>
                      <th className="p-3 text-left border-b border-gray-200">效果</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="p-3 border-b border-gray-100">四声</td>
                      <td className="p-3 border-b border-gray-100">一声 + 二声</td>
                      <td className="p-3 border-b border-gray-100">赵天翔（Zhào Tiān Xiáng）</td>
                      <td className="p-3 border-b border-gray-100">仄→平→平，舒缓大气</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-3 border-b border-gray-100">二声</td>
                      <td className="p-3 border-b border-gray-100">三声 + 四声</td>
                      <td className="p-3 border-b border-gray-100">陈子墨（Chén Zǐ Mò）</td>
                      <td className="p-3 border-b border-gray-100">平→仄→仄，稳重有力</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3 border-b border-gray-100">一声</td>
                      <td className="p-3 border-b border-gray-100">二声 + 三声</td>
                      <td className="p-3 border-b border-gray-100">张文远（Zhāng Wén Yuǎn）</td>
                      <td className="p-3 border-b border-gray-100">平→平→仄，文雅流畅</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-3">三声</td>
                      <td className="p-3">四声 + 二声</td>
                      <td className="p-3">李若琳（Lǐ Ruò Lín）</td>
                      <td className="p-3">仄→仄→平，柔美灵动</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="text-xl font-bold mb-4 border-b-2 border-cambridge-blue pb-2 text-cambridge-blue">
                《楚辞》起名推荐
              </div>
              <div className="bg-gray-100 p-4 rounded mb-4 relative overflow-hidden">
                <div className="relative z-10">
                  <p><strong>经典单字推荐（男孩）</strong></p>
                  <ul className="list-none pl-2">
                    <li>修：《离骚》"路漫漫其修远兮" — 修长、修养，象征品德高尚</li>
                    <li>珩：《远游》"吸飞泉之微液兮，怀琬琰之华英" — 美玉名，引申为高洁珍贵</li>
                    <li>昭：《九章·橘颂》"昭质其未亏兮" — 光明、彰显，寓意才华出众</li>
                    <li>湛：《九辩》"泬寥兮天高而气清" — 清澈深远，象征心境澄明</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded mb-4 relative overflow-hidden">
                <div className="relative z-10">
                  <p><strong>经典单字推荐（女孩）</strong></p>
                  <ul className="list-none pl-2">
                    <li>芷：《离骚》"扈江离与辟芷兮" — 香草名，象征纯洁美好</li>
                    <li>蕙：《九歌·少司命》"绿叶兮素华，芳菲菲兮袭予" — 蕙兰，寓意温婉高雅</li>
                    <li>霏：《九章·涉江》"霰雪纷其无垠兮" — 雪花纷飞，引申为轻盈灵动</li>
                    <li>窈：《九歌·山鬼》"既含睇兮又宜笑，子慕予兮善窈窕" — 窈窕淑女，形容仪态优雅</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded mb-4 relative overflow-hidden">
                <div className="relative z-10">
                  <p><strong>双字组合推荐</strong></p>
                  <ul className="list-none pl-2">
                    <li>陆离（四声+二声）：《离骚》"斑陆离其上下" — 光彩斑斓，象征人生多彩</li>
                    <li>云旗（二声+二声）：《离骚》"驾八龙之婉婉兮，载云旗之委蛇" — 志向高远</li>
                    <li>望舒（四声+一声）：《离骚》"前望舒使先驱兮"(月神驭者) — 追逐光明</li>
                    <li>怀瑾（二声+三声）：《九章·怀沙》"怀瑾握瑜兮" — 怀揣美德，内外兼修</li>
                  </ul>
                </div>
              </div>

              <div className="text-xl font-bold mb-4 border-b-2 border-cambridge-blue pb-2 text-cambridge-blue">
                避免的常见问题
              </div>
              <p className="text-sm mb-2">1. <span className="font-bold text-cambridge-blue">谐音尴尬</span>：需考虑名字与姓氏结合后可能产生的谐音问题</p>
              <p className="text-sm mb-2">2. <span className="font-bold text-cambridge-blue">生僻难认</span>：除非有特殊寓意，否则避免使用罕见字</p>
              <p className="text-sm mb-2">3. <span className="font-bold text-cambridge-blue">意义模糊</span>：避免含义负面或模糊不清的字</p>
              <p className="text-sm mb-2">4. <span className="font-bold text-cambridge-blue">声母韵母重复</span>：避免相同声母或相近韵母的搭配，可能影响发音清晰度</p>
            </section>
          </main>
        </div>

        {/* Scroll Icon */}
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 text-sm text-gray-500 text-center flex flex-col items-center z-100">
          <div className="w-6 h-10 border-2 border-gray-500 rounded-2xl mb-2 relative">
            <div className="absolute w-2 h-2 bg-gray-500 rounded-full top-1 left-1/2 transform -translate-x-1/2 animate-bounce"></div>
          </div>
          <span>向下滚动</span>
        </div>

        {/* Prompt Box */}
        {isPromptVisible && (
          <div className="fixed bottom-32 left-1/2 transform -translate-x-1/2 w-4/5 max-w-2xl bg-white bg-opacity-95 p-6 rounded-lg shadow-lg z-99 text-sm text-gray-800 border border-cambridge-blue border-opacity-20">
            <div 
              className="absolute top-2 right-2 w-6 h-6 flex justify-center items-center cursor-pointer text-gray-400 text-lg rounded-full hover:bg-gray-100 hover:text-cambridge-blue transition-all duration-200"
              onClick={() => setIsPromptVisible(false)}
            >
              ×
            </div>
            <div className="text-lg font-bold text-cambridge-blue mb-3 text-center border-b border-cambridge-blue border-opacity-20 pb-2">
              使用DeepSeek起名提示词参考
            </div>
            <div className="leading-relaxed bg-gray-50 p-4 rounded border-l-4 border-cambridge-blue font-mono">
              姓氏<span className="text-purple-600 font-bold">{}</span>，平仄交替、尾字响亮、避免连续同调音、形、义综合考量参考诗词典籍（《楚辞-九歌》）的韵律搭配。举例并解释名字内在含义。

              <div className="mt-3 text-sm text-gray-600">
                <strong>男孩示例：</strong> 姓氏<span className="text-purple-600 font-bold">王</span>，
                需平仄交替、尾字响亮，参考《楚辞》中韵律。
              </div>

              <div className="mt-3 text-sm text-gray-600">
                <strong>女孩示例：</strong> 姓氏<span className="text-purple-600 font-bold">陈</span>，
                需音韵和谐，尾字清雅，参考《诗经》典故。
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

