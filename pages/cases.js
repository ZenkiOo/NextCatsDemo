import React from 'react';
import style from '../styles/cases.module.scss';
import serverData from '../public/data.json';
import CasesTitle from '../components/CasesTitle';
import CasesTags from '../components/CasesTags';
import CasesList from '../components/CasesList';
import ListSvg from '../components/ListSvg';

export default function cases() {
  const casesTypes = {
    med_tech: 'MedTech',
    security: 'Безопасность',
    retail: 'Ритейл и e-commerce',
    support: 'Клиентская поддержка',
    industry: 'Промышленность и энергетика',
    covid: 'COVID-Tech',
    transport: 'Логистика и транспорт',
    agricultural: 'Сельское хозяйство и агропромышленность',
    fin_tech: 'FinTech',
    other: 'Прочее',
    education: 'Образование',
    city: 'Городская сфера',
    media: 'Развлечения и медиа',
    goverment: 'Государственный сектор',
    culture: 'Культура и искусство',
    science: 'Наука',
    hr_tech: 'HR-tech',
    food_tech: 'FoodTech',
    payment: 'Идентификация и оплата',
    estate: 'Строительство и недвижимость',
    legal_tech: 'LegalTech',
    mass_media: 'СМИ',
    telecom: 'Телеком',
    sport: 'Спорт',
    social: 'Социальная сфера',
    service: 'Клиентское обслуживание',
  };
  const formatData = () => {
    const categories = {};
    const queryNames = Object.entries(casesTypes);
    serverData.data.forEach((item) =>
      categories[item.application]
        ? categories[item.application].items.push(item)
        : (categories[item.application] = {
            category: queryNames.find(
              (name) => name[1] === item.application
            )[0],
            items: [item],
          })
    );
    const catsArr = Object.entries(categories);
    return catsArr.sort((a, b) => b[1].items.length - a[1].items.length);
  };
  const data = formatData();

  return (
    <div className={style.cases_page}>
      <div className={style.cases}>
        <div className={style.cases__body}>
          {/* <ListSvg /> */}
          <CasesTitle />
          <CasesTags {...{ data }} />
          <CasesList {...{ data }} />
        </div>
      </div>
    </div>
  );
}
