import {useEffect, useState} from 'react';

import {
  getDebitCategories,
  getCreditCategories,
  getAllCategories,
  getInitCategories,
} from '../services/Categories';

const useCategories = () => {
  const [debitCategories, setDebitCategories] = useState();
  const [creditCategories, setCreditCategories] = useState();
  const [allCategories, setAllCategories] = useState();
  const [initCategories, setInitCategories] = useState();

  useEffect(() => {
    const loadDebitCategories = async () => {
      setDebitCategories(await getDebitCategories());
    };

    const loadCreditCategories = async () => {
      setCreditCategories(await getCreditCategories());
    };

    const loadAllCategories = async () => {
      setAllCategories(await getAllCategories());
    };

    const loadInitCategories = async () => {
      setInitCategories(await getInitCategories());
    };

    loadDebitCategories();
    loadCreditCategories();
    loadAllCategories();
    loadInitCategories();
  }, []);

  return [debitCategories, creditCategories, allCategories, initCategories];
};

export default useCategories;