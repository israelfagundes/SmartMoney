import {getUUID} from './UUID';
import {getRealm} from './Realm';

export const getDefaultCategories = () => {
  return [
    {
      id: getUUID(),
      name: 'Alimentação',
      color: '#f1c40f',
      isDebit: true,
      order: 0,
    },
    {
      id: getUUID(),
      name: 'Restaurantes e Bares',
      color: '#2ecc71',
      isDebit: true,
      order: 1,
    },
    {
      id: getUUID(),
      name: 'Casa',
      color: '#3498db',
      isDebit: true,
      order: 2,
    },
    {
      id: getUUID(),
      name: 'Compras',
      color: '#9b59b6',
      isDebit: true,
      order: 3,
    },
    {
      id: getUUID(),
      name: 'Cuidados Pessoais',
      color: '#1abc9c',
      isDebit: true,
      order: 4,
    },
    {
      id: getUUID(),
      name: 'Dívidas e Empréstimos',
      color: '#f39c12',
      isDebit: true,
      order: 5,
    },
    {
      id: getUUID(),
      name: 'Educação',
      color: '#e67e22',
      isDebit: true,
      order: 6,
    },
    {
      id: getUUID(),
      name: 'Família e Filhos',
      color: '#d35400',
      isDebit: true,
      order: 7,
    },
    {
      id: getUUID(),
      name: 'Impostos e Taxas',
      color: '#e74c3c',
      isDebit: true,
      order: 8,
    },
    {
      id: getUUID(),
      name: 'Investimentos',
      color: '#c0392b',
      isDebit: true,
      order: 9,
    },
    {
      id: getUUID(),
      name: 'Lazer',
      color: '#ecf0f1',
      isDebit: true,
      order: 10,
    },
    {
      id: getUUID(),
      name: 'Mercado',
      color: '#bdc3c7',
      isDebit: true,
      order: 11,
    },
    {
      id: getUUID(),
      name: 'Outras Despesas',
      color: '#95a5a6',
      isDebit: true,
      order: 12,
    },

    {
      id: getUUID(),
      name: 'Empréstimos',
      color: '#273c75',
      isCredit: true,
      order: 1,
    },
    {
      id: getUUID(),
      name: 'Investimentos',
      color: '#4cd137',
      isCredit: true,
      order: 2,
    },
    {
      id: getUUID(),
      name: 'Salário',
      color: '#487eb0',
      isCredit: true,
      order: 3,
    },
    {
      id: getUUID(),
      name: 'Outras Receitas',
      color: '#8c7ae6',
      isCredit: true,
      order: 4,
    },
    {
      id: getUUID(),
      name: 'Saldo Inicial',
      color: '#27ae60',
      isInit: true,
      order: 5,
    },
  ];
};

export const getAllCategories = async () => {
  const realm = await getRealm();
  return realm.objects('Category').sorted('order');
};

export const getDebitCategories = async () => {
  const realm = await getRealm();
  return realm
    .objects('Category')
    .filtered('isDebit = true AND isInit = false')
    .sorted('order');
};

export const getCreditCategories = async () => {
  const realm = await getRealm();
  return realm
    .objects('Category')
    .filtered('isCredit = true AND isInit = false')
    .sorted('order');
};

export const getInitCategories = async () => {
  const realm = await getRealm();
  return realm.objects('Category').filtered('isInit = false').sorted('order');
}
