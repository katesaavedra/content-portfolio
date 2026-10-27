// Кейсы. cover: картинка из assets/ или null — тогда рисуется типографическая обложка (word + metric).
// preview: короткое видео, которое играет поверх обложки при наведении.
// posts: скриншоты-ссылки [картинка, url, подпись]; по умолчанию в один ряд, stack: true — друг под другом.
// Картинки из gallery открываются на весь экран по клику.
const CASES = [
  {
    title: 'Telegram-канал Яндекс Браузера',
    client: 'Яндекс Браузер',
    short: 'Веду тг-канал на 690 000+ подписчиков на тему нейросетей.',
    cover: 'assets/yandex-browser-cover-2.jpg', url: 'https://t.me/yabrowser',
    blocks: [
      { h: 'О проекте', p: ['Глубоко разбираюсь в теме канала и знаю, как интересно рассказать о ней аудитории. Мои посты набирают ERV до 12% (у Aviasales — 1,7%).'] },
      { h: 'Цифры', stats: [['690 000+', 'подписчиков в канале'], ['до 12%', 'ERV моих постов'], ['+166%', 'перевыполнение плана в марте']] },
      { h: 'Избранные посты', posts: [
        ['assets/yb-post-1.jpg', 'https://t.me/yabrowser/820', '93,1К просмотров'],
        ['assets/yb-post-2.jpg', 'https://t.me/yabrowser/817?single', '168,7К просмотров'],
        ['assets/yb-post-3.jpg', 'https://t.me/yabrowser/784', '86,9К просмотров']
      ] },
      { h: 'Мои личные достижения на проекте', list: [
        'Допродала контент клиенту: в марте при базовом плане в 9 постов продала ещё 15 — перевыполнила план на 166%',
        'Выстроила эффективную коммуникацию с клиентом: получаю положительную обратную связь по контенту и своей работе',
        'Предлагаю новые идеи для контента на основе статистики канала'
      ] }
    ]
  },
  {
    title: 'ТГ-бот Мамба × Мэйби Бэйби',
    client: 'Мамба × Мэйби Бэйби',
    short: 'Придумала логику и копирайт бота-квеста для коллаборации Мамбы и Мэйби Бэйби. Вау-результат — 13 938 пользователей.',
    cover: 'assets/maybe-poster.jpg', coverPos: 'center top',
    blocks: [
      { h: 'Клиент', p: ['Мамба в коллаборации с певицей Мэйби Бэйби'] },
      { h: 'Задача', p: ['Привлечь аудиторию певицы в соцсети бренда и приложение Мамбы.'] },
      { h: 'Решение', p: ['Взять за основу кампании известный мем (все заводчане любят Мэйби Бэйби) и создать текстовый телеграм-квест, в котором пользователи попадают на завод дакимакур и пытаются встретиться с директором — Викой Мэйби Бэйби. Все, кто прошёл квест до конца и подписался хотя бы на одну соцсеть бренда, участвовали в розыгрыше уникального мерча.'] },
      { h: 'Мой вклад', p: ['Придумала логику квеста, прохождение уровней, тесты и приколы. Написала весь копирайт.'] },
      { h: 'Результаты', stats: [['13 938', 'пользователей в боте'], ['600', 'установок приложения']] },
      { h: 'Пример текста', quote: { label: 'Level 1 [заводская проходная] · 1-й вопрос уровня', p: [
        'Ты прошёл через ярко-розовую входную дверь и попал на заводскую проходную. За стойкой охраны сидит вахтёрша, красит ногти и слушает песню Мэйби Бэйби. Единственный шанс попасть внутрь — уболтать вахтёршу.',
        'Подойдя ближе и прислушавшись, ты слышишь слова песни: «Мэйби Бэйби, Мэйби-Мэйби Бэйби. Лучше твоей детки, лучше всех на свете. Губы пахнут малиной, девочка-???». Чтобы расположить к себе вахтёршу, надо угадать, что это за песня!'
      ] } },
      { h: 'Как это выглядело', gallery: ['assets/maybe-bot-1.jpg', 'assets/maybe-bot-2.jpg', 'assets/maybe-giveaway.jpg'] },
      { h: 'Полный копирайт', links: [['Открыть документ', 'https://docs.google.com/document/d/1jmg2rI51Jnjj-xL1XeWFS0J84csbgxm-JMsWretjR9U/edit?tab=t.0']] }
    ]
  },
  {
    title: 'Реклама телефона HONOR с настоящим медведем',
    client: 'HONOR',
    short: 'Сняла рекламный ролик телефона HONOR с участием настоящего медведя.',
    cover: 'assets/honor-poster-3.jpg', preview: 'assets/honor-preview.mp4',
    blocks: [
      { h: 'Моя роль', list: [
        'Составила смету ролика и уложилась в скромный бюджет клиента',
        'Собрала команду: оператора, гафера, фокус-пуллера, второго режиссёра, монтажёра и хелперов',
        'Режиссировала съёмку на площадке с участием живого медведя',
        'Согласовывала с клиентом все кадры в «прямом эфире» по плейбеку',
        'Вместе с монтажёром собрала итоговый ролик и согласовала его с клиентом'
      ] },
      { h: 'Ролик', video: 'assets/honor-bear.mp4', poster: 'assets/honor-poster-3.jpg', links: [['Смотреть на YouTube', 'https://youtu.be/2LD9RAq3fbI?si=-nhURwLTrVml_tJu']] }
    ]
  },
  {
    title: 'Мамба × «Победа»: спид-дейтинг на высоте 10 000 метров',
    client: 'Мамба × Победа',
    short: 'Написала юмористическую речь ведущего для совместного мероприятия «Победы» и Мамбы.',
    cover: 'assets/pobeda-cover.jpg',
    blocks: [
      { h: 'Задача', p: ['Повысить узнаваемость Мамбы и привлечь целевую аудиторию с помощью необычной механики на основе быстрых свиданий.'] },
      { h: 'Решение', p: ['Организовать спид-дейтинг по маршруту «Москва — Мэтч — Москва» на рейсе авиакомпании «Победа» и пригласить ведущим Владимира Маркони. Участников отбирали по итогам конкурса на лендинге.'] },
      { h: 'Мой вклад', p: ['Написала вступительную речь для ведущего — Владимира Маркони.'] },
      { h: 'Отрывки', quote: { p: [
        'Если вы всегда хотели познакомиться с кем-то, но боялись и сбегали со свиданий, то есть хорошая новость — с этого свидания вы не сможете уйти! За бортом −55 градусов, мы будем на высоте десяти тысяч метров над уровнем моря, так что дейтинг у нас сегодня в прямом смысле на высоте.',
        'Несмотря на романтический вайб, дымить, курить и парить категорически запрещается. Не искушайте судьбу — лучше искушайте партнёра по спид-дейтингу.',
        'Ремень должен быть пристёгнут и затянут, когда горит табло «Пристегните ремни». После взлёта ремень нужно будет расстегнуть, ведь у нас впереди дейтинг, а не семейная поездка к бабушке в Балаково! Я о ремнях безопасности, если что.'
      ] } },
      { h: 'Результаты', stats: [['10 млн+', 'общий охват'], ['5 000+', 'заявок на участие'], ['десятки', 'упоминаний в крупных СМИ'], ['сотни', 'единиц UGC-контента']] },
      { h: 'На борту', gallery: ['assets/pobeda-marconi.jpg'], single: true },
      { h: 'Полный текст', links: [['Открыть документ', 'https://docs.google.com/document/d/1K1l1NXw7i-TPhND_qraKXY5RSMOJ2hzQmHTXeaeb7zc/edit?tab=t.0']] }
    ]
  },
  {
    title: 'Недушные вопросы для Мамбы',
    client: 'Мамба',
    short: 'Придумала недушные вопросы — их прикрепили к вентилятору на закрытой вечеринке Мамбы.',
    cover: 'assets/fan-1.jpg',
    blocks: [
      { h: 'Задача', p: ['Повысить узнаваемость бренда с помощью офлайн-мероприятия.'] },
      { h: 'Решение', p: ['Провести закрытую вечеринку и пригласить на неё партнёров, инфлюенсеров и актёров. Кульминацией вечера стало выступление хедлайнеров — стендап-комиков, которые рассказали о своих душных и неудачных свиданиях и пообщались с гостями. Завершили вечеринку диджей-сеты актёров Театра имени Евгения Вахтангова.'] },
      { h: 'Мой вклад', p: ['Написала недушные вопросы, которые прикрепили к лентам на вентиляторе: они помогали гостям легко начать разговор.'] },
      { h: 'Копирайт', olist: [
        'Что бы сделал, очутившись в 2007-м?', 'С каким ароматом были бы духи из тебя?', 'Свой кратер на Луне или своя однушка в Тюмени?',
        'Как бы назывался врач, лечащий от лени?', 'Готов 1 год не выходить на улицу за 1 млн рублей?', 'Что бы изобрёл в своей злодейской лаборатории?',
        'Двойной эспрессо или карамельный раф?', 'Солгал бы ради работы мечты?', 'Подерёшься с огромной курицей или с кучей мини-боксёров?',
        'Какое преступление совершил бы, если о нём никто не узнает?', 'Что бы слушал, если бы музыку играли на овощах?', 'Опиши ребёнка с паническим страхом майонеза',
        'Что важнее всего взять на свадьбу лучшего друга?', 'Кого из знаменитостей позвал бы в бар?'
      ] },
      { h: 'Как это выглядело', gallery: ['assets/fan-2.jpg'], single: true },
      { h: 'Результаты', p: ['Вечеринка с насыщенной программой помогла бренду поддержать и нарастить узнаваемость, а также заложила основу для дальнейшего продвижения.'] }
    ]
  },
  {
    title: 'Кабинка Битрикс24 в «Депо»',
    client: 'Битрикс24',
    short: 'Написала креативные лайны для спецпроекта Битрикс24 в «Депо».',
    cover: 'assets/bitrix-cover.jpg',
    blocks: [
      { h: 'Задача', p: ['Написать копирайт для брендированной кабинки с шумоизоляцией, которую на месяц установили на фудкорте «Депо».', 'Цель — нативно рассказать о преимуществах Битрикс24 через юмор и органичную связь с местом.'] },
      { h: 'Примеры лайнов', list: [
        'Прячь пасьянс, начальник идёт!', 'Профессионально пьём чай каждые два часа', 'Лайк, если ты не зумер, но тоже не хочешь работать',
        'Не курю, но перекуры — это святое', 'Тот самый момент, когда тебе прилетела задачка в 18:00, а ты уже пьёшь третий коктейль в «Депо»',
        'Секретный код, чтобы слиться с созвона: «Ой, тут курьер пришёл, сейчас вернусь»', 'Удалёнка — это когда проснулся за минуту до начала рабочего дня',
        'Пссс… не забудь закрыть вкладку с сериалом, когда будешь показывать экран', 'Объявляется срочный нытинг мемами в рабочем чатике',
        'Обед — это маленький отпуск', 'Ты уже тусуешься в баре, а на часах всё ещё 12:04 вторника'
      ] },
      { h: 'Как это выглядело', gallery: ['assets/bitrix-sign.jpg'], single: true },
      { h: 'Ссылки', links: [
        ['Полный копирайт', 'https://docs.google.com/document/d/1Ib-v7QRJvG5Z78ECq05vuMtFIMxoz_PNwS1hDjFegzI/edit?pli=1&tab=t.jq398cqej3r1'],
        ['Видео о кабинке в TikTok', 'https://www.tiktok.com/@bitrix24_ru/video/7558505547624992018']
      ] }
    ]
  },
  {
    title: 'Посты для Яндекса и Сбера',
    client: 'Яндекс · Сбер',
    short: 'Писала посты для каналов Яндекс Путешествий, Яндекс Лавки и СберУниверситета, которые собирали до 33К просмотров.',
    cover: 'assets/yandex-sber-cover.jpg',
    blocks: [
      { h: 'Посты', posts: [
        ['assets/travel-post-1.jpg', 'https://t.me/yandex_travel/2653', '33К просмотров'],
        ['assets/travel-post-2.jpg', 'https://t.me/yandex_travel/2490', '25,1К просмотров'],
        ['assets/sber-post-1.jpg', 'https://t.me/sber_university/2299', '7,5К просмотров']
      ] }
    ]
  },
  {
    title: 'Молодёжный форум SVET ON',
    client: 'Норникель',
    short: 'Превратила сообщество ВКонтакте в интерактивную площадку для зумеров: +1 780% к охвату за 57 дней.',
    cover: 'assets/svet-3.jpg', coverPos: 'center top',
    blocks: [
      { h: 'О проекте', p: ['SVET ON — форум «Норникеля» для школьников и студентов, которые хотят попробовать себя в предпринимательстве, инженерии, IT и волонтёрстве.'] },
      { h: 'Задача', p: ['Привлечь новых участников с помощью ежедневного контент-сопровождения форума.'] },
      { h: 'Моя роль', p: ['Превратила сообщество ВКонтакте в интерактивную площадку с форматами, которые вовлекают зумеров в диалог с брендом и поддерживают интерес к форуму до, во время и после события. Выстроила контент вокруг механик и тем, близких молодёжной аудитории: от карьерных ориентиров до поиска друзей и ярких впечатлений.'], list: [
        'Разработала креативную концепцию, а также стратегию присутствия и продвижения в соцсетях',
        'Адаптировала коммуникацию под ключевую ЦА — зумеров: говорила с ними на их языке, подавала информацию в лёгком и живом формате, создавала пространство для самовыражения',
        'Интегрировала форум в сообщество «Люди территории» и органично встроила креативные форматы в информационный контент',
        'Предложила нестандартные идеи в духе SVET ON, которые вовлекли текущую аудиторию и удержали новую'
      ] },
      { h: 'Результаты за 57 дней', stats: [['+2 350', 'прирост подписчиков'], ['88 316', 'охват топ-поста'], ['+1 780%', 'прирост охвата'], ['+3 120%', 'прирост комментариев'], ['+812%', 'прирост репостов']] },
      { h: 'Как это выглядело', gallery: ['assets/svet-1.jpg', 'assets/svet-2.jpg', 'assets/svet-3.jpg', 'assets/svet-4.jpg'] }
    ]
  },
  {
    title: 'Афиши спектаклей Театра на Таганке',
    client: 'Театр на Таганке',
    short: 'Писала описания спектаклей для официального сайта Театра на Таганке.',
    cover: 'assets/taganka-cover.jpg',
    blocks: [
      { h: 'О проекте', p: ['Работала в театре: ходила на спектакли, писала о них тексты, брала интервью у режиссёров и актёров, создавала контент для соцсетей. Мои тексты до сих пор остаются на сайте без изменений.'] },
      { h: 'Тексты', stack: true, posts: [
        ['assets/taganka-text-1.jpg', 'https://tagankateatr.ru/repertuar/begi-alisa-begi', '«Беги, Алиса, беги»'],
        ['assets/taganka-text-2.jpg', 'https://tagankateatr.ru/repertuar/Snegurochka', '«Снегурочка»']
      ] }
    ]
  },
  {
    title: 'Теле- и радиопрограммы для Института воспитания',
    client: 'Институт воспитания',
    short: 'Писала сценарии просветительских роликов и радиопередач для детей и подростков и снимала их как режиссёр.',
    cover: 'assets/iv-lesson.jpg',
    blocks: [
      { h: 'Клиент', p: ['Институт изучения детства, семьи и воспитания при Министерстве просвещения РФ'] },
      { h: 'О проекте', p: ['Брала интервью и работала с ведущими шоу для детей и родителей «на ухе»: подсказывала им вопросы гостям и темы для программы.'] },
      { h: 'Работы', links: [
        ['Всероссийский открытый урок «Будь готов!» к 100-летию Всесоюзной пионерской организации — сценарий и режиссура', 'https://xn--80aqakjqje5byf.xn--80adrabb4aegksdjbafk0u.xn--p1ai/ou-22-05-19/index.html'],
        ['Всероссийский открытый урок «9 мая. Победа народа» к 77-й годовщине Победы — сценарий и режиссура', 'https://xn--80aqakjqje5byf.xn--80adrabb4aegksdjbafk0u.xn--p1ai/ou-22-05-05/index.html'],
        ['Программа «Семейный час» на «Радио Дача» — сценарий', 'https://www.xn--80adrabb4aegksdjbafk0u.xn--p1ai/press-center/radio/semeynyy-chas-200822-itogi/']
      ] },
      { h: 'Как это выглядело', gallery: ['assets/iv-lesson.jpg', 'assets/iv-radio.jpg'] }
    ]
  },
  {
    title: 'Бэкстейдж-фильм для агентства Пикчер',
    client: 'Пикчер',
    short: 'Сняла динамичный ролик behind the scenes о том, как Пикчер снимал масштабную рекламу HONOR.',
    word: 'Behind the scenes', metric: 'Пикчер × HONOR', tone: 'v2',
    blocks: [
      { h: 'Задача', p: ['Снять короткий ролик о создании рекламы для HONOR, чтобы продвигать рекламное агентство Пикчер.'] },
      { h: 'Моя роль', list: [
        'Написала сценарий ролика и согласовала его с руководителем продакшена',
        'Провела все интервью для ролика',
        'Сняла бэкстейдж-кадры',
        'Составила ТЗ для монтажёра на две версии ролика: короткую для соцсетей и длинную для подачи на премии'
      ] },
      { h: 'Обратная связь от агентства', chat: ['Операционный директор агентства', 'Привет! Отлично, посмотрим)', 'Короткая версия топовая', 'Длинная ещё лучше', 'Катя, спасибо!'] },
      { h: 'Итог', p: ['Ролик опубликован в соцсетях Пикчер Медиа.'] }
    ]
  },
  {
    title: 'Чат-бот с генерацией тематических открыток в Telegram',
    client: 'Пикчер',
    short: 'Написала весь копирайт для бота-генератора открыток ко Дню всех влюблённых — от идеи до релиза за три дня.',
    cover: 'assets/cards-kiss.jpg',
    blocks: [
      { h: 'Задача', p: ['Запустить вовлекающий спецпроект ко Дню всех влюблённых и уложиться в три дня — от идеи до релиза.'] },
      { h: 'Решение', p: ['Собрали телеграм-бота, который генерирует открытки из случайного сочетания шаблонной картинки и подписи. Можно было выбрать тон — для коллеги на удалёнке или офисного друллеги — и подписать открытку перед отправкой.', 'После запуска мы расширили проект: добавили шаблоны и копирайт к 23 Февраля и 8 Марта, а также возможность выбрать пол получателя — «Леди» или «Джентльмен».'] },
      { h: 'Мой вклад', p: ['Написала весь копирайт и придумала приколы.'] },
      { h: 'Как это выглядело', gallery: ['assets/cards-bot.jpg', 'assets/cards-kiss.jpg'] }
    ]
  }
];

const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const pad = n => String(n).padStart(2, '0');

// Cards
const grid = document.getElementById('casesGrid');
grid.innerHTML = CASES.map((c, i) => {
  const cover = c.cover
    ? `<div class="case-cover"><span class="case-num">${pad(i + 1)}</span><img src="${c.cover}" alt="" loading="lazy" style="object-position:${c.coverPos || 'center'}">${c.preview ? `<video src="${c.preview}" muted loop playsinline preload="none"></video><span class="cover-play">▶ видео</span>` : ''}</div>`
    : `<div class="case-cover type ${c.tone}"><span class="case-num">${pad(i + 1)}</span><span class="cover-metric">${esc(c.metric)}</span><span class="cover-word">${esc(c.word)}</span></div>`;
  return `<button class="case-card" type="button" data-i="${i}">
    ${cover}
    <div class="case-body">
      <div class="case-client">${esc(c.client)}</div>
      <div class="case-title">${esc(c.title)}</div>
      <div class="case-short">${esc(c.short)}</div>
      <div class="case-more">Подробнее →</div>
    </div>
  </button>`;
}).join('');

// Modal
const modal = document.getElementById('caseModal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');
let lastFocus = null;

function renderBlock(b) {
  let html = `<div class="m-block"><h4>${esc(b.h)}</h4>`;
  if (b.p) html += b.p.map(t => `<p>${esc(t)}</p>`).join('');
  if (b.list) html += `<ul class="m-list"${b.p ? ' style="margin-top:14px"' : ''}>${b.list.map(t => `<li>${esc(t)}</li>`).join('')}</ul>`;
  if (b.olist) html += `<ol class="m-list">${b.olist.map(t => `<li>${esc(t)}</li>`).join('')}</ol>`;
  if (b.stats) html += `<div class="m-stats">${b.stats.map(([n, l]) => `<div class="m-stat"><b>${esc(n)}</b><span>${esc(l)}</span></div>`).join('')}</div>`;
  if (b.quote) html += `<div class="m-quote">${b.quote.label ? `<div class="q-label">${esc(b.quote.label)}</div>` : ''}${b.quote.p.map(t => `<p>${esc(t)}</p>`).join('')}</div>`;
  if (b.video) html += `<video class="m-video" src="${b.video}" poster="${b.poster || ''}" controls playsinline preload="none"></video>`;
  if (b.links) html += `<div class="m-links">${b.links.map(([t, u]) => `<a href="${esc(u)}" target="_blank" rel="noopener">${esc(t)}</a>`).join('')}</div>`;
  if (b.posts) html += `<div class="m-posts" style="--cols:${b.stack ? 1 : b.posts.length}">${b.posts.map(([src, u, cap]) => `<a class="m-post" href="${esc(u)}" target="_blank" rel="noopener"><img src="${src}" alt="${esc(cap)}"><span>${esc(cap)}</span></a>`).join('')}</div>`;
  if (b.gallery) html += `<div class="m-gallery${b.single ? ' single' : ''}">${b.gallery.map(src => `<img src="${src}" alt="" title="Открыть на весь экран">`).join('')}</div>`;
  if (b.chat) html += `<div class="m-chat"><span class="m-chat-who">${esc(b.chat[0])}</span>${b.chat.slice(1).map(t => `<span>${esc(t)}</span>`).join('')}</div>`;
  return html + '</div>';
}

function openCase(i) {
  const c = CASES[i];
  modalContent.innerHTML = `
    <div class="modal-client">Кейс ${pad(i + 1)} · ${esc(c.client)}</div>
    <h3 id="modalTitle">${c.url ? `<a href="${esc(c.url)}" target="_blank" rel="noopener">${esc(c.title)}</a>` : esc(c.title)}</h3>
    <p class="modal-lead">${esc(c.short)}</p>
    ${c.blocks.map(renderBlock).join('')}`;
  lastFocus = document.activeElement;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  modal.scrollTop = 0;
  document.body.classList.add('modal-open');
  modalClose.focus();
}

function closeCase() {
  modalContent.querySelectorAll('video').forEach(v => v.pause());
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  if (lastFocus) lastFocus.focus();
}

// Lightbox: gallery images open full screen
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = '<img alt=""><button class="modal-close" aria-label="Закрыть">×</button>';
document.body.appendChild(lightbox);
const lightboxImg = lightbox.querySelector('img');
const closeLightbox = () => lightbox.classList.remove('open');
modalContent.addEventListener('click', e => {
  const img = e.target.closest('.m-gallery img');
  if (!img) return;
  lightboxImg.src = img.src;
  lightbox.classList.add('open');
});
lightbox.addEventListener('click', closeLightbox);

grid.addEventListener('click', e => {
  const card = e.target.closest('.case-card');
  if (card) openCase(+card.dataset.i);
});
// Hover preview video on cards
grid.querySelectorAll('.case-cover video').forEach(v => {
  const card = v.closest('.case-card');
  card.addEventListener('mouseenter', () => { v.currentTime = 0; v.play().then(() => v.classList.add('playing')).catch(() => {}); });
  card.addEventListener('mouseleave', () => { v.pause(); v.classList.remove('playing'); });
});

modalClose.addEventListener('click', closeCase);
modal.addEventListener('click', e => { if (e.target === modal) closeCase(); });
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (lightbox.classList.contains('open')) closeLightbox();
  else if (modal.classList.contains('open')) closeCase();
});

// Nav: hide on scroll down, show on scroll up
const nav = document.getElementById('siteNav');
let lastY = window.scrollY;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y > lastY && y > 80) nav.classList.add('hidden');
  else if (y < lastY) nav.classList.remove('hidden');
  lastY = y;
}, { passive: true });
