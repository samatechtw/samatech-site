import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { FetchApi, FetchRequestConfig } from '@sampullman/fetch-api';
import { IJsonObject } from './i-json-object';

class ApiResponse extends Response {
  data?: IJsonObject;
}

const jsonInterceptor = async (res: Response): Promise<ApiResponse> => {
  (res as ApiResponse).data = res.body ? await res.json() : null;
  return res;
};

class MailApi extends FetchApi<ApiResponse> {
  override async request(config: FetchRequestConfig): Promise<ApiResponse> {
    return super.request(config);
  }
}

const api = new FetchApi({
  responseInterceptors: [jsonInterceptor],
});

const sendEmail = (name: string, email: string, message: string) =>
  api.request({
    url: 'https://api.sendinblue.com/v3/smtp/email',
    method: 'POST',
    headers: {
      charset: 'iso-8859-1',
      'api-key':
        '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',
    },
    data: {
      sender: { name, email },
      to: [
        {
          name: 'SamaTech',
          email: 'contact@samatech.tw',
        },
      ],
      subject: 'SamaTech Web Form',
      htmlContent:
        '<html><head></head><body>' +
        `<h4>From: ${email}</h4><h4>Name: ${name}</h4><h4>Message:</h4><p>${message}</p></body></html>`,
    },
  });

const RATE_LIMIT_KEY = 'rate-limit';

export default function useEmail() {
  const { t } = useI18n();
  const error = ref();
  const sending = ref(false);
  const name = ref('');
  const success = ref<string | null>('');
  const email = ref('');
  const message = ref('');
  const send = async () => {
    error.value = null;
    success.value = null;
    const now = new Date().getTime();
    const prevTime = parseInt(localStorage.getItem(RATE_LIMIT_KEY) || '0');
    if (prevTime && now - prevTime < 1000 * 60 * 2) {
      error.value = t('contact.email_limit');
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value) &&
      email.value.length < 100
    ) {
      error.value = t('contact.invalid_email');
    } else if (name.value.length < 2 || name.value.length > 100) {
      error.value = t('contact.invalid_name');
    } else if (message.value.length < 10 || message.value.length > 1000) {
      error.value = t('contact.invalid_message');
    } else {
      try {
        sending.value = true;
        await sendEmail(name.value, email.value, message.value);
        success.value = t('contact.email_success');
        localStorage.setItem(RATE_LIMIT_KEY, now.toString());
      } catch (e) {
        console.log('EMAIL ERROR', e);
        error.value = t('contact.email_error');
      } finally {
        sending.value = false;
      }
    }
  };
  return {
    name,
    email,
    message,
    error,
    success,
    sending,
    send,
  };
}
