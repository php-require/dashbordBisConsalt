const url = "http://webservis:Qp34_er!@192.168.2.57:8090/"

//Сервис получения списка сотрудников (employees) 
// для зарплата бисконсалт
export const EMPLOYEES_BIS = url+"biszupcopy/hs/ExchangeSite/V1/employees"
//для зарплата Бухинфосервис.
export const EMPLOYEES_BUH = url+"buhzupcopy/hs/ExchangeSite/V1/employees"

//Получение зарплаты сотрудников за период (salary)
export const SALARY_BIS = url+"biszupcopy/hs/ExchangeSite/V1/salary?start=20220101&end=20220303"
export const SALARY_BUH = url+"buhzupcopy/hs/ExchangeSite/V1/salary?start=20220101&end=20220303"
 
//Выработка часов по сотрудникам и по проектам за период (timeproduction)
export const TIMEPRODUCTION_1C = url+"buhzupcopy/hs/ExchangeSite/V1/salary?start=20220101&end=20220303"

//Получение списка проектов (projects)
export const PROJECTS_1C = url+"crmcopy/hs/ExchangeSite/V1/projects"

 
//Поступление д/с за период, в том числе по контрагенту (incomingfunds)
export const INCOMINGFUNDS_BIS = url+"biscopy/hs/ExchangeSite/V1/incomingfunds?start=20210101&end=20220505&kontragent=b3e61c08-8050-11e8-94c8-c86000da8ad0"
export const INCOMINGFUNDS_BUH = url+"buhcopy/hs/ExchangeSite/V1/incomingfunds?start=20210101&end=20220505&kontragent=b422df53-1406-11e9-b107-c86000da8ad0"
export const INCOMINGFUNDS_IP = url+"iporlovcopy/hs/ExchangeSite/V1/incomingfunds?start=20210101&end=20220505&kontragent=7ca5fe47-40e8-11ea-89d8-a6adf2cce348"
 

//Расход д/с за период, в том числе по контрагенту (outgoingfunds)
export const OUTGOINGFUNDS_BIS = url+"biscopy/hs/ExchangeSite/V1/outgoingfunds?start=20210101&end=20220505&kontragent=fde67c66-15ef-445d-a6b8-232009da07a5"
export const OUTGOINGFUNDS_BUH = url+"buhcopy/hs/ExchangeSite/V1/outgoingfunds?start=20210101&end=20220505&kontragent=658dcecc-2aab-47c7-805a-53b5b10f5d89"
export const OUTGOINGFUNDS_IPORLOV = url+"iporlovcopy/hs/ExchangeSite/V1/outgoingfunds?start=20210101&end=20220501"
