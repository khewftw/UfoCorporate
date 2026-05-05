import {
  BriefcaseBusiness,
  ClipboardCheck,
  FileSearch,
  Trophy,
  ChevronRight
} from "lucide-react";

const steps = [
  { 
    title: "Анализ", 
    desc: "Проводим глубокий юридический аудит вашей ситуации, изучаем предоставленные документы и актуальную судебную практику. Выявляем все скрытые риски и честно оцениваем перспективы дела еще до начала работы, чтобы вы понимали реальную картину.",
    icon: FileSearch 
  },
  { 
    title: "Договор", 
    desc: "Подготавливаем прозрачное соглашение с четко прописанными этапами работы, финальной стоимостью и нашими юридическими гарантиями. Вы точно знаете, за что платите, и какие конкретные обязательства мы берем на себя по договору.",
    icon: ClipboardCheck 
  },
  { 
    title: "Защита", 
    desc: "Наши адвокаты представляют ваши интересы в судах всех инстанций и государственных органах. Мы полностью берем на себя всю бумажную волокиту, подготовку документов, подачу исков и ведение жестких переговоров с оппонентами.",
    icon: BriefcaseBusiness 
  },
  { 
    title: "Результат", 
    desc: "Завершаем дело достижением поставленной цели — будь то полное списание долга, победа в сложном споре или получение законных выплат. Передаем вам все официальные решения и даем подробные рекомендации по вашим дальнейшим действиям.",
    icon: Trophy 
  },
];

export function WorkProcess() {
  return (
    <section className="w-full mt-16 md:mt-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-[#111827] md:text-5xl">
            Ваш путь к результату
          </h2>
        </div>

        {/* Сетка 12 колонок */}
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-12">
          
          {/* ШАГИ: Занимают 8/12 ширины */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.title}
                  className="flex flex-col items-start rounded-[32px] bg-white p-8 shadow-sm border border-gray-100/50 transition-all hover:shadow-md"
                >
                  <span className="text-sm font-bold uppercase tracking-widest text-[#111827]">
                    Шаг 0{index + 1}
                  </span>
                  
                  <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7F8FA] text-[#6B7280]">
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-[#111827]">
                    {step.title}
                  </h3>
                  
                  <p className="mt-4 text-base leading-relaxed text-[#6B7280]">
                    {step.desc}
                  </p>

                  <a 
                    href="#" 
                    className="mt-8 inline-flex items-center gap-1 text-sm font-bold text-[#111827] transition-colors hover:text-[#FFDD2D]"
                  >
                    Подробнее
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </article>
              );
            })}
          </div>

          {/* СОБСТВЕННИК: Занимает 4/12 ширины */}
          {/* Важно: здесь pt-20 чтобы оставить место под выглядывающую голову на десктопе */}
          <div className="relative mt-20 lg:mt-0 lg:col-span-4 flex items-end">
            <article className="relative w-full rounded-[40px] bg-white p-8 pt-24 shadow-sm border border-gray-100/50">
              
              {/* Фото Алексея Черепанова с эффектом "выглядывания" */}
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-full max-w-[320px] pointer-events-none lg:-top-24 lg:left-auto lg:right-0 lg:translate-x-0">
                <img 
                  src="/images/owner.png" 
                  alt="Алексей Черепанов" 
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>

              {/* Текстовый блок в стиле плашки */}
              <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left">
                <p className="text-2xl font-bold text-[#111827]">Алексей Черепанов</p>
                <p className="text-sm font-medium text-[#6B7280]">Основатель бюро «УФО-ЦЕНТР»</p>
                
                <div className="mt-8 h-px w-full bg-gray-100" />
                
                <p className="mt-6 text-sm leading-relaxed text-[#6B7280]">
                  «Лично отвечаю за качество каждого дела. Моя цель — решить вашу проблему так, чтобы вы забыли о ней навсегда».
                </p>
              </div>

              {/* Акцентный элемент — желтый круг сзади (как на референсе) */}
              <div className="absolute top-10 right-10 h-32 w-32 rounded-full bg-[#FFDD2D] blur-3xl opacity-20 -z-10" />
            </article>
          </div>

        </div>
      </div>
    </section>
  );
}