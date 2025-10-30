import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [activeWeight, setActiveWeight] = useState<'thin' | 'light' | 'regular' | 'bold' | 'black'>('regular');

  const weights = [
    { name: 'Thin', value: 'thin' as const, class: 'font-aeroport-thin', weight: '100' },
    { name: 'Light', value: 'light' as const, class: 'font-aeroport-light', weight: '300' },
    { name: 'Regular', value: 'regular' as const, class: 'font-aeroport-regular', weight: '400' },
    { name: 'Bold', value: 'bold' as const, class: 'font-aeroport-bold', weight: '700' },
    { name: 'Black', value: 'black' as const, class: 'font-aeroport-black', weight: '900' },
  ];

  const activeWeightClass = weights.find(w => w.value === activeWeight)?.class || 'font-aeroport-regular';

  return (
    <div className="min-h-screen bg-white">
      
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 animate-fade-in">
        <div className="max-w-6xl w-full text-center space-y-8">
          <h1 className="text-[12vw] leading-none tracking-tight font-aeroport-black">
            AEROPORT
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground font-aeroport-light max-w-3xl mx-auto">
            Современный шрифт для цифровой эпохи
          </p>
        </div>
      </section>

      <section className="py-32 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-aeroport-bold mb-16">
            Пять начертаний
          </h2>
          <div className="grid gap-8">
            {weights.map((weight, index) => (
              <div 
                key={weight.value}
                className="py-8 border-b border-border last:border-0 animate-fade-in hover:bg-secondary/30 transition-all duration-300 px-4"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-baseline gap-8">
                    <span className="text-lg text-muted-foreground font-aeroport-regular min-w-[100px]">
                      {weight.name}
                    </span>
                    <span className="text-sm text-muted-foreground/60 font-aeroport-light">
                      {weight.weight}
                    </span>
                  </div>
                  <div className={`text-4xl md:text-6xl ${weight.class}`}>
                    The quick brown fox
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-aeroport-black mb-20">
            Масштабируемость
          </h2>
          <div className="space-y-12">
            <p className="text-[8vw] leading-tight font-aeroport-bold">
              96
            </p>
            <p className="text-6xl md:text-7xl leading-tight font-aeroport-regular">
              Заголовок 72
            </p>
            <p className="text-4xl md:text-5xl leading-relaxed font-aeroport-light">
              Подзаголовок 48
            </p>
            <p className="text-2xl md:text-3xl leading-relaxed font-aeroport-regular">
              Основной текст 24
            </p>
            <p className="text-lg leading-relaxed font-aeroport-light opacity-80">
              Вспомогательный текст 18
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-aeroport-bold mb-16">
            Универсальность
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-aeroport-bold">Веб-интерфейсы</h3>
              <p className="text-lg leading-relaxed font-aeroport-light text-muted-foreground">
                Идеален для UI/UX дизайна. Чёткая читаемость на любых экранах и при любом размере.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-aeroport-bold">Брендинг</h3>
              <p className="text-lg leading-relaxed font-aeroport-light text-muted-foreground">
                Создаёт сильный визуальный образ. Подходит для логотипов и фирменного стиля.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-aeroport-bold">Печатная продукция</h3>
              <p className="text-lg leading-relaxed font-aeroport-light text-muted-foreground">
                Отлично работает на бумаге. Сохраняет характер при высоком разрешении печати.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-aeroport-bold">Мобильные приложения</h3>
              <p className="text-lg leading-relaxed font-aeroport-light text-muted-foreground">
                Оптимизирован для маленьких экранов. Отличная читаемость даже при малых размерах.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-secondary">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-5xl md:text-7xl font-aeroport-black">
            Интерактивная демонстрация
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {weights.map((weight) => (
              <Button
                key={weight.value}
                variant={activeWeight === weight.value ? 'default' : 'outline'}
                size="lg"
                onClick={() => setActiveWeight(weight.value)}
                className={`${weight.class} text-base`}
              >
                {weight.name}
              </Button>
            ))}
          </div>
          <div className="bg-white p-12 min-h-[400px] flex items-center justify-center">
            <p className={`text-5xl md:text-7xl text-center leading-tight ${activeWeightClass} transition-all duration-300`}>
              Настоящая типографика начинается с деталей
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-aeroport-bold mb-16">
            Читаемость
          </h2>
          <div className="space-y-8">
            <p className="text-xl leading-relaxed font-aeroport-regular">
              Aeroport разработан с учётом максимальной читаемости. Каждая буква тщательно выверена для комфортного восприятия текста на любых устройствах.
            </p>
            <p className="text-xl leading-relaxed font-aeroport-light">
              Широкие пропорции и открытые апертуры делают шрифт особенно эффективным для длинных текстов. Геометрическая основа придаёт современный характер, сохраняя при этом гуманистические черты.
            </p>
            <p className="text-xl leading-relaxed font-aeroport-regular">
              Оптическая коррекция на всех уровнях гарантирует баланс между эстетикой и функциональностью. Результат — шрифт, который одинаково хорошо работает в заголовках и основном тексте.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <h2 className="text-6xl md:text-8xl font-aeroport-black mb-8">
            ABCDEFGHIJKLM
          </h2>
          <h2 className="text-6xl md:text-8xl font-aeroport-black mb-8">
            NOPQRSTUVWXYZ
          </h2>
          <h2 className="text-6xl md:text-8xl font-aeroport-light mt-12">
            abcdefghijklm
          </h2>
          <h2 className="text-6xl md:text-8xl font-aeroport-light mb-8">
            nopqrstuvwxyz
          </h2>
          <h2 className="text-6xl md:text-8xl font-aeroport-thin mt-12">
            0123456789
          </h2>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-16">
          <div>
            <h2 className="text-6xl md:text-8xl font-aeroport-black mb-6">
              Aeroport
            </h2>
            <p className="text-2xl font-aeroport-light text-muted-foreground">
              Шрифт нового поколения
            </p>
          </div>
          <div className="pt-12 border-t border-border">
            <p className="text-lg font-aeroport-regular text-muted-foreground">
              © 2024 Aeroport Typeface. Montserrat используется как референс.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;
