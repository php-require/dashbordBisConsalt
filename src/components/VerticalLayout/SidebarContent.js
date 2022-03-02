import PropTypes from "prop-types";
import React, { useEffect, useRef, useCallback, useState } from "react";

//Import Icons
import FeatherIcon from "feather-icons-react";

// //Import Scrollbar
import SimpleBar from "simplebar-react";

//Import images
import giftBox from "../../assets/images/giftbox.png";

//i18n
import { withTranslation } from "react-i18next";

// MetisMenu
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const SidebarContent = (props) => {
  const ref = useRef();
  const [state, setState] = useState(
    {
      project:[
        
          {
          Link: "600b997e-ddb5-11eb-bef6-92a1b6b7c052",
          Description: "1С Вещевое довольствие № 6401/21-3755"
          },
          {
          Link: "8ea5f2dc-ddb5-11eb-bef6-92a1b6b7c052",
          Description: "1С Контактные COVID № 6401/21-3747"
          },
          {
          Link: "cc28309a-0f1a-11eb-9f71-4a9367d88148",
          Description: "Автодороги"
          },
          {
          Link: "b3c6cf49-156d-11eb-9f71-4a9367d88148",
          Description: "Адаптационное сопровождение ДФ"
          },
          {
          Link: "d806a735-0efa-11eb-9f71-4a9367d88148",
          Description: "АКСИОК"
          },
          {
          Link: "6f5a0822-da74-11eb-bef6-92a1b6b7c052",
          Description: "База знаний"
          },
          {
          Link: "92d39c75-0f1d-11eb-9f71-4a9367d88148",
          Description: "Бесшовная интеграция ЗКГУ-Сбер"
          },
          {
          Link: "83519b2c-11ca-11ea-a7e8-4a9367d88148",
          Description: "БИС (ВЗ сотрудников)"
          },
          {
          Link: "13605ff7-738e-11eb-bef0-be03d93bf243",
          Description: "ВЗ Астахов Максим"
          },
          {
          Link: "16f51c19-737e-11eb-bef0-be03d93bf243",
          Description: "ВЗ Вольт Дмитрий"
          },
          {
          Link: "c8b34e4b-925f-11eb-bef3-be03d93bf243",
          Description: "ВЗ ГАМ"
          },
          {
          Link: "bb204b8e-9c6d-11eb-bef4-be03d93bf243",
          Description: "ВЗ Готьятов Михаил"
          },
          {
          Link: "05df2715-7686-11eb-bef0-be03d93bf243",
          Description: "ВЗ Кинжусманова"
          },
          {
          Link: "b91f8665-27ef-11eb-9f71-4a9367d88148",
          Description: "ВЗ Немирич Анастасия"
          },
          {
          Link: "4fcbb5c8-737e-11eb-bef0-be03d93bf243",
          Description: "ВЗ Поляков Сергей"
          },
          {
          Link: "674356bf-9d36-11eb-bef4-be03d93bf243",
          Description: "ВЗ Тяпаева Диана"
          },
          {
          Link: "740fe677-5cb7-11eb-9abb-4a9367d88148",
          Description: "ВЗ Шабатин Михаил Вячеславович"
          },
          {
          Link: "3028ab53-737e-11eb-bef0-be03d93bf243",
          Description: "ВЗ Ширшикова Екатерина"
          },
          {
          Link: "22ff16af-194d-11eb-9f71-4a9367d88148",
          Description: "ВЗ Шкуринская РМ"
          },
          {
          Link: "2ef01eb1-0f1c-11eb-9f71-4a9367d88148",
          Description: "Внедрение ЦБУиО ДЗМ"
          },
          {
          Link: "491ee497-3633-11eb-9f71-4a9367d88148",
          Description: "Внепроектные задачи"
          },
          {
          Link: "4ac8099e-8f9d-11ea-a89d-4a9367d88148",
          Description: "ГК № 69-У-060/20 от 06.04.2020 г."
          },
          {
          Link: "f27c6f7e-7dbf-11ec-bf08-be03d93bf243",
          Description: "ДВМС - ГК № 105 от 07.12.2021"
          },
          {
          Link: "0461de52-e976-11eb-bef7-be03d93bf243",
          Description: "ДВМС - ГК № 197 от 28.12.2020"
          },
          {
          Link: "160331d8-0f21-11eb-9f71-4a9367d88148",
          Description: "ДЗМ Сопровождение 1С (Внедрение ДЗМ 1С)"
          },
          {
          Link: "b1c10ade-07c1-11ea-a7e8-4a9367d88148",
          Description: "ДЗМ Сопровождение Парус"
          },
          {
          Link: "b88b0c28-1795-11eb-9f71-4a9367d88148",
          Description: "ДИТ Вещевое довольствие - ГК от 12.05.2021 № 6401/21-3755"
          },
          {
          Link: "068b7600-eb8a-11e9-a3d0-4a9367d88148",
          Description: "Документооборот (СРМ)"
          },
          {
          Link: "1f5fcbc7-da6e-11eb-bef6-92a1b6b7c052",
          Description: "Доработка документооборота (Римма)"
          },
          {
          Link: "c94a6147-06d9-11ea-a7e8-4a9367d88148",
          Description: "Доработка конфигурации для учета ОС"
          },
          {
          Link: "530651f1-2326-11eb-9f71-4a9367d88148",
          Description: "Интеграция УАИС - СКУУ склад"
          },
          {
          Link: "7734ffd2-e60a-11eb-bef6-92a1b6b7c052",
          Description: "ИС ООВК"
          },
          {
          Link: "82caa4a0-ec1d-11e9-a3d0-4a9367d88148",
          Description: "Исполнение договоров (консультации пользователей БГУ ЗКГУ) с учреждениями ДТСЗН"
          },
          {
          Link: "6cf37aa0-eb80-11e9-a3d0-4a9367d88148",
          Description: "Исправление ошибок конвертации учреждений ДЗМ (не оплачивается)"
          },
          {
          Link: "ee6e7a90-b2d6-11e9-a3cf-4a9367d88148",
          Description: "Исправление ошибок конвертации учреждений ДТСЗН (не оплачивается)"
          },
          {
          Link: "aee39977-06d9-11ea-a7e8-4a9367d88148",
          Description: "Конвертация из БЭСТ"
          },
          {
          Link: "60051438-c399-11eb-bef5-be03d93bf243",
          Description: "Маркировка лекарств 1С ДТСЗН"
          },
          {
          Link: "4d86f1c3-bfaa-11eb-bef5-be03d93bf243",
          Description: "Мосгордума _ ГК № 2/01-21-К от 01.02.2021"
          },
          {
          Link: "75e48a9b-8345-11ec-bf08-be03d93bf243",
          Description: "Мосгордума _ ГК № 55/01-22 от 01.02.2022"
          },
          {
          Link: "4be38132-738f-11eb-bef0-be03d93bf243",
          Description: "МФЦ - Договор от 17.05.2021 г. № 0373200597221000046_295062"
          },
          {
          Link: "51764abf-0f13-11eb-9f71-4a9367d88148",
          Description: "Обработка выгрузки данных из УАИС БУ в сервис обмена по Дебиторской задолженности"
          },
          {
          Link: "d42fa884-486b-11ec-befe-be03d93bf243",
          Description: "Обработка неформализованного документа ЭДО"
          },
          {
          Link: "66281a89-648d-11eb-beef-be03d93bf243",
          Description: "Отчетная документация"
          },
          {
          Link: "fb4570a2-ef85-11eb-bef7-be03d93bf243",
          Description: "Отчетность_(Субподряд) _ Договор № 02/2020 от 18.12.2020 (ООО  Парус-АйТи) СКУУ ЕМИАС "
          },
          {
          Link: "f6fef470-f5f6-11eb-bef7-be03d93bf243",
          Description: "Отчетность_(Субподряд) _ Договор № 6401/20-3439-БИС-У от 07.12.2020 (ООО  Энтер-Софт ) Аптека/Маркировка"
          },
          {
          Link: "ba6647a4-804a-11ec-bf08-be03d93bf243",
          Description: "Отчетность_Договор №1/У/2022 от 10.01.2022 (ООО  ЦИТ Фактор Пачоли )"
          },
          {
          Link: "a03491cb-0ec3-11eb-9f71-4a9367d88148",
          Description: "Отчеты для Инфогорода"
          },
          {
          Link: "418255e6-0ecf-11eb-9f71-4a9367d88148",
          Description: "Отчеты/обработки ДТСЗН"
          },
          {
          Link: "6c0d5737-0f08-11eb-9f71-4a9367d88148",
          Description: "Переход ДИТ в УАИСБУ"
          },
          {
          Link: "2f76a230-b2b7-11e9-a3cf-4a9367d88148",
          Description: "Пилотный запуск конфигурации  Учет продуктов питания "
          },
          {
          Link: "ba322b90-048f-11ea-9eaa-4a9367d88148",
          Description: "Платная конвертация"
          },
          {
          Link: "609d8a0a-0eec-11eb-9f71-4a9367d88148",
          Description: "Подготовка релизов,задачи Jira(ДИТ)"
          },
          {
          Link: "240c3523-ff75-11eb-bef8-be03d93bf243",
          Description: "Поддержка бухгалтерии ИАЦ ДЗМ - ГК 69-У-096/21 от 01.09.2021"
          },
          {
          Link: "4b6156e5-7d14-11ec-bf08-be03d93bf243",
          Description: "Поддержка ЗиК УСЗНы + поддержка ДТСЗН ( ГК 0173200000221000153_258577 от 24.01.2022 )"
          },
          {
          Link: "e7f2a6a0-eb7f-11e9-a3d0-4a9367d88148",
          Description: "Поддержка ЗиК УСЗНы + поддержка ДТСЗН _ ГК № 0173200000220000084_258577 от 11.01.2021"
          },
          {
          Link: "52dcacc2-07c2-11ea-a7e8-4a9367d88148",
          Description: "Поддержка ПП Парус (МИК-Информ)"
          },
          {
          Link: "c0f7c003-b32c-11eb-bef5-be03d93bf243",
          Description: "Продукты питания ДТСЗН"
          },
          {
          Link: "03ed9652-c869-11eb-bef6-be03d93bf243",
          Description: "Проект  Контактные  "
          },
          {
          Link: "ddfbf55d-303a-11ec-befa-be03d93bf243",
          Description: "Разработка внешнего отчета  Акт сверки МБТ "
          },
          {
          Link: "1aaf57b2-2757-11ec-befa-be03d93bf243",
          Description: "Разработка внешней печатной формы Карточка учета материальных ценностей 0504043"
          },
          {
          Link: "ec98b258-b48f-11eb-bef5-be03d93bf243",
          Description: "Разработка внешней печатной формы Уведомление о МБТ"
          },
          {
          Link: "5d250993-0ebd-11eb-9f71-4a9367d88148",
          Description: "Распоряжение на оплату, в т.ч."
          },
          {
          Link: "29a7b42f-0ee6-11eb-9f71-4a9367d88148",
          Description: "Расширение ДЗМ БИС исправление загрузки ГЗ"
          },
          {
          Link: "a20211a1-0f18-11eb-9f71-4a9367d88148",
          Description: "РДС"
          },
          {
          Link: "27bc60ba-78c9-11ea-890d-2aad59ba55aa",
          Description: "РДС ОИВ"
          },
          {
          Link: "23c1454f-1ef4-11ec-bef9-be03d93bf243",
          Description: "Регламентированная отчетность"
          },
          {
          Link: "4edc0cc0-deac-11e9-a3d0-4a9367d88148",
          Description: "Сводная отчетность ДОНМ - (дубль, не брать)"
          },
          {
          Link: "2f80a0d9-0ed5-11eb-9f71-4a9367d88148",
          Description: "Сводная отчетность ДОНМ (Своды ДОНМ), в т.ч."
          },
          {
          Link: "ac796c66-0f15-11eb-9f71-4a9367d88148",
          Description: "Сервис ПП СВТ"
          },
          {
          Link: "c2566609-5743-11ec-beff-be03d93bf243",
          Description: "СКУУ (Козарев)"
          },
          {
          Link: "20fa9600-ee92-11e9-a3d0-4a9367d88148",
          Description: "СКУУ ЕМИАС"
          },
          {
          Link: "f8225806-d818-11eb-bef6-be03d93bf243",
          Description: "СКУУ_1084"
          },
          {
          Link: "e259d59b-d817-11eb-bef6-be03d93bf243",
          Description: "СКУУ_АСКД (Экономические показатели)"
          },
          {
          Link: "ad5f7846-d9a5-11eb-bef6-92a1b6b7c052",
          Description: "СКУУ_Компенсация рецептов на ЛП"
          },
          {
          Link: "877805f5-d9a4-11eb-bef6-92a1b6b7c052",
          Description: "СКУУ_Маркировка ЛП"
          },
          {
          Link: "c5354f0d-e0c2-11eb-bef6-92a1b6b7c052",
          Description: "СКУУ_Разработка_Интеграция ГК 69-Р-091/21 от 13.08.2021"
          },
          {
          Link: "c21438f4-8da1-11ec-bf08-92a1b6b7c052",
          Description: "СКУУ_Разработка_РСМ ГК 69-Р-022/22 от хх.02.2022"
          },
          {
          Link: "612895bb-d818-11eb-bef6-be03d93bf243",
          Description: "СКУУ_РСМ"
          },
          {
          Link: "0011bedd-d59c-11eb-bef6-be03d93bf243",
          Description: "СКУУ_Саппорт ЕМИАС 3 линия - ГК от 21.04.2021 № 69-У-038/21"
          },
          {
          Link: "922ef8b6-d817-11eb-bef6-be03d93bf243",
          Description: "СКУУ_УМО"
          },
          {
          Link: "f475ea0f-d9a4-11eb-bef6-92a1b6b7c052",
          Description: "СКУУ_Учет лекарственных препаратов"
          },
          {
          Link: "28535260-d9a5-11eb-bef6-92a1b6b7c052",
          Description: "СКУУ_Учет расходных материалов медицинского назначения"
          },
          {
          Link: "9228db2e-fea7-11eb-bef7-be03d93bf243",
          Description: "СКУУ_ФПС"
          },
          {
          Link: "41ab0278-3945-11eb-9f71-4a9367d88148",
          Description: "Сопровождение БД 1С Контактные COVID"
          },
          {
          Link: "6ceef2a0-1c90-11ec-bef9-be03d93bf243",
          Description: "Сопровождение ГКУ Инфогород - ГК 115/09/21 от 28.09.2021"
          },
          {
          Link: "fbae39ce-0ee9-11eb-9f71-4a9367d88148",
          Description: "Стройинвестиции и ЭДО"
          },
          {
          Link: "c2700b56-1c90-11ec-bef9-be03d93bf243",
          Description: "Субподряд _ поддержка ГКУ Мосгортелеком _ Договор У-21-20 от 03.09.2021 (ООО Итворкс)"
          },
          {
          Link: "124e0bd8-df44-11eb-bef6-92a1b6b7c052",
          Description: "Субподрядные договоры (договора, только с отчеткой)"
          },
          {
          Link: "62bddcf4-16e0-11ec-bef9-be03d93bf243",
          Description: "УАИС БУ Резерв (ДЗМ)"
          },
          {
          Link: "3f5e6e40-ed2a-11ea-8732-4a9367d88148",
          Description: "УАИС Бюджетный учет. Договор с 1с-Парус"
          },
          {
          Link: "c76ef990-7217-11ec-bf07-be03d93bf243",
          Description: "УДМ - ГК № 95/21 от 27.12.2021"
          },
          {
          Link: "2499cfc0-eb80-11e9-a3d0-4a9367d88148",
          Description: "УДМ - ГК от 28.12.2020 № 90/20"
          },
          {
          Link: "1237ba6a-0eff-11eb-9f71-4a9367d88148",
          Description: "Форма по дебиторской задолженности (Своды), в т.ч."
          },
          {
          Link: "a165957a-0ec9-11eb-9f71-4a9367d88148",
          Description: "ЭЦП в отчетах (Своды), в т.ч."
          }
       
      ]
    }
  )
  const activateParentDropdown = useCallback(item => {
    item.classList.add("active");
    const parent = item.parentElement;
    const parent2El = parent.childNodes[1];
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show");
    }

    if (parent) {
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show"); // ul tag

        const parent3 = parent2.parentElement; // li tag

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement; // ul
          if (parent4) {
            parent4.classList.add("mm-show"); // ul
            const parent5 = parent4.parentElement;
            if (parent5) {
              parent5.classList.add("mm-show"); // li
              parent5.childNodes[0].classList.add("mm-active"); // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false;
    }
    scrollElement(item);
    return false;
  }, []);

  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    const pathName = props.location.pathname;

    const initMenu = () => {
      new MetisMenu("#side-menu");
      let matchingMenuItem = null;
      const ul = document.getElementById("side-menu");
      const items = ul.getElementsByTagName("a");
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i];
          break;
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem);
      }
    };
    initMenu();
  }, [props.location.pathname, activateParentDropdown]);

  useEffect(() => {
    ref.current.recalculate();
  });
 

  
  const listItems = state.project.map((number, key) =>
  
  <li key={key}>
    <Link to="#">{number.Description}</Link>
    </li>
    
  );
  // const projects = () => { 
  //   state.project.Description.map((item, index) => { 
      
  //     return  <Link key={index} item={item} />
  //   }
     
 
  
 
 
  
  
  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop;
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300;
      }
    }
  }
  return (
    <React.Fragment>
      <SimpleBar style={{ maxHeight: "100%" }} ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{props.t("Menu")} </li>
            <li>
              <Link to="/dashboard" className="">
                <FeatherIcon icon="home" />
                <span>{props.t("Main")}</span>
              </Link>
            </li>

            <li>
              <Link to="/#" className="has-arrow">
                <FeatherIcon icon="grid" />
                <span>{props.t("Legal entity")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/buh">{props.t("BOOH")}</Link>
                </li>
                <li>
                  <Link to="/bis">Бисконсалт</Link>
                </li>
        
                <li>
                  <Link to="/#">{props.t("IP1")}</Link>
                </li>
                <li>
                  <Link to="/#" >
                    <span>{props.t("IP2")}</span>
                  </Link>
                </li>
                {/* <li>
                  <Link to="/#" className="has-arrow">
                    <span>{props.t("Invoices")}</span>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/#">{props.t("Invoice List")}</Link>
                    </li>
                    <li>
                      <Link to="/#">{props.t("Invoice Detail")}</Link>
                    </li>
                  </ul>
                </li> */}
                <li>
                  <Link to="/#" >
                    <span>{props.t("IP...")}</span>
                  </Link>
                </li>
                <li>
                  <Link to="/#" >
                    <span>{props.t("SVOD")}</span>
                  </Link>
                  </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow">
                <FeatherIcon icon="aperture" />
               
                
                <span>{props.t("Projects")}</span>
              </Link>
              <ul className="sub-menu">
                {listItems}
               
                <li>
                  <Link to="#">{props.t("Projects1")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Projects2")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Projects3")}</Link>
                </li>
                
              </ul>
            </li>
            <li>
                <Link to="/uploads">
                  <FeatherIcon icon="upload" />
                  <span>{props.t("Uploads")}</span>
                </Link>
            </li>
            <li>
              <Link to="/#" className="has-arrow ">
                <FeatherIcon icon="share-2" />
                <span>{props.t("Multi Level")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/#">{props.t("Level 1.1")}</Link>
                </li>
                <li>
                  <Link to="/#" className="has-arrow">
                    {props.t("Level 1.2")}
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/#">{props.t("Level 2.1")}</Link>
                    </li>
                    <li>
                      <Link to="/#">{props.t("Level 2.2")}</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <div className="card sidebar-alert border-0 text-center mx-4 mb-0 mt-5">
            <div className="card-body">
              <img src={giftBox} alt="" />
              <div className="mt-4">
                <h5 className="alertcard-title font-size-16">
                  Unlimited Access
                </h5>
                <p className="font-size-13">
                  Upgrade your plan from a Free trial, to select ‘Business
                  Plan’.
                </p>
                <a href="#!" className="btn btn-primary mt-2">
                  Upgrade Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </SimpleBar>
    </React.Fragment>
  );
};

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
};

export default withTranslation()(withRouter(SidebarContent));
