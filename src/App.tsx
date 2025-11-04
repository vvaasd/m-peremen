import { useState } from 'react';
import { TaskModal } from './components/TaskModal';
import { AvatarSvg } from './components/svg/avatar';
import { ScrollArea } from './components/ui/scroll-area';
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './components/ui/dialog';
import { AppContext } from './context/AppContext';
import { VkSvg } from './components/svg/vk';
import { TgSvg } from './components/svg/tg';
import { SendTaskModal } from './components/SendTaskModal';
import { Separator } from './components/ui/separator';
import { Toaster } from './components/ui/sonner';

function App() {
  const [teamName, setTeamName] = useState<string>('');
  const [taskId, setTaskId] = useState<string>('');

  return (
    <AppContext.Provider value={{ teamName, setTeamName, taskId, setTaskId }}>
      <ScrollArea className="h-dvh">
        <Toaster />
        <div className="flex items-center justify-center min-h-dvh h-full p-4">
          <div className="rounded-4xl border max-w-[584px] min-w-[343px] bg-neutral-50 overflow-hidden">
            <div className="pt-4">
              <div className="px-4 flex flex-col gap-4">
                <div className="flex h-24 bg-gradient-to-r from-[#F897DA] to-pink-500 rounded-l-full justify-center items-center">
                  <AvatarSvg className="w-20 h-20 shrink-0" />
                  <span className="font-semibold text-neutral-100">
                    ОНЛАЙН-КОНКУРС РЕГИОНАЛЬНОГО ПРОЕКТА «М-ПЕРЕМЕН»
                  </span>
                </div>
                <h2 className="text-center text-xl border-b">
                  Задания онлайн-конкурса
                </h2>
                <div className="flex flex-col gap-2">
                  <TaskModal text="«КОМАНДА-РАБОТАЕМ»" taskId="0">
                    <DialogHeader>
                      <DialogTitle>«КОМАНДА-РАБОТАЕМ»</DialogTitle>
                      <DialogDescription>Задание 1</DialogDescription>
                    </DialogHeader>
                    <p>
                      <span className="text-[#6136F5]">Задача:</span>{' '}
                      зарегистрировать команду (тех людей, которые будут
                      принимать участие в онлайн-этапе проекта).
                    </p>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#6136F5]">Что нужно сделать:</p>
                      <ul>
                        {[
                          'Собрать команду от 3 человек, назначить капитана.',
                          <span>
                            Заполнить&nbsp;
                            <a
                              href="https://disk.yandex.ru/d/7zQFwLRWTOBUtg"
                              className="text-[#6136F5] hover:underline"
                              target="_blank"
                              rel="noopener noreferer"
                            >
                              регистрационную форму
                            </a>
                            &nbsp;для участия команды в проекте, если форма ещё
                            не заполнена.
                          </span>,
                          'Собрать подписанные согласия на обработку персональных данных от всех участников.',
                          'Все файлы загрузить на облачное хранилище.',
                          'Отправить ссылку на облачное хранилище при выполнении задания.',
                        ].map((el, index) => (
                          <li
                            key={typeof el === 'string' ? el : index}
                            className="list-decimal ml-5"
                          >
                            {el}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p>
                        <a
                          href="https://disk.yandex.ru/d/7zQFwLRWTOBUtg"
                          className="text-[#6136F5] hover:underline"
                          target="_blank"
                          rel="noopener noreferer"
                        >
                          Шаблоны форм согласия↗
                        </a>
                      </p>
                      <p>
                        <a
                          href="https://disk.yandex.ru/d/7zQFwLRWTOBUtg"
                          className="text-[#6136F5] hover:underline"
                          target="_blank"
                          rel="noopener noreferer"
                        >
                          Форма регистрации↗
                        </a>
                      </p>
                    </div>
                  </TaskModal>
                  <TaskModal text="«КТО МЫ»" taskId="1">
                    <DialogHeader>
                      <DialogTitle>«КТО МЫ»</DialogTitle>
                      <DialogDescription>Задание 2</DialogDescription>
                    </DialogHeader>
                    <p>
                      <span className="text-[#6136F5]">Задача:</span> Создать
                      первый пост-представление команды.
                    </p>
                    <div className="flex flex-col gap-1">
                      <p>
                        <span className="text-[#6136F5]">
                          Что нужно сделать:
                        </span>{' '}
                        Опубликовать в соцсетях паблика школы или медиакласса
                        пост (текст, фото, видео) о команде: кто вы, что вас
                        объединяет и ваши цели на конкурс:{' '}
                        <span className="text-[#6136F5]">
                          #РосмолодёжьГранты #Росмолодёжь #расскажи_о_главном
                          #М_Перемен
                        </span>
                      </p>
                      <p className="py-4">
                        <span className="text-[#6136F5]">Итог:</span> Прикрепить
                        ссылку на публикацию.
                      </p>
                      <p className="text-[#6136F5]">Критерии оценки:</p>
                      <ul>
                        {[
                          'Креативность и оригинальность подачи.',
                          'Полнота раскрытия темы (кто мы, цели и т.д.).',
                          'Качество визуального контента (фото, видео, графика).',
                          'Эмоциональность и вовлеченность.',
                          'Использование указанного хештега проекта.',
                        ].map((el) => (
                          <li key={el} className="list-decimal ml-5">
                            {el}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TaskModal>
                  <TaskModal text="«ИСТОКИ»" taskId="2">
                    <DialogHeader>
                      <DialogTitle>«ИСТОКИ»</DialogTitle>
                      <DialogDescription>Задание 3</DialogDescription>
                    </DialogHeader>
                    <p>
                      <span className="text-[#6136F5]">Задача:</span> Написать
                      увлекательный пост об истории школы или медиакласса.
                    </p>
                    <div className="flex flex-col gap-1">
                      <p>
                        <span className="text-[#6136F5]">
                          Что нужно сделать:
                        </span>{' '}
                        Создать текст с интересными фактами и сюжетом. Выбрать
                        тему: История школы или создание медиакласса.
                        Опубликовать в соцсетях паблика школы или медиакласса
                        пост и добавить хештеги:{' '}
                        <span className="text-[#6136F5]">
                          #РосмолодёжьГранты #Росмолодёжь #расскажи_о_главном
                          #М_Перемен
                        </span>
                      </p>
                      <p className="py-4">
                        <span className="text-[#6136F5]">Итог:</span> Прикрепить
                        ссылку на публикацию.
                      </p>
                      <p className="text-[#6136F5]">Критерии оценки:</p>
                      <ul>
                        {[
                          'Грамотность и структурированность текста.',
                          'Наличие уникальной истории или интересных фактов.',
                          'Увлекательность повествования (сторителлинг).',
                          'Соответствие выбранной теме.',
                          'Привлекательность заголовка и лида.',
                          'Использование указанных хештегов проекта.',
                        ].map((el) => (
                          <li key={el} className="list-decimal ml-5">
                            {el}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TaskModal>
                  <TaskModal text="«АФИША»" taskId="3">
                    <DialogHeader>
                      <DialogTitle>«АФИША»</DialogTitle>
                      <DialogDescription>Задание 4</DialogDescription>
                    </DialogHeader>
                    <p>
                      <span className="text-[#6136F5]">Задача:</span>{' '}
                      Разработать дизайн афиши для предстоящего школьного
                      мероприятия.
                    </p>
                    <div className="flex flex-col gap-1">
                      <p>
                        <span className="text-[#6136F5]">Что сделать:</span>{' '}
                        Создать одно изображение или серию картинок для
                        соцсетей. Указать название, дату, время, место и слоган.
                        Опубликовать в соцсетях паблика школы или медиакласса
                        афишу и добавить хештеги:{' '}
                        <span className="text-[#6136F5]">
                          #РосмолодёжьГранты #Росмолодёжь #расскажи_о_главном
                          #М_Перемен
                        </span>
                      </p>
                      <p className="py-4">
                        <span className="text-[#6136F5]">Итог:</span> Прикрепить
                        ссылку на публикацию.
                      </p>
                      <p className="text-[#6136F5]">Критерии оценки:</p>
                      <ul>
                        {[
                          'Композиционная гармония и читаемость.',
                          'Оригинальность дизайнерского решения.',
                          'Полнота информации (дата, место, название).',
                          'Соответствие стиля тематике мероприятия.',
                          'Качество визуального исполнения.',
                          'Использование указанных хештегов проекта.',
                        ].map((el) => (
                          <li key={el} className="list-decimal ml-5">
                            {el}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TaskModal>
                  <TaskModal text="«ВИДЕО-ВИЗИТКА»" taskId="4">
                    <DialogHeader>
                      <DialogTitle>«ВИДЕО-ВИЗИТКА»</DialogTitle>
                      <DialogDescription>Задание 5</DialogDescription>
                    </DialogHeader>
                    <p>
                      <span className="text-[#6136F5]">Задача:</span> Снять
                      горизонтальное видео-визитку своей школы.
                    </p>
                    <div className="flex flex-col gap-1">
                      <p>
                        <span className="text-[#6136F5]">Что сделать:</span>{' '}
                        Создать динамичный ролик (до 120 секунд) в
                        горизонтальном формате. Это может быть тур по школе,
                        интервью или нарезка ярких моментов. Опубликовать в
                        соцсетях паблика школы или медиакласса видео и добавить
                        хештеги:{' '}
                        <span className="text-[#6136F5]">
                          #РосмолодёжьГранты #Росмолодёжь #расскажи_о_главном
                          #М_Перемен
                        </span>
                      </p>
                      <p className="py-4">
                        <span className="text-[#6136F5]">Итог:</span> Прикрепить
                        ссылку на публикацию.
                      </p>
                      <p className="text-[#6136F5]">Критерии оценки:</p>
                      <ul>
                        {[
                          'Оригинальность идеи и сценария.',
                          'Качество операторской работы (стабильность, ракурсы).',
                          'Динамичность монтажа.',
                          'Чистота и уместность музыкального сопровождения.',
                          'Эмоциональное воздействие на зрителя.',
                          'Использование указанных хештегов проекта.',
                        ].map((el) => (
                          <li key={el} className="list-decimal ml-5">
                            {el}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TaskModal>
                  <TaskModal text="«ТРЕНДЫ»" taskId="5">
                    <DialogHeader>
                      <DialogTitle>«ТРЕНДЫ»</DialogTitle>
                      <DialogDescription>Задание 6</DialogDescription>
                    </DialogHeader>
                    <p>
                      <span className="text-[#6136F5]">Задача:</span> Снять
                      вертикальный клип, участвующий в актуальном
                      интернет-тренде.
                    </p>
                    <div className="flex flex-col gap-1">
                      <p>
                        <span className="text-[#6136F5]">Что сделать:</span>{' '}
                        Использовать популярный аудио-трек или формат
                        Reels/Short. Тематика должна быть связана со школой,
                        учёбой или жизнью команды. Видео должно быть динамичным
                        и зацикленным. Опубликовать в соцсетях паблика школы или
                        медиакласса видеоклип и добавить хештеги:{' '}
                        <span className="text-[#6136F5]">
                          #РосмолодёжьГранты #Росмолодёжь #расскажи_о_главном
                          #М_Перемен
                        </span>
                      </p>
                      <p className="py-4">
                        <span className="text-[#6136F5]">Итог:</span> Прикрепить
                        ссылку на публикацию.
                      </p>
                      <p className="text-[#6136F5]">Критерии оценки:</p>
                      <ul>
                        {[
                          'Узнаваемость и актуальность использованного тренда.',
                          'Креативная адаптация тренда под школьную тему.',
                          'Динамичность и зацикленность видео.',
                          'Качество съемки и монтажа.',
                          'Эмоциональное воздействие на зрителя.',
                          'Использование указанных хештегов проекта.',
                        ].map((el) => (
                          <li key={el} className="list-decimal ml-5">
                            {el}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TaskModal>
                  <TaskModal text="«ШКОЛЬНЫЕ БУДНИ»" taskId="6">
                    <DialogHeader>
                      <DialogTitle>«ШКОЛЬНЫЕ БУДНИ»</DialogTitle>
                      <DialogDescription>Задание 7</DialogDescription>
                    </DialogHeader>
                    <p>
                      <span className="text-[#6136F5]">Задача:</span> Создать
                      фотоисторию, передающую атмосферу школьной жизни
                    </p>
                    <div className="flex flex-col gap-1">
                      <p>
                        <span className="text-[#6136F5]">Что сделать:</span>{' '}
                        Создать серию из 5-10 фотографий, показывающих разные
                        моменты будней (уроки, перемены, творчество).
                        Опубликовать в соцсетях паблика школы или медиакласса
                        пост с подборкой фотографий и добавить хештеги:{' '}
                        <span className="text-[#6136F5]">
                          #РосмолодёжьГранты #Росмолодёжь #расскажи_о_главном
                          #М_Перемен
                        </span>
                      </p>
                      <p className="py-4">
                        <span className="text-[#6136F5]">Итог:</span> Прикрепить
                        ссылку на публикацию.
                      </p>
                      <p className="text-[#6136F5]">Критерии оценки:</p>
                      <ul>
                        {[
                          'Выразительность и эмоциональность каждого кадра.',
                          'Передача уникальной атмосферы школы.',
                          'Единство стиля всей серии.',
                          'Качество композиции и освещения.',
                          'Целостность фотоистории.',
                        ].map((el) => (
                          <li key={el} className="list-decimal ml-5">
                            {el}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TaskModal>
                  <TaskModal text="«РЕФЛЕКСИЯ»" taskId="7">
                    <DialogHeader>
                      <DialogTitle>«РЕФЛЕКСИЯ»</DialogTitle>
                      <DialogDescription>Задание 8</DialogDescription>
                    </DialogHeader>
                    <p>
                      <span className="text-[#6136F5]">Задача:</span> Создать
                      видео-отзыв о личном опыте участия в проекте «М-перемен».
                    </p>
                    <div className="flex flex-col gap-1">
                      <p>
                        <span className="text-[#6136F5]">Что сделать:</span>{' '}
                        Создать видеоотзыв о личном опыте участия в проекте
                        «М-Перемен». Что нужно сделать: Записать короткое видео
                        (1-2 минуты) от лица команды или отдельных участников.
                        Ответить на вопросы: Что было самым ценным? Какие
                        трудности преодолели? Что изменилось в нашем школьном
                        медиа?
                      </p>
                      <p className="py-4">
                        <span className="text-[#6136F5]">Итог:</span> Прикрепить
                        ссылку на публикацию.
                      </p>
                    </div>
                  </TaskModal>
                </div>
                <Separator />
                <SendTaskModal text="Отправить результаты" initialTaskId={''} />
              </div>
              <footer className="mt-4 px-8 py-4 bg-neutral-200">
                <h3 className="text-center font-semibold text-xl border-b">
                  «М-ПЕРЕМЕН»
                </h3>
                <div className="flex gap-2 justify-center pt-2">
                  <a
                    href="https://t.me/mperemen_bot"
                    target="_blank"
                    rel="noopener noreferer"
                  >
                    <TgSvg className="w-8 h-8" />
                  </a>
                  <a
                    href="https://vk.com/m__peremen?from=groups"
                    target="_blank"
                    rel="noopener noreferer"
                  >
                    <VkSvg className="w-8 h-8" />
                  </a>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </ScrollArea>
    </AppContext.Provider>
  );
}

export default App;
