import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const handleTelegramClick = () => {
    window.open('https://t.me/', '_blank');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full space-y-8 animate-fade-in">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Привет, HR.<br />
              Опять <span className="text-primary">no-show</span>, фейки в резюме и нанимающий с фразой <span className="text-primary">«где нормальные люди»</span>?
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-semibold">
              Этот сайт — не резюме.<br />
              Это кандидат, который не будет жрать твоё время, не исчезнет перед зумом и не обещает «200 лидов за час из воздуха».
            </p>
            
            <div className="p-4 bg-secondary/50 border border-border rounded-lg">
              <p className="text-sm text-muted-foreground italic">
                Если тебя раздражает немного дерзкий тон — можно сразу закрывать вкладку.<br />
                Я не твой кандидат.
              </p>
            </div>
            
            <Button 
              onClick={handleTelegramClick}
              size="lg"
              className="text-lg px-8 py-6 group"
            >
              <Icon name="Send" className="mr-2 group-hover:translate-x-1 transition-transform" />
              Написать мне в Telegram
            </Button>
            
            <p className="text-xs text-muted-foreground">
              (пока я ещё отвечаю сама, а не через ассистента)
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold flex items-center gap-3">
              💀 Дай угадаю твой день?
            </h2>
            
            <div className="space-y-6">
              {[
                { time: "10:00", text: "Кандидат не пришёл на зум. Даже не написал «сорян»." },
                { time: "11:30", text: "Джун с опытом 4 месяца хочет вилку как у сеньора и «желательно без тестового, я устал»." },
                { time: "13:00", text: "Интервью с «гуру маркетинга», который не может объяснить, откуда взялись его «300% роста», зато 20 минут рассказывает про «энергии бренда»." },
                { time: "15:00", text: "Ещё один персонаж с фразой «у меня всё под NDA», включая здравый смысл." },
                { time: "16:30", text: "Нанимающий задаёт свой любимый вопрос: «Ну и где нормальные?»" },
                { time: "18:00", text: "Ты смотришь на воронку и думаешь: «Может, это я ненормальная?»" }
              ].map((item, index) => (
                <Card key={index} className="p-6 hover:border-primary/50 transition-colors">
                  <div className="flex gap-4">
                    <div className="text-primary font-bold text-lg min-w-[60px]">
                      {item.time}
                    </div>
                    <p className="text-foreground/90">{item.text}</p>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="p-6 bg-card border-2 border-primary/50 rounded-lg">
              <p className="text-xl font-bold">
                Рынок превратился в цирк.<br />
                И угадай, кто крайняя?<br />
                Ты. Я это очень хорошо понимаю.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold flex items-center gap-3">
              😈 Я — не ещё один клоун в твоей воронке
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Я маркетолог, который реально работал руками: сайты, тексты, карточки, запуск рекламы, ковыряние в аналитике.<br />
              Я знаю, сколько времени что занимает, сколько это стоит и где обычно всё ломается.
            </p>
            
            <p className="text-xl leading-relaxed">
              Сейчас я хочу не просто «двигать пиксели», а решать задачи бизнеса: заявки, продажи, адекватный СРА, нормальный ROMI — вот это всё.
            </p>
            
            <p className="text-lg text-muted-foreground italic">
              Что важно тебе, как HR — я понимаю не хуже, чем свои метрики:<br />
              тебе нужен адекватный, а не «звезда»;<br />
              который не врёт и не пропадает;<br />
              которого не стыдно показать нанимающему.
            </p>
            
            <div className="grid gap-6 mt-8">
              {[
                {
                  icon: "CheckCircle",
                  title: "Никакого гостинга",
                  text: "Если мы договорились на 14:00 — я буду в 13:55. С камерой, микрофоном и в нормальном виде, а не из маршрутки."
                },
                {
                  icon: "Shield",
                  title: "Без сказок и фотошоп-кейсов",
                  text: "Я не придумываю себе «Coca-Cola, Nike и Google» в опыте. Если чего-то не знаю — говорю: «не знаю, разберусь и вернусь с ответом»."
                },
                {
                  icon: "Heart",
                  title: "Уважаю твою работу",
                  text: "Ты для меня не «секретарь нанимающего», а человек, без которого меня туда вообще не пустят. Я помогу тебе продать меня внутри, а не буду сидеть овощем."
                }
              ].map((item, index) => (
                <Card key={index} className="p-6 hover:scale-[1.02] transition-transform">
                  <div className="flex gap-4">
                    <div className="text-primary flex-shrink-0">
                      <Icon name={item.icon} size={32} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold flex items-center gap-3">
              📊 Я не про «движуху», я про «чтобы купили»
            </h2>
            
            <p className="text-xl leading-relaxed">
              Большинство маркетологов продают «активность»:<br />
              посты, сторис, креативы, «мы сделали 100500 касаний».
            </p>
            
            <p className="text-xl font-bold">Я продаю логику и деньги:</p>
            
            <div className="space-y-4 pl-6 border-l-4 border-primary">
              <p className="text-lg">→ гипотеза → тест → замер → решение: масштабировать или убить;</p>
              <p className="text-lg">→ цифры важнее ощущений;</p>
              <p className="text-lg">→ маркетинг — это не «красиво», это «окупилось / не окупилось».</p>
            </div>
            
            <Card className="p-8 mt-8 border-primary/30">
              <h3 className="text-2xl font-bold mb-6">Как я мыслю сейчас:</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-primary font-bold">×</span>
                  <p className="line-through text-muted-foreground">«сделать красиво»</p>
                  <span className="text-primary font-bold">✓</span>
                  <p className="font-semibold">«сделать так, чтобы купили»</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold">×</span>
                  <p className="line-through text-muted-foreground">«давайте во все каналы»</p>
                  <span className="text-primary font-bold">✓</span>
                  <p className="font-semibold">«где наша экономика сходится»</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold">×</span>
                  <p className="line-through text-muted-foreground">«дайте миллион бюджета»</p>
                  <span className="text-primary font-bold">✓</span>
                  <p className="font-semibold">«дайте задачу, в которой можно показать зубы и результат»</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold flex items-center gap-3">
              🧠 0% драмы. 100% дела
            </h2>
            
            <div className="grid gap-6">
              {[
                {
                  title: "Не ною про прошлых",
                  text: "Я не буду полчаса рассказывать, какие «идиоты» были бывшие руководители. У всех свои тараканы, мне важно, что мы сделаем здесь."
                },
                {
                  title: "Не устраиваю психотерапию на собесе",
                  text: "Я прихожу решать рабочие задачи, а не вываливать личную драму на тебя. Для этого есть друзья и психотерапевт."
                },
                {
                  title: "Нормально отношусь к фидбеку",
                  text: "Можно сказать «это фигня, давай по-другому» — я не обижусь, я переделаю."
                },
                {
                  title: "Без короны",
                  text: "Я не «бог маркетинга», который заходит и ломает процессы ради собственного ЧСВ. Мне важен результат и адекватные отношения."
                }
              ].map((item, index) => (
                <Card key={index} className="p-6 border-l-4 border-primary">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.text}</p>
                </Card>
              ))}
            </div>
            
            <div className="p-6 bg-card border-2 border-primary/50 rounded-lg mt-8">
              <p className="text-xl font-semibold">
                Если тебе нужен ещё один «гениальный, но токсичный» — это точно не я.<br />
                Если нужен живой, адекватный человек, который делает и растёт — вот тут мы совпадаем.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold flex items-center gap-3">
              🧩 Давай честно: что ты реально покупаешь?
            </h2>
            
            <p className="text-xl leading-relaxed">
              Не папку с нарисованными кейсами.<br />
              Не очередного «эксперта», который исчезнет после оффера.
            </p>
            
            <p className="text-2xl font-bold mb-6">Ты покупаешь:</p>
            
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-primary text-2xl">✓</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">адекватность</h3>
                    <p className="text-muted-foreground">со мной можно нормально говорить по делу</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-primary text-2xl">✓</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">рабочую базу</h3>
                    <p className="text-muted-foreground">я не с нуля, я уже делал(а) сайты / рекламу / воронки</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-primary text-2xl">✓</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">готовность учиться и впахивать</h3>
                    <p className="text-muted-foreground">без «мне всё должны»</p>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="p-6 bg-card border border-border rounded-lg mt-8">
              <p className="text-lg">
                Я не буду обещать «перевернуть ваш рынок за две недели».<br />
                Я буду делать свою работу так, чтобы тебе не приходилось за меня краснеть.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-12 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-3 flex-wrap">
              🚀 Если ты дочитала досюда —<br />я уже лучше половины твоей воронки
            </h2>
            
            <p className="text-xl leading-relaxed max-w-3xl mx-auto">
              Если тебе нужен сказочник, который красиво врёт и продаёт воздух — закрывай вкладку, тут скучно.
            </p>
            
            <Card className="p-8 text-left">
              <p className="text-xl mb-6">Если тебе нужен живой, адекватный маркетолог, который:</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-primary" size={24} />
                  <p className="text-lg">уважает твоё время,</p>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-primary" size={24} />
                  <p className="text-lg">не врёт про опыт,</p>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-primary" size={24} />
                  <p className="text-lg">считает деньги и не боится работы —</p>
                </div>
              </div>
              <p className="text-xl font-bold">жми кнопку, познакомимся ближе.</p>
            </Card>
            
            <Button 
              onClick={handleTelegramClick}
              size="lg"
              className="text-xl px-12 py-8 group"
            >
              <Icon name="Send" className="mr-3 group-hover:translate-x-1 transition-transform" size={24} />
              Написать в Telegram
            </Button>
            
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Можно сразу скинуть вакансию или кратко описать, кого вы ищете.<br />
              Я честно скажу, подхожу я или лучше не тратить время друг друга.
            </p>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
          <p>Сделано без воды, лжи и обещаний «перевернуть рынок за месяц»</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
