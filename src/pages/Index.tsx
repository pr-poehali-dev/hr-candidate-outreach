import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

type ScanState = 'idle' | 'scanning' | 'complete';

const Index = () => {
  const [scanState, setScanState] = useState<ScanState>('idle');

  const handleTelegramClick = () => {
    window.open('https://t.me/', '_blank');
  };

  const handleScanClick = () => {
    setScanState('scanning');
    setTimeout(() => {
      setScanState('complete');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
        <div className="absolute top-8 left-1/2 -translate-x-1/2">
          <div className="px-4 py-2 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-sm">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              ATTENTION: HR & RECRUITERS
            </span>
          </div>
        </div>
        
        <div className="max-w-5xl w-full space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
            Привет!<br />
            Вот ты и попала<br />
            на <span className="text-primary">лэндос</span>
          </h1>
          
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground max-w-3xl">
            <p>
              Уверен, возник вопрос: <span className="text-foreground font-semibold">"А зачем я сюда перешла?"</span>
            </p>
            
            <p>
              Объясняю) Прежде чем откликнуться на вакансию, я просмотрел тонны резюме моих коллег. 
              И знаешь, это все настолько <span className="text-foreground">банально, однотипно...</span>
            </p>
            
            <div className="p-6 bg-card/50 border border-primary/20 rounded-2xl backdrop-blur-sm">
              <p className="text-foreground text-xl italic">
                "И знаешь, у меня в голове что-то щелкнуло и возникла мысль: 'Я ведь могу лучше, 
                гораздо лучше. И мне будет достаточно и <span className="text-primary font-bold">5 минут</span>, 
                чтобы убедить, что я гораздо сильнее БОЛЬШИНСТВА.'"
              </p>
            </div>
            
            <p className="text-xl">
              Не веришь?))) Ну, и правильно делаешь:D<br />
              <span className="text-foreground font-semibold">Но давай все же проверим, листай вниз!</span>
            </p>
          </div>
          
          <div className="flex justify-center pt-8 animate-bounce">
            <Icon name="ChevronDown" size={32} className="text-primary" />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-50" />
        
        <div className="max-w-5xl mx-auto space-y-12 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black flex items-center gap-4">
            <span className="text-5xl">💀</span>
            Дай я попробую угадать твой день!
          </h2>
          
          <div className="grid gap-8">
            <Card className="p-8 border-l-4 border-destructive bg-card/80 backdrop-blur-sm hover:scale-[1.02] transition-transform">
              <h3 className="text-2xl font-bold mb-4 text-destructive">Алмаз, который слился</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Вот ты сидишь, разбираешь резюмехи и видишь, вот он, твой алмазик, по имен Иван Иваныч. 
                Звонишь ему и вроде бы все замечательно, договорились о встрече, а он... просто, 
                <span className="text-foreground font-bold"> СУКА, слился</span> и даже не написал (плаки-плаки). 
                <span className="italic">Грусто</span>
              </p>
            </Card>
            
            <Card className="p-8 border-l-4 border-primary bg-card/80 backdrop-blur-sm hover:scale-[1.02] transition-transform">
              <h3 className="text-2xl font-bold mb-4 text-primary">Илон Маск из Скиллбокса</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Или например. Приходит какой-то Вася, читаешь резюме, а там чисто второй Илон Маск, 
                чуть ли не Кока-Колу в одного запустил и Стив Джобс к нему ходил за советом. 
                А что по факту? <span className="text-foreground font-bold">4 месяца яндекс практикума</span> или 
                какой-нибудь скиллбокс) Было же, такое да?)
              </p>
            </Card>
            
            <Card className="p-8 border-l-4 border-muted bg-card/80 backdrop-blur-sm hover:scale-[1.02] transition-transform">
              <h3 className="text-2xl font-bold mb-4 text-muted-foreground">Агент 007 (NDA)</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                А вот еще персонажи, у которых все под NDA. Как бы, ну, ок... 
                Ну, наверное, там <span className="text-foreground font-bold">здравый смысл тоже под NDA</span>
              </p>
            </Card>
          </div>
          
          <div className="p-8 bg-card border-2 border-primary/30 rounded-2xl text-center space-y-4">
            <p className="text-3xl font-bold">Печалька, да?</p>
            <p className="text-xl text-muted-foreground">
              Давай объективно — сейчас на рынке просто <span className="text-primary font-bold">цирк</span>.
            </p>
            <p className="text-2xl font-black">
              И угадай, кто крайняя? <span className="text-primary">ТЫ</span>.<br />
              И я это прекрасно понимаю.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-6xl font-black">
            Стараюсь быть <span className="text-primary">честным</span>,<br />
            именно поэтому:
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-card/50 border border-primary/20 hover:border-primary/50 transition-colors">
              <div className="flex gap-4">
                <Icon name="CheckCircle" className="text-primary flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Не вру про опыт</h3>
                  <p className="text-muted-foreground">
                    Никаких выдуманных «Coca-Cola» и должностей «Head of Вселенная» в микроконторе.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-card/50 border border-primary/20 hover:border-primary/50 transition-colors">
              <div className="flex gap-4">
                <Icon name="Clock" className="text-primary flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Не пропадаю</h3>
                  <p className="text-muted-foreground">
                    Договорились на созвон — я буду. Не могу — заранее предупрежу, а не исчезну в туман.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-card/50 border border-primary/20 hover:border-primary/50 transition-colors">
              <div className="flex gap-4">
                <Icon name="Shield" className="text-primary flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Не устраиваю драму</h3>
                  <p className="text-muted-foreground">
                    Не превращаю интервью в психотерапию и не поливаю грязью бывших.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-card/50 border border-primary/20 hover:border-primary/50 transition-colors">
              <div className="flex gap-4">
                <Icon name="MessageSquare" className="text-primary flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Не играю в гения</h3>
                  <p className="text-muted-foreground">
                    Если не знаю — так и скажу. Но разберусь и вернусь с ответом.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-card/50 border border-primary/20 hover:border-primary/50 transition-colors md:col-span-2">
              <div className="flex gap-4">
                <Icon name="Heart" className="text-primary flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-bold mb-2">HR — не «секретарь»</h3>
                  <p className="text-muted-foreground">
                    Ты мой партнёр. Мне важно, чтобы тебе со мной было удобно.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="p-6 bg-card/30 border border-border rounded-xl">
            <p className="text-lg text-muted-foreground italic text-center">
              P.S. Я точно не идеальный. Я просто стараюсь быть честным с людьми и с собой, вот и все.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-50" />
        
        <div className="max-w-5xl mx-auto space-y-12 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            Сейчас для меня<br />
            Маркетинг = <span className="text-success">Деньги</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl">
            А не просто «красивые креативы», Директ, РСЯ.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-transparent border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Target" className="text-primary" size={32} />
                <h3 className="text-2xl font-bold text-primary">Продукт {'>'} Креатив</h3>
              </div>
              <p className="text-muted-foreground text-lg">
                Сначала продукт и ЦА → потом креатив, а не наоборот.
              </p>
            </Card>
            
            <Card className="p-8 bg-gradient-to-br from-success/10 to-transparent border-success/30">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="TrendingUp" className="text-success" size={32} />
                <h3 className="text-2xl font-bold text-success">Цифры {'>'} Ощущения</h3>
              </div>
              <p className="text-muted-foreground text-lg">
                Гипотеза → тест → замер → решение (масштабировать или убить).
              </p>
            </Card>
          </div>
          
          <Card className="p-8 bg-card/80 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6">Бизнес в контексте</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Я понимаю, что маркетинг не живёт в вакууме. Я знаю, что такое:
            </p>
            <div className="flex flex-wrap gap-3">
              {['ФОТ', 'Юнит-экономика', 'Окупаемость', 'ROI', 'LTV'].map((term) => (
                <span 
                  key={term}
                  className="px-4 py-2 bg-primary/20 border border-primary/40 rounded-lg font-semibold"
                >
                  {term}
                </span>
              ))}
            </div>
          </Card>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: 'Zap', text: 'Быстро собираю лендинги' },
              { icon: 'Rocket', text: 'Быстро тестирую' },
              { icon: 'Users', text: 'Сегментирую ЦА' },
              { icon: 'MessageCircle', text: 'Сильный смысловик' }
            ].map((item, idx) => (
              <Card key={idx} className="p-4 text-center bg-card/50 hover:bg-card transition-colors">
                <Icon name={item.icon} className="mx-auto mb-3 text-primary" size={28} />
                <p className="text-sm font-medium">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-black">
              Система <span className="text-success">«Свой / Чужой»</span>
            </h2>
            
            {scanState === 'idle' && (
              <div className="space-y-8 animate-fade-in">
                <p className="text-xl text-muted-foreground">
                  А мы вообще сработаемся?<br />
                  Нажми кнопку ниже, чтобы запустить диагностику совместимости.
                </p>
                
                <button 
                  onClick={handleScanClick}
                  className="group relative w-64 h-64 mx-auto block"
                >
                  <div className="absolute inset-0 rounded-full border-2 border-success/30 animate-pulse-ring" />
                  <div className="absolute inset-4 rounded-full border-2 border-success/50 animate-pulse-ring" style={{ animationDelay: '0.3s' }} />
                  <div className="absolute inset-8 rounded-full border-4 border-success bg-success/10 backdrop-blur-sm flex flex-col items-center justify-center gap-4 group-hover:bg-success/20 transition-all">
                    <Icon name="Fingerprint" className="text-success" size={64} />
                    <span className="text-success font-bold text-xl uppercase tracking-wider">SCAN</span>
                  </div>
                </button>
              </div>
            )}
            
            {scanState === 'scanning' && (
              <div className="space-y-8 animate-fade-in">
                <div className="relative w-64 h-64 mx-auto">
                  <div className="absolute inset-0 rounded-full border-4 border-success/30" />
                  <div className="absolute inset-0 rounded-full border-t-4 border-success animate-spin" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <Icon name="Fingerprint" className="text-success mb-4" size={64} />
                    <span className="text-success font-bold text-xl">Сканирование...</span>
                  </div>
                </div>
                <p className="text-xl text-success font-semibold animate-pulse">
                  Тест на адекватность... Пройдено ✓
                </p>
              </div>
            )}
            
            {scanState === 'complete' && (
              <div className="space-y-8 animate-fade-in">
                <div className="relative w-64 h-64 mx-auto mb-12">
                  <div className="absolute inset-0 rounded-full border-4 border-success" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon name="CheckCircle" className="text-success" size={96} />
                  </div>
                </div>
                
                <div className="p-2 bg-success/20 border border-success rounded-lg inline-block">
                  <p className="text-2xl font-black text-success uppercase tracking-wider">
                    СОВПАДЕНИЕ ПОДТВЕРЖДЕНО
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">
                  <Card className="p-6 border-success/30 bg-success/5">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon name="Zap" className="text-success" size={24} />
                      <h3 className="font-bold text-lg">Пинг: 0ms</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Режим «Вечный думатель» отключен. Если договорились — я включаюсь и делаю, 
                      а не имитирую бурную деятельность.
                    </p>
                  </Card>
                  
                  <Card className="p-6 border-success/30 bg-success/5">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon name="Shield" className="text-success" size={24} />
                      <h3 className="font-bold text-lg">Toxic Level: 0%</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Не душню, не ною, не самоутверждаюсь. Со мной можно спокойно идти 
                      к стейкхолдерам — краснеть не придется.
                    </p>
                  </Card>
                  
                  <Card className="p-6 border-success/30 bg-success/5">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon name="MessageSquare" className="text-success" size={24} />
                      <h3 className="font-bold text-lg">Протокол «Ясность»</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Я не заставляю гуглить мои термины. Внятно рассказываю о проектах, 
                      без «эээ» и «ну типа».
                    </p>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/50">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
            Если ты дочитала до этого места —<br />
            <span className="text-primary">мы уже подозрительно совпадаем.</span> 👀
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-destructive/50 bg-gradient-to-br from-destructive/10 to-transparent">
              <div className="flex items-start gap-4 mb-6">
                <Icon name="X" className="text-destructive flex-shrink-0" size={32} />
                <h3 className="text-2xl font-bold text-destructive">Тебе НЕ сюда, если нужен:</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-destructive mt-1">•</span>
                  <span className="text-muted-foreground">«Звёздный» маркетолог с раздутым ЧСВ</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive mt-1">•</span>
                  <span className="text-muted-foreground">Платиновый сказочник, который красиво врёт</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive mt-1">•</span>
                  <span className="text-muted-foreground">Имитатор бурной деятельности</span>
                </li>
              </ul>
              <p className="mt-6 text-destructive font-semibold italic">
                Лучше реально закрыть вкладку.<br />Мы друг друга только замучаем.
              </p>
            </Card>
            
            <Card className="p-8 border-2 border-success/50 bg-gradient-to-br from-success/10 to-transparent">
              <div className="flex items-start gap-4 mb-6">
                <Icon name="Check" className="text-success flex-shrink-0" size={32} />
                <h3 className="text-2xl font-bold text-success">Жми кнопку, если хочешь:</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-success flex-shrink-0 mt-1" size={20} />
                  <span className="text-foreground font-medium">Живого адекватного маркетолога</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-success flex-shrink-0 mt-1" size={20} />
                  <span className="text-foreground font-medium">Того, кто уважает твой календарь</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-success flex-shrink-0 mt-1" size={20} />
                  <span className="text-foreground font-medium">Того, кто нормально говорит и работает</span>
                </li>
              </ul>
            </Card>
          </div>
          
          <div className="text-center space-y-6 pt-8">
            <Button 
              onClick={handleTelegramClick}
              size="lg"
              className="text-xl px-12 py-8 h-auto bg-primary hover:bg-primary/90 group"
            >
              <Icon name="Send" className="mr-3 group-hover:translate-x-1 transition-transform" size={28} />
              Написать мне в Telegram
            </Button>
            
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Можно сразу скинуть вакансию или кратко описать, кого вы ищете.<br />
              Я честно скажу, подхожу я или лучше не тратить время друг друга.
            </p>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-5xl mx-auto text-center text-sm text-muted-foreground">
          <p>Без воды, фейков и обещаний «перевернуть рынок»</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;