import React from 'react';
import style from '../styles/CasesList.module.scss';
import { useRouter } from 'next/router';
import parse from 'html-react-parser';

function CasesList({ data }) {
  const router = useRouter();

  const createCasesList = () => {
    const { query } = router;
    return data.reduce(function (prev, cur) {
      if (JSON.stringify(query) === '{}') {
        return prev.concat(cur[1].items);
      } else {
        if (query.hasOwnProperty(cur[1].category))
          return prev.concat(cur[1].items);
        else return prev;
      }
    }, []);
  };
  const list = createCasesList();

  const listItems = list?.map((item) => (
    <li key={item.id} className={style.list__item}>
      <div className={style.list__item_body}>
        <span className={style.list__item_location}>
          {`${item.country}, ${item.city}`}
        </span>
        {parse(item.description, {
          replace: (domNode) => {
            console.log(domNode);
          },
        })}
        <button className={style.list__item_btn}>посмотреть</button>
      </div>
      <div className={style.list__item_footer}>
        <span className={style.list__item_footer_text}>
          Добавлено 6.02.2020
        </span>
      </div>
    </li>
  ));
  return <ul className={style.list}>{listItems}</ul>;
}

export default CasesList;
