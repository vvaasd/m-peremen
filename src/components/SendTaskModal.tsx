import {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogClose,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { DialogFooter } from './ui/dialog';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '@/context/AppContext';
import { TASKS } from '@/constants/tasks';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from './ui/select';
import { toast } from 'sonner';
import { Loader2Icon } from 'lucide-react';

export const SendTaskModal = ({
  text,
  initialTaskId,
}: {
  text: string;
  initialTaskId: string;
}) => {
  const [lastSend, setLastSend] = useState<{
    id: number;
    taskId: number;
    team: string;
    link: string;
  }>({
    id: -1,
    taskId: -1,
    team: '',
    link: '',
  });
  const [link, setLink] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const urlParams = new URLSearchParams(window.location.search);

  const userId = urlParams.get('userId')?.toString();

  const { teamName, setTeamName, taskId, setTaskId } = useContext(AppContext);

  useEffect(() => {
    setTaskId(initialTaskId);
  }, []);

  const isDisabled = !link.trim() || !teamName.trim() || !taskId || isLoading;

  const onClick = async () => {
    if (isDisabled) return;

    setIsLoading(true);
    try {
      if (!userId) {
        toast.error('Возникла ошибка при авторизации');
        setIsLoading(false);
        return;
      }

      const payload = {
        id: parseInt(userId),
        taskId: parseInt(taskId),
        team: teamName,
        link: link,
      };

      if (
        payload.taskId == lastSend.taskId &&
        payload.link == lastSend.link &&
        payload.id == lastSend.id &&
        payload.team == lastSend.team
      ) {
        toast.error('Вы уже отправили указанные данные');
        setIsLoading(false);
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));

      await fetch('https://мперемен.рф/api/v1/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        credentials: 'include',
      });
      setLastSend(payload);

      toast.success('Данные успешно отправлены');
    } catch {
      toast.error('При отправке данных произошла ошибка');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#6136F5] hover:bg-[#644CB8]">{text}</Button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                Онлайн-конкурс всероссийского
                <br />
                проекта «М-ПЕРЕМЕН»
              </DialogTitle>
              <DialogDescription>
                Пожалуйста, отправьте выполненное задание в рамках
                онлайн-конкурса через наше веб-приложение.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-1">
                <Label htmlFor="name-1" className="text-[#6136F5]">
                  Название вашей команды
                </Label>
                <Input
                  id="name-1"
                  name="name"
                  placeholder="Зеленые Слоны"
                  value={teamName}
                  onChange={(event) => {
                    setTeamName(event.target.value);
                  }}
                />
              </div>

              <div className="grid gap-1">
                <Label className="text-[#6136F5]">
                  Выберите задание, которое вы выполнили
                </Label>
                <Select
                  onValueChange={(event) => setTaskId(event)}
                  value={taskId}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Выберите задание из списка" />
                  </SelectTrigger>
                  <SelectContent>
                    {TASKS.map((task) => (
                      <SelectItem key={task.id} value={task.id}>
                        {task.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-1">
                <Label htmlFor="link-1" className="text-[#6136F5]">
                  Укажите ссылку на результаты выполненного задания
                </Label>
                <Input
                  id="link-1"
                  name="link"
                  placeholder="https://disk.yandex.ru"
                  value={link}
                  onChange={(event) => {
                    setLink(event.target.value);
                  }}
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Отмена</Button>
              </DialogClose>
              <Button
                className="bg-[#6136F5] hover:bg-[#644CB8]"
                onClick={onClick}
                disabled={isDisabled}
              >
                {isLoading && <Loader2Icon className="animate-spin" />}
                Отправить
              </Button>
            </DialogFooter>
          </DialogContent>
        </DialogOverlay>
      </DialogPortal>
    </Dialog>
  );
};
