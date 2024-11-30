import { StateCreator } from 'zustand';

type NotificationType = {
  text: string;
  error: boolean;
  show: boolean;
};

export type NotificationSliceType = {
  notification: NotificationType;
  showNotification: (payload: Pick<NotificationType, 'text' | 'error'>) => void;
  hideNotification: () => void;
};

export const createNotificationSlice: StateCreator<NotificationSliceType> = (
  set,
  get
) => ({
  notification: {
    text: '',
    error: false,
    show: false,
  },
  showNotification: (payload) => {
    set({
      notification: {
        text: payload.text,
        error: payload.error,
        show: true,
      },
    });
    setTimeout(() => {
      get().hideNotification();
    }, 4000);
  },
  hideNotification: () => {
    set({
      notification: {
        text: '',
        error: false,
        show: false,
      },
    });
  },
});
