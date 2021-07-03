import { ref } from 'vue';
import { FetchApi } from '@sampullman/fetch-api';

const jsonInterceptor = async (res) => {
  res.data = res.body ? await res.json() : null;
  return res;
};

const api = new FetchApi({
  responseInterceptors: [jsonInterceptor],
});

const sendEmail = (name, email, message) => (
  api.request({
    url: 'https://api.sendinblue.com/v3/smtp/email',
    method: 'POST',
    headers: {
      charset: 'iso-8859-1',
      'api-key': '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',
    },
    data: {
      sender: { name, email },
      to: [{
        name: 'SamaTech',
        email: 'contact@samatech.tw',
      }],
      subject: 'SamaTech Web Form',
      htmlContent: '<html><head></head><body>' +
        `<h4>From: ${email}</h4><h4>Name: ${name}</h4><h4>Message:</h4><p>${message}</p></body></html>`,
    },
  })
);

const RATE_LIMIT_KEY = 'rate-limit';

export default function useEmail(t) {
  const error = ref(null);
  const sending = ref(false);
  const name = ref('');
  const success = ref('');
  const email = ref('');
  const message = ref('');
  const send = async () => {
    error.value = null;
    success.value = null;
    const now = new Date().getTime();
    const prevTime = parseInt(localStorage.getItem(RATE_LIMIT_KEY) || '0');
    if(prevTime && (now - prevTime) < 1000 * 60 * 2) {
      error.value = t('contact.email_limit');
    } else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value) && email.value.length < 100) {
      error.value = t('contact.invalid_email');
    } else if(name.value.length < 2 || name.value.length > 100) {
      error.value = t('contact.invalid_name');
    } else if(message.value.length < 10 || message.value.length > 1000) {
      error.value = t('contact.invalid_message');
    } else {
      try {
        sending.value = true;
        await sendEmail(name.value, email.value, message.value);
        success.value = t('contact.email_success');
        localStorage.setItem(RATE_LIMIT_KEY, now.toString());
      } catch(e) {
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
};
