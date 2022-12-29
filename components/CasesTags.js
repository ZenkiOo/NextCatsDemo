import React from 'react';
import style from '../styles/CasesTags.module.scss';
import { useRouter } from 'next/router';
import { nanoid } from 'nanoid';

export default function CasesTags({ data }) {
  const router = useRouter();

  const removeQueryParam = (param) => {
    const { pathname, query } = router;
    const params = new URLSearchParams(query);
    params.delete(param);
    router.replace({ pathname, query: params.toString() }, undefined, {
      shallow: true,
    });
  };

  const handleTagClick = (name) => {
    if (router.query[name]) removeQueryParam(name);
    else {
      const { pathname } = router;
      router.replace(
        { pathname, query: { ...router.query, [name]: true } },
        undefined,
        {
          shallow: true,
        }
      );
    }
  };
  const tagsList = data.map((item) => ({ item, id: nanoid() }));
  const tags = tagsList.map((listItem) => {
    const { item, id } = listItem;
    return (
      <li key={id} className={style.tags__list_item}>
        <button
          className={style.tags__list_item_btn}
          onClick={() => handleTagClick(item[1].category)}
        >
          {item[0]}
        </button>
      </li>
    );
  });
  return (
    <div className={style.tags}>
      <ul className={style.tags__list}>{tags}</ul>
    </div>
  );
}
