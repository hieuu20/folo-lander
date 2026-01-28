import { toast, ToastContent } from 'react-toastify';

class Notify {
  success(text: ToastContent<unknown>) {
    toast.success(text, {
      position: 'bottom-right',
    });
  }
  error(text: ToastContent<unknown>) {
    toast.error(text, {
      position: 'bottom-right',
    });
  }
  warn(text: ToastContent<unknown>) {
    toast.error(text, {
      position: 'bottom-right',
    });
  }
  info(text: ToastContent<unknown>) {
    toast.error(text, {
      position: 'bottom-right',
    });
  }
}

export const notify = new Notify();
