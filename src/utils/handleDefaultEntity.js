import { postJSON, putJSON } from '../services/api';

const createNew = async (url) => {
  // Создается сущность по умолчанию (например профиль, ленту пользователя)
  // без привязки к внешнему ключу
  const defaultEntity = await postJSON(url);
  return defaultEntity.data;
  //const { id } = defaultEntity;

  // Привязка к сущности по внешнему ключу
  //await update(url, { id, foreignKey });
};

async function update(url, toUpdate) {
  await putJSON(url, toUpdate);
}

export default { createNew, update };