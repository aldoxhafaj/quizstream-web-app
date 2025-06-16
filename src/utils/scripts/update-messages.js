import fs from 'fs';

const getJSON = (path) => {
  try {
    const content = fs.readFileSync(new URL(path, import.meta.url), 'utf-8');

    return JSON.parse(content);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return {};
  }
};

const messagesEn = getJSON('../../i18n/en/messages.json');
const messagesAl = getJSON('../../i18n/sqal/messages.json');
const allMessages = getJSON('../../../messages.json');

const messagesEnUpdated = { ...messagesEn };
const messagesAlUpdated = { ...messagesAl };

Object.entries(allMessages).forEach(([key, value]) => {
  if (!messagesEnUpdated[key]) {
    messagesEnUpdated[key] = value;
  }

  if (!messagesAlUpdated[key]) {
    messagesAlUpdated[key] = value;
  }
});

Object.keys(messagesEnUpdated).forEach((key) => {
  if (!allMessages[key]) {
    delete messagesEnUpdated[key];
  }
});

Object.keys(messagesAlUpdated).forEach((key) => {
  if (!allMessages[key]) {
    delete messagesAlUpdated[key];
  }
});

fs.writeFileSync(
  'src/i18n/en/messages.json',
  JSON.stringify(messagesEnUpdated, null, 2),
);

fs.writeFileSync(
  'src/i18n/sqal/messages.json',
  JSON.stringify(messagesAlUpdated, null, 2),
);
