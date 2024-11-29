import { StateCreator } from 'zustand';

type NotificationType = {
  text: string;
  error: boolean;
  show: boolean;
};

export type NotificationSliceType = {
  notification: NotificationType;
};

export const createNotificationSlice: StateCreator<
  NotificationSliceType
> = () => ({
  notification: {
    text: '',
    error: false,
    show: false,
  },
});
