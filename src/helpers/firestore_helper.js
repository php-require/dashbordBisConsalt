//import Papa from 'papaparse'
import firebase from 'firebase/app'

 const getCsvData = () => {  
 
  // const db = firebase.firestore();

  // Papa.parse(file[0], {
  //   //header: false,
  //   complete: function(results) {
      
  //     // 
  //     const tStemp = new Date().getTime()
  //     const  res = {
  //       ...results.data,
  //     }
      
  //     db.collection("csv").doc(String(tStemp)).set(res).then(() => {
  //       console.log('Successfully set');
  //       return  true 
  //     });
      
      // for(let counter = 1; counter < results.data.length; counter++) {
      //   const headers = {
      //     budgetLevel:  res[counter][0]?res[counter][0].replace(/['"]+/g, ''):null,
      //     codeBudget:  res[counter][1]?res[counter][1].replace(/['"]+/g, ''):null,
      //     contractDate:  res[counter][2]?res[counter][2].replace(/['"]+/g, ''):null,
      //     contractNum:  res[counter][3]?res[counter][3].replace(/['"]+/g, ''):null,
      //     contractBudget:  res[counter][4]?res[counter][4].replace(/['"]+/g, ''):null,
      //     contractType:  res[counter][5]?res[counter][5].replace(/['"]+/g, ''):null,
      //     customerInn: res[counter][6]?res[counter][6].replace(/['"]+/g, ''):null,
      //     customerKpp:  res[counter][7]?res[counter][7].replace(/['"]+/g, ''):null, 
      //     customerName: res[counter][8]?res[counter][8].replace(/['"]+/g, ''):null,
      //     executionDate:  res[counter][9]?res[counter][9].replace(/['"]+/g, ''):null,
      //     ikz: res[counter][10]?res[counter][10].replace(/['"]+/g, ''):null,
      //     kosgu: res[counter][11]?res[counter][11].replace(/['"]+/g, ''):null,
      //     kvr: res[counter][12]?res[counter][12].replace(/['"]+/g, ''):null,
      //     lastModified: res[counter][13]?res[counter][13].replace(/['"]+/g, ''):null,
      //     contract: res[counter][14]?res[counter][14].replace(/['"]+/g, ''):null,
      //     number: res[counter][15]?res[counter][15].replace(/['"]+/g, ''):null,
      //     objectAmount: res[counter][16]?res[counter][16].replace(/['"]+/g, ''):null,
      //     objectCode: res[counter][17]?res[counter][17].replace(/['"]+/g, ''):null,
      //     objectNameWorks: res[counter][18]?res[counter][18].replace(/['"]+/g, ''):null,
      //     objectPriceForUnit: res[counter][19]?res[counter][19].replace(/['"]+/g, ''):null,
      //     objectWorks: res[counter][20]?res[counter][20].replace(/['"]+/g, ''):null,
      //     contractPrice: res[counter][21]?res[counter][21].replace(/['"]+/g, ''):null,
      //     createdDtm: firebase.firestore.FieldValue.serverTimestamp(),
      //     lastLoginTime: firebase.firestore.FieldValue.serverTimestamp()
      //   }
      //   const tStemp = new Date().getTime()
      //   db.collection("csv").doc(String(tStemp)).set(headers)
 
      //  }
     
   // }
    
   //});
  
 
 //const collection = firebase.firestore().collection("csv")
 
  const csvRef = firebase
  .firestore()
  .collection("csv");
  csvRef
  .get()
  .then((snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("data from firestore", data); 
    return data
   
   
  });

 /* ['Номер реестровой записи контракта', 'Заказчик: наименование', 'Заказчик: ИНН', 'Заказчик: КПП', 'Уровень бюджета', 'Источник финансирования контракта: наименование бюджета', 'Источник финансирования контракта: наименование/вид внебюджетных средств', 'Контракт: дата', 'Контракт: номер', 'Предмет контракта', 'Цена контракта', 'Код бюджетной классификации', 'КОСГУ', 'КВР', 'Идентификационный код закупки (ИКЗ)', 'Объект закупки: наименование товаров, работ, услуг', 'Объект закупки: код позиции', 'Объект закупки: цена за единицу, рублей', 'Объект закупки: количество поставленных товаров, выполненных работ, оказанных услуг', 'Объект закупки: сумма, рублей', 'Дата последнего изменения записи', 'Дата исполнения контракта: по контракту']*/ 
 
}
export default getCsvData
 