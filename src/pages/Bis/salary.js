import React, { useState, useEffect } from "react";
import { Row, Col, Card, CardBody, CardTitle, CardHeader } from "reactstrap";
import MetaTags from "react-meta-tags";

// datatable related plugins
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";

import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

//i18n
import { withTranslation } from "react-i18next";
 
import axios from "axios";
import { del, get, post, put } from "../../components/helpers/api_helper";
import * as url from "../../components/helpers/url_helper";
import { EMPLOYEES_BUH } from "../../helpers/api-1c/api_url";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "./datatables.scss";

const Salary = (props) => {
 
  const [state, setState] = useState({
    salary: [
   
        {
          LinkEmployee: "7351c6cd-0e16-11eb-9f71-4a9367d88148",
          DescriptionEmployee: "Гасанов Руслан Ибадутдинович",
          LinkProject: "b3c6cf49-156d-11eb-9f71-4a9367d88148",
          DescriptionProject: "Адаптационное сопровождение ДФ",
          TimeHours: 6,
        },
        {
          LinkEmployee: "89b83457-5cbc-11eb-9abb-4a9367d88148",
          DescriptionEmployee: "Готьятов Михаил Юрьевич",
          LinkProject: "b3c6cf49-156d-11eb-9f71-4a9367d88148",
          DescriptionProject: "Адаптационное сопровождение ДФ",
          TimeHours: 94.75,
        },
        {
          LinkEmployee: "26473040-de12-11e9-a3d0-4a9367d88148",
          DescriptionEmployee: "Немирич Анастасия Александровна",
          LinkProject: "b3c6cf49-156d-11eb-9f71-4a9367d88148",
          DescriptionProject: "Адаптационное сопровождение ДФ",
          TimeHours: 4,
        },
        {
          LinkEmployee: "9f8204d3-ad2c-11e9-ab4f-382c4a649fe1",
          DescriptionEmployee: "Шкуринская Римма Миниахметовна",
          LinkProject: "b3c6cf49-156d-11eb-9f71-4a9367d88148",
          DescriptionProject: "Адаптационное сопровождение ДФ",
          TimeHours: 52.5,
        },
        {
          LinkEmployee: "26473040-de12-11e9-a3d0-4a9367d88148",
          DescriptionEmployee: "Немирич Анастасия Александровна",
          LinkProject: "92d39c75-0f1d-11eb-9f71-4a9367d88148",
          DescriptionProject: "Бесшовная интеграция ЗКГУ-Сбер",
          TimeHours: 25.5,
        },
        {
          LinkEmployee: "64803502-c2cc-11eb-bef5-be03d93bf243",
          DescriptionEmployee: "Шевченко Алексей Александрович",
          LinkProject: "92d39c75-0f1d-11eb-9f71-4a9367d88148",
          DescriptionProject: "Бесшовная интеграция ЗКГУ-Сбер",
          TimeHours: 2,
        },
        {
          LinkEmployee: "26473040-de12-11e9-a3d0-4a9367d88148",
          DescriptionEmployee: "Немирич Анастасия Александровна",
          LinkProject: "83519b2c-11ca-11ea-a7e8-4a9367d88148",
          DescriptionProject: "БИС (ВЗ сотрудников)",
          TimeHours: 26,
        },
        {
          LinkEmployee: "b899ee11-0e1a-11eb-9f71-4a9367d88148",
          DescriptionEmployee: "Омаров Тимур Ризабекович",
          LinkProject: "83519b2c-11ca-11ea-a7e8-4a9367d88148",
          DescriptionProject: "БИС (ВЗ сотрудников)",
          TimeHours: 16,
        },
        {
          LinkEmployee: "64803502-c2cc-11eb-bef5-be03d93bf243",
          DescriptionEmployee: "Шевченко Алексей Александрович",
          LinkProject: "83519b2c-11ca-11ea-a7e8-4a9367d88148",
          DescriptionProject: "БИС (ВЗ сотрудников)",
          TimeHours: 27,
        },
        {
          LinkEmployee: "9f8204d3-ad2c-11e9-ab4f-382c4a649fe1",
          DescriptionEmployee: "Шкуринская Римма Миниахметовна",
          LinkProject: "83519b2c-11ca-11ea-a7e8-4a9367d88148",
          DescriptionProject: "БИС (ВЗ сотрудников)",
          TimeHours: 67,
        },
        {
          LinkEmployee: "7351c6cd-0e16-11eb-9f71-4a9367d88148",
          DescriptionEmployee: "Гасанов Руслан Ибадутдинович",
          LinkProject: "160331d8-0f21-11eb-9f71-4a9367d88148",
          DescriptionProject: "ДЗМ Сопровождение 1С (Внедрение ДЗМ 1С)",
          TimeHours: 139,
        },
        {
          LinkEmployee: "89b83457-5cbc-11eb-9abb-4a9367d88148",
          DescriptionEmployee: "Готьятов Михаил Юрьевич",
          LinkProject: "160331d8-0f21-11eb-9f71-4a9367d88148",
          DescriptionProject: "ДЗМ Сопровождение 1С (Внедрение ДЗМ 1С)",
          TimeHours: 52.5,
        },
        {
          LinkEmployee: "26473040-de12-11e9-a3d0-4a9367d88148",
          DescriptionEmployee: "Немирич Анастасия Александровна",
          LinkProject: "160331d8-0f21-11eb-9f71-4a9367d88148",
          DescriptionProject: "ДЗМ Сопровождение 1С (Внедрение ДЗМ 1С)",
          TimeHours: 43,
        },
        {
          LinkEmployee: "e4c9c72d-737f-11eb-bef0-be03d93bf243",
          DescriptionEmployee: "Астахов Максим Викторович ",
          LinkProject: "b88b0c28-1795-11eb-9f71-4a9367d88148",
          DescriptionProject:
            "ДИТ Вещевое довольствие - ГК от 12.05.2021 № 6401/21-3755",
          TimeHours: 123.5,
        },
        {
          LinkEmployee: "58477f83-d81f-11eb-bef6-be03d93bf243",
          DescriptionEmployee: "Яруллин Марсель Имилевич",
          LinkProject: "b88b0c28-1795-11eb-9f71-4a9367d88148",
          DescriptionProject:
            "ДИТ Вещевое довольствие - ГК от 12.05.2021 № 6401/21-3755",
          TimeHours: 152,
        },
        {
          LinkEmployee: "019cc5f7-da46-11eb-bef6-92a1b6b7c052",
          DescriptionEmployee: "Зыков Гаврил Семенович",
          LinkProject: "82caa4a0-ec1d-11e9-a3d0-4a9367d88148",
          DescriptionProject:
            "Исполнение договоров (консультации пользователей БГУ ЗКГУ) с учреждениями ДТСЗН",
          TimeHours: 3.5,
        },
        {
          LinkEmployee: "3de52dce-0e15-11eb-9f71-4a9367d88148",
          DescriptionEmployee: "Арутюнян Тигран Араикович",
          LinkProject: "60051438-c399-11eb-bef5-be03d93bf243",
          DescriptionProject: "Маркировка лекарств 1С ДТСЗН",
          TimeHours: 42,
        },
        {
          LinkEmployee: "89b83457-5cbc-11eb-9abb-4a9367d88148",
          DescriptionEmployee: "Готьятов Михаил Юрьевич",
          LinkProject: "60051438-c399-11eb-bef5-be03d93bf243",
          DescriptionProject: "Маркировка лекарств 1С ДТСЗН",
          TimeHours: 1,
        },
        {
          LinkEmployee: "b899ee11-0e1a-11eb-9f71-4a9367d88148",
          DescriptionEmployee: "Омаров Тимур Ризабекович",
          LinkProject: "60051438-c399-11eb-bef5-be03d93bf243",
          DescriptionProject: "Маркировка лекарств 1С ДТСЗН",
          TimeHours: 24,
        },
        {
          LinkEmployee: "38e58c1b-72eb-11ec-bf07-be03d93bf243",
          DescriptionEmployee: "Сокил Юлия Вадимовна",
          LinkProject: "60051438-c399-11eb-bef5-be03d93bf243",
          DescriptionProject: "Маркировка лекарств 1С ДТСЗН",
          TimeHours: 26,
        },
        {
          LinkEmployee: "89b83457-5cbc-11eb-9abb-4a9367d88148",
          DescriptionEmployee: "Готьятов Михаил Юрьевич",
          LinkProject: "4d86f1c3-bfaa-11eb-bef5-be03d93bf243",
          DescriptionProject: "Мосгордума _ ГК № 2/01-21-К от 01.02.2021",
          TimeHours: 21,
        },
        {
          LinkEmployee: "019cc5f7-da46-11eb-bef6-92a1b6b7c052",
          DescriptionEmployee: "Зыков Гаврил Семенович",
          LinkProject: "4d86f1c3-bfaa-11eb-bef5-be03d93bf243",
          DescriptionProject: "Мосгордума _ ГК № 2/01-21-К от 01.02.2021",
          TimeHours: 68,
        },
        {
          LinkEmployee: "d8705f71-0e1a-11eb-9f71-4a9367d88148",
          DescriptionEmployee: "Тяпаева Диана Равильевна",
          LinkProject: "4d86f1c3-bfaa-11eb-bef5-be03d93bf243",
          DescriptionProject: "Мосгордума _ ГК № 2/01-21-К от 01.02.2021",
          TimeHours: 128,
        },
        {
          LinkEmployee: "9f8204d3-ad2c-11e9-ab4f-382c4a649fe1",
          DescriptionEmployee: "Шкуринская Римма Миниахметовна",
          LinkProject: "4d86f1c3-bfaa-11eb-bef5-be03d93bf243",
          DescriptionProject: "Мосгордума _ ГК № 2/01-21-К от 01.02.2021",
          TimeHours: 4.5,
        },
        {
          LinkEmployee: "019cc5f7-da46-11eb-bef6-92a1b6b7c052",
          DescriptionEmployee: "Зыков Гаврил Семенович",
          LinkProject: "75e48a9b-8345-11ec-bf08-be03d93bf243",
          DescriptionProject: "Мосгордума _ ГК № 55/01-22 от 01.02.2022",
          TimeHours: 93,
        },
        {
          LinkEmployee: "d8705f71-0e1a-11eb-9f71-4a9367d88148",
          DescriptionEmployee: "Тяпаева Диана Равильевна",
          LinkProject: "75e48a9b-8345-11ec-bf08-be03d93bf243",
          DescriptionProject: "Мосгордума _ ГК № 55/01-22 от 01.02.2022",
          TimeHours: 63,
        },
        {
          LinkEmployee: "b899ee11-0e1a-11eb-9f71-4a9367d88148",
          DescriptionEmployee: "Омаров Тимур Ризабекович",
          LinkProject: "4be38132-738f-11eb-bef0-be03d93bf243",
          DescriptionProject:
            "МФЦ - Договор от 17.05.2021 г. № 0373200597221000046_295062",
          TimeHours: 10,
        },
        {
          LinkEmployee: "01ced2e5-7380-11eb-bef0-be03d93bf243",
          DescriptionEmployee: "Поляков Сергей Иванович",
          LinkProject: "4be38132-738f-11eb-bef0-be03d93bf243",
          DescriptionProject:
            "МФЦ - Договор от 17.05.2021 г. № 0373200597221000046_295062",
          TimeHours: 203,
        },
        {
          LinkEmployee: "2039f9a7-6329-11ec-bf01-92a1b6b7c052",
          DescriptionEmployee: "Сафаров Евгений Владимирович",
          LinkProject: "4be38132-738f-11eb-bef0-be03d93bf243",
          DescriptionProject:
            "МФЦ - Договор от 17.05.2021 г. № 0373200597221000046_295062",
          TimeHours: 113,
        },
        {
          LinkEmployee: "f40bbd6a-0e1a-11eb-9f71-4a9367d88148",
          DescriptionEmployee: "Шабатин Михаил Вячеславович",
          LinkProject: "4be38132-738f-11eb-bef0-be03d93bf243",
          DescriptionProject:
            "МФЦ - Договор от 17.05.2021 г. № 0373200597221000046_295062",
          TimeHours: 205,
        },
        {
          LinkEmployee: "64803502-c2cc-11eb-bef5-be03d93bf243",
          DescriptionEmployee: "Шевченко Алексей Александрович",
          LinkProject: "4be38132-738f-11eb-bef0-be03d93bf243",
          DescriptionProject:
            "МФЦ - Договор от 17.05.2021 г. № 0373200597221000046_295062",
          TimeHours: 27,
        },
        {
          LinkEmployee: "9f8204d3-ad2c-11e9-ab4f-382c4a649fe1",
          DescriptionEmployee: "Шкуринская Римма Миниахметовна",
          LinkProject: "4be38132-738f-11eb-bef0-be03d93bf243",
          DescriptionProject:
            "МФЦ - Договор от 17.05.2021 г. № 0373200597221000046_295062",
          TimeHours: 8.5,
        },
        {
          LinkEmployee: "7351c6cd-0e16-11eb-9f71-4a9367d88148",
          DescriptionEmployee: "Гасанов Руслан Ибадутдинович",
          LinkProject: "240c3523-ff75-11eb-bef8-be03d93bf243",
          DescriptionProject:
            "Поддержка бухгалтерии ИАЦ ДЗМ - ГК 69-У-096/21 от 01.09.2021",
          TimeHours: 22,
        },
        {
          LinkEmployee: "9f8204d3-ad2c-11e9-ab4f-382c4a649fe1",
          DescriptionEmployee: "Шкуринская Римма Миниахметовна",
          LinkProject: "e7f2a6a0-eb7f-11e9-a3d0-4a9367d88148",
          DescriptionProject:
            "Поддержка ЗиК УСЗНы + поддержка ДТСЗН _ ГК № 0173200000220000084_258577 от 11.01.2021",
          TimeHours: 2,
        },
        {
          LinkEmployee: "e4c9c72d-737f-11eb-bef0-be03d93bf243",
          DescriptionEmployee: "Астахов Максим Викторович ",
          LinkProject: "c0f7c003-b32c-11eb-bef5-be03d93bf243",
          DescriptionProject: "Продукты питания ДТСЗН",
          TimeHours: 76.5,
        },
        {
          LinkEmployee: "3de52dce-0e15-11eb-9f71-4a9367d88148",
          DescriptionEmployee: "Арутюнян Тигран Араикович",
          LinkProject: "03ed9652-c869-11eb-bef6-be03d93bf243",
          DescriptionProject: 'Проект "Контактные" ',
          TimeHours: 80,
        },
        {
          LinkEmployee: "df4630fa-da46-11eb-bef6-92a1b6b7c052",
          DescriptionEmployee: "Волков Александр Владимирович",
          LinkProject: "03ed9652-c869-11eb-bef6-be03d93bf243",
          DescriptionProject: 'Проект "Контактные" ',
          TimeHours: 200,
        },
        {
          LinkEmployee: "83874a20-e03c-11e9-a3d0-4a9367d88148",
          DescriptionEmployee: "Крюкова Алина Вялитовна ",
          LinkProject: "03ed9652-c869-11eb-bef6-be03d93bf243",
          DescriptionProject: 'Проект "Контактные" ',
          TimeHours: 111.5,
        },
        {
          LinkEmployee: "b899ee11-0e1a-11eb-9f71-4a9367d88148",
          DescriptionEmployee: "Омаров Тимур Ризабекович",
          LinkProject: "03ed9652-c869-11eb-bef6-be03d93bf243",
          DescriptionProject: 'Проект "Контактные" ',
          TimeHours: 26,
        },
        {
          LinkEmployee: "38e58c1b-72eb-11ec-bf07-be03d93bf243",
          DescriptionEmployee: "Сокил Юлия Вадимовна",
          LinkProject: "03ed9652-c869-11eb-bef6-be03d93bf243",
          DescriptionProject: 'Проект "Контактные" ',
          TimeHours: 88,
        },
        {
          LinkEmployee: "64803502-c2cc-11eb-bef5-be03d93bf243",
          DescriptionEmployee: "Шевченко Алексей Александрович",
          LinkProject: "03ed9652-c869-11eb-bef6-be03d93bf243",
          DescriptionProject: 'Проект "Контактные" ',
          TimeHours: 148,
        },
        {
          LinkEmployee: "3de52dce-0e15-11eb-9f71-4a9367d88148",
          DescriptionEmployee: "Арутюнян Тигран Араикович",
          LinkProject: "5d250993-0ebd-11eb-9f71-4a9367d88148",
          DescriptionProject: "Распоряжение на оплату, в т.ч.",
          TimeHours: 4,
        },
        {
          LinkEmployee: "26473040-de12-11e9-a3d0-4a9367d88148",
          DescriptionEmployee: "Немирич Анастасия Александровна",
          LinkProject: "5d250993-0ebd-11eb-9f71-4a9367d88148",
          DescriptionProject: "Распоряжение на оплату, в т.ч.",
          TimeHours: 12.5,
        },
        {
          LinkEmployee: "64803502-c2cc-11eb-bef5-be03d93bf243",
          DescriptionEmployee: "Шевченко Алексей Александрович",
          LinkProject: "5d250993-0ebd-11eb-9f71-4a9367d88148",
          DescriptionProject: "Распоряжение на оплату, в т.ч.",
          TimeHours: 3,
        },
        {
          LinkEmployee: "7351c6cd-0e16-11eb-9f71-4a9367d88148",
          DescriptionEmployee: "Гасанов Руслан Ибадутдинович",
          LinkProject: "23c1454f-1ef4-11ec-bef9-be03d93bf243",
          DescriptionProject: "Регламентированная отчетность",
          TimeHours: 3,
        },
        {
          LinkEmployee: "019cc5f7-da46-11eb-bef6-92a1b6b7c052",
          DescriptionEmployee: "Зыков Гаврил Семенович",
          LinkProject: "2f80a0d9-0ed5-11eb-9f71-4a9367d88148",
          DescriptionProject: "Сводная отчетность ДОНМ (Своды ДОНМ), в т.ч.",
          TimeHours: 33,
        },
        {
          LinkEmployee: "3de52dce-0e15-11eb-9f71-4a9367d88148",
          DescriptionEmployee: "Арутюнян Тигран Араикович",
          LinkProject: "ac796c66-0f15-11eb-9f71-4a9367d88148",
          DescriptionProject: "Сервис ПП СВТ",
          TimeHours: 4,
        },
        {
          LinkEmployee: "64803502-c2cc-11eb-bef5-be03d93bf243",
          DescriptionEmployee: "Шевченко Алексей Александрович",
          LinkProject: "ac796c66-0f15-11eb-9f71-4a9367d88148",
          DescriptionProject: "Сервис ПП СВТ",
          TimeHours: 1,
        },
        {
          LinkEmployee: "3de52dce-0e15-11eb-9f71-4a9367d88148",
          DescriptionEmployee: "Арутюнян Тигран Араикович",
          LinkProject: "ad5f7846-d9a5-11eb-bef6-92a1b6b7c052",
          DescriptionProject: "СКУУ_Компенсация рецептов на ЛП",
          TimeHours: 30,
        },
        {
          LinkEmployee: "26473040-de12-11e9-a3d0-4a9367d88148",
          DescriptionEmployee: "Немирич Анастасия Александровна",
          LinkProject: "ad5f7846-d9a5-11eb-bef6-92a1b6b7c052",
          DescriptionProject: "СКУУ_Компенсация рецептов на ЛП",
          TimeHours: 57,
        },
        {
          LinkEmployee: "b899ee11-0e1a-11eb-9f71-4a9367d88148",
          DescriptionEmployee: "Омаров Тимур Ризабекович",
          LinkProject: "ad5f7846-d9a5-11eb-bef6-92a1b6b7c052",
          DescriptionProject: "СКУУ_Компенсация рецептов на ЛП",
          TimeHours: 4,
        },
        {
          LinkEmployee: "2039f9a7-6329-11ec-bf01-92a1b6b7c052",
          DescriptionEmployee: "Сафаров Евгений Владимирович",
          LinkProject: "ad5f7846-d9a5-11eb-bef6-92a1b6b7c052",
          DescriptionProject: "СКУУ_Компенсация рецептов на ЛП",
          TimeHours: 87,
        },
        {
          LinkEmployee: "58477f83-d81f-11eb-bef6-be03d93bf243",
          DescriptionEmployee: "Яруллин Марсель Имилевич",
          LinkProject: "ad5f7846-d9a5-11eb-bef6-92a1b6b7c052",
          DescriptionProject: "СКУУ_Компенсация рецептов на ЛП",
          TimeHours: 48,
        },
        {
          LinkEmployee: "38e58c1b-72eb-11ec-bf07-be03d93bf243",
          DescriptionEmployee: "Сокил Юлия Вадимовна",
          LinkProject: "6ceef2a0-1c90-11ec-bef9-be03d93bf243",
          DescriptionProject:
            "Сопровождение ГКУ Инфогород - ГК 115/09/21 от 28.09.2021",
          TimeHours: 22,
        },
        {
          LinkEmployee: "7351c6cd-0e16-11eb-9f71-4a9367d88148",
          DescriptionEmployee: "Гасанов Руслан Ибадутдинович",
          LinkProject: "c2700b56-1c90-11ec-bef9-be03d93bf243",
          DescriptionProject:
            'Субподряд _ поддержка ГКУ Мосгортелеком _ Договор У-21-20 от 03.09.2021 (ООО "Итворкс")',
          TimeHours: 34,
        },
        {
          LinkEmployee: "019cc5f7-da46-11eb-bef6-92a1b6b7c052",
          DescriptionEmployee: "Зыков Гаврил Семенович",
          LinkProject: "3f5e6e40-ed2a-11ea-8732-4a9367d88148",
          DescriptionProject: "УАИС Бюджетный учет. Договор с 1с-Парус",
          TimeHours: 2.5,
        },
        {
          LinkEmployee: "26473040-de12-11e9-a3d0-4a9367d88148",
          DescriptionEmployee: "Немирич Анастасия Александровна",
          LinkProject: "1237ba6a-0eff-11eb-9f71-4a9367d88148",
          DescriptionProject:
            "Форма по дебиторской задолженности (Своды), в т.ч.",
          TimeHours: 18,
        },
        {
          LinkEmployee: "d8705f71-0e1a-11eb-9f71-4a9367d88148",
          DescriptionEmployee: "Тяпаева Диана Равильевна",
          LinkProject: "1237ba6a-0eff-11eb-9f71-4a9367d88148",
          DescriptionProject:
            "Форма по дебиторской задолженности (Своды), в т.ч.",
          TimeHours: 9,
        },
 
    ],
  });
  const [loaded, setLoaded] = useState(false);

  //   useEffect(() => {
  //     if (loaded) return ;
  //    const url = 'http://webservis:Qp34_er!@192.168.2.57:8090/buhzupcopy/hs/ExchangeSite/V1/employees'
  //    get(url, {crossdomain: true })
  //     .then(response => {
  //       console.log(response )
  //        setState({
  //         products: response.data.data
  //       })
  //     })

  //     setLoaded(true)
  // }, [loaded])

  const columns = [
    {
      dataField: "DescriptionEmployee",
      text: "ФИО работника",
      sort: true,
    },
    {
      dataField: "DescriptionProject",
      text: "Наименование проекта",
      sort: true,
    },
    {
      dataField: "TimeHours",
      text: "Отработанное время в часах в формате 9999.99",
      sort: true,
    },
  ];

  const defaultSorted = [
    {
      dataField: "LinkEmployee",
      order: "desk",
    },
  ];

  const pageOptions = {
    sizePerPage: 10,
    totalSize: state.salary.length, // replace later with size(customers),
    custom: true,
  };

  // Select All Button operation
  const selectRow = {
    mode: "checkbox",
  };

  const { SearchBar } = Search;

  return (
    <React.Fragment>
 
      

      

            <Col className="col-12">
              <Card>
                <CardHeader>
                  <CardTitle className="h4">
                  Выработка часов по сотрудникам и по проектам за период 
                  </CardTitle>
                  <p className="card-title-desc">Описание раздела..</p>
                </CardHeader>
                <CardBody>
                  <PaginationProvider
                    pagination={paginationFactory(pageOptions)}
                    keyField="LinkEmployee"
                    columns={columns}
                    data={state.salary}
                  >
                    {({ paginationProps, paginationTableProps }) => (
                      <ToolkitProvider
                        keyField="LinkEmployee"
                        columns={columns}
                        data={state.salary}
                        search
                      >
                        {(toolkitProps) => (
                          <React.Fragment>
                            <Row className="mb-2">
                              <Col md="4">
                                <div className="search-box me-2 mb-2 d-inline-block">
                                  <div className="position-relative">
                                    <SearchBar {...toolkitProps.searchProps} />
                                    <i className="bx bx-search-alt search-icon" />
                                  </div>
                                </div>
                              </Col>
                            </Row>

                            <Row>
                              <Col xl="12">
                                <div className="table-responsive">
                                  <BootstrapTable
                                    keyField={"id"}
                                    responsive
                                    bordered={false}
                                    striped={false}
                                    defaultSorted={defaultSorted}
                                    selectRow={selectRow}
                                    classes={"table align-middle table-nowrap"}
                                    headerWrapperClasses={"thead-light"}
                                    {...toolkitProps.baseProps}
                                    {...paginationTableProps}
                                  />
                                </div>
                              </Col>
                            </Row>

                            <Row className="align-items-md-center mt-30">
                              <Col className="inner-custom-pagination d-flex">
                                <div className="d-inline">
                                  <SizePerPageDropdownStandalone
                                    {...paginationProps}
                                  />
                                </div>
                                <div className="text-md-right ms-auto">
                                  <PaginationListStandalone
                                    {...paginationProps}
                                  />
                                </div>
                              </Col>
                            </Row>
                          </React.Fragment>
                        )}
                      </ToolkitProvider>
                    )}
                  </PaginationProvider>
                </CardBody>
              </Card>
            </Col>
   
    </React.Fragment>
  );
};
export default withTranslation()(Salary);
