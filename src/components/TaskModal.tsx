import { Dialog, DialogTrigger, DialogContent, DialogClose } from './ui/dialog';
import { Button } from './ui/button';
import { DialogFooter, DialogOverlay, DialogPortal } from './ui/dialog';
import type { ReactNode } from 'react';
import { SendTaskModal } from './SendTaskModal';

export const TaskModal = ({
  children,
  text,
  taskId,
}: {
  children: ReactNode;
  text: string;
  taskId: string;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{text}</Button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay>
          <DialogContent>
            {children}
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Назад</Button>
              </DialogClose>
              <SendTaskModal
                text="Отправить результаты задания"
                initialTaskId={taskId}
              />
            </DialogFooter>
          </DialogContent>
        </DialogOverlay>
      </DialogPortal>
    </Dialog>
  );
};
