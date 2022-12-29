import React from 'react';
import { useRouter } from 'next/router';

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

  const listItems = list?.map((item, id) => (
    <div style={{ margin: 10 + 'px', display: 'block' }} key={id}>
      <p>{item.application}</p>
      <p>{item.developer}</p>
    </div>
  ));
  return <div>{listItems}</div>;
}

export default CasesList;
