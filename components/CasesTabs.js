import React from 'react';
import { useRouter } from 'next/router';

export default function CasesTabs({ data }) {
  const router = useRouter();
//   console.log(data);

  const removeQueryParam = (param) => {
    const { pathname, query } = router;
    const params = new URLSearchParams(query);
    params.delete(param);
    router.replace({ pathname, query: params.toString() }, undefined, {
      shallow: true,
    });
  };

  const handleTabClick = (name) => {
    // console.log(router);
    // console.log(name);
    // const queryNames = Object.entries(casesTypes);
    // const item = queryNames.find((item) => item[1] === name);
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

  const tabs = data.map((item, i) => {
    return (
      <li key={i}>
        <button onClick={() => handleTabClick(item[1].category)}>{item[0]}</button>
      </li>
    );
  });
  return (
    <div>
      <ul>{tabs}</ul>
    </div>
  );
}
