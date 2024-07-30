import axios from 'axios';


// import env from 'vue';


const intanceAxios = axios.create({
  timeout: 5000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  fetchOptions: {

  }
});

intanceAxios.interceptors.request.use(request => {
  console.log('Starting Request', request)
  return request
})

intanceAxios.interceptors.response.use(response => {
  console.log('Response:', response)
  return response
}, error => {
  console.log('Error:', error.response)
  return Promise.reject(error)
})

export default intanceAxios;

const regRuAxios = axios.create({
  

  baseURL: 'https://roszdravnadzor.gov.ru',
  headers: {
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Accept-Encoding': 'gzip, deflate, br, zstd',
    'Accept-Language': 'ru,en;q=0.9,ru-RU;q=0.8,de;q=0.7,pl;q=0.6,ka;q=0.5',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Type': 'application/x-www-form-urlencoded',
    'DNT': '1',
    'Host': 'roszdravnadzor.gov.ru',
    'Origin': 'https://roszdravnadzor.gov.ru',
    'Pragma': 'no-cache',
    'Referer': 'https://roszdravnadzor.gov.ru/',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'X-Requested-With': 'XMLHttpRequest',
  },
});

const data = (q:string) =>  ({
  "columns%5B0%5D%5Bdata%5D": "col1.label",
  "columns%5B0%5D%5Bname%5D": null,
  "columns%5B0%5D%5Bsearchable%5D": "true",
  "columns%5B0%5D%5Borderable%5D": "true",
  "columns%5B0%5D%5Bsearch%5D%5Bvalue%5D": null,
  "columns%5B0%5D%5Bsearch%5D%5Bregex%5D": "false",
  "columns%5B1%5D%5Bdata%5D": "col2.label",
  "columns%5B1%5D%5Bname%5D": null,
  "columns%5B1%5D%5Bsearchable%5D": "true",
  "columns%5B1%5D%5Borderable%5D": "true",
  "columns%5B1%5D%5Bsearch%5D%5Bvalue%5D": null,
  "columns%5B1%5D%5Bsearch%5D%5Bregex%5D": "false",
  "columns%5B2%5D%5Bdata%5D": "col3.label",
  "columns%5B2%5D%5Bname%5D": null,
  "columns%5B2%5D%5Bsearchable%5D": "true",
  "columns%5B2%5D%5Borderable%5D": "true",
  "columns%5B2%5D%5Bsearch%5D%5Bvalue%5D": null,
  "columns%5B2%5D%5Bsearch%5D%5Bregex%5D": "false",
  "columns%5B3%5D%5Bdata%5D": "col4.label",
  "columns%5B3%5D%5Bname%5D": null,
  "columns%5B3%5D%5Bsearchable%5D": "true",
  "columns%5B3%5D%5Borderable%5D": "true",
  "columns%5B3%5D%5Bsearch%5D%5Bvalue%5D": null,
  "columns%5B3%5D%5Bsearch%5D%5Bregex%5D": "false",
  "columns%5B4%5D%5Bdata%5D": "col5.label",
  "columns%5B4%5D%5Bname%5D": null,
  "columns%5B4%5D%5Bsearchable%5D": "true",
  "columns%5B4%5D%5Borderable%5D": "true",
  "columns%5B4%5D%5Bsearch%5D%5Bvalue%5D": null,
  "columns%5B4%5D%5Bsearch%5D%5Bregex%5D": "false",
  "columns%5B5%5D%5Bdata%5D": "col6.label",
  "columns%5B5%5D%5Bname%5D": null,
  "columns%5B5%5D%5Bsearchable%5D": "true",
  "columns%5B5%5D%5Borderable%5D": "true",
  "columns%5B5%5D%5Bsearch%5D%5Bvalue%5D": null,
  "columns%5B5%5D%5Bsearch%5D%5Bregex%5D": "false",
  "columns%5B6%5D%5Bdata%5D": "col7.label",
  "columns%5B6%5D%5Bname%5D": null,
  "columns%5B6%5D%5Bsearchable%5D": "true",
  "columns%5B6%5D%5Borderable%5D": "true",
  "columns%5B6%5D%5Bsearch%5D%5Bvalue%5D": null,
  "columns%5B6%5D%5Bsearch%5D%5Bregex%5D": "false",
  "columns%5B7%5D%5Bdata%5D": "col8.label",
  "columns%5B7%5D%5Bname%5D": null,
  "columns%5B7%5D%5Bsearchable%5D": "true",
  "columns%5B7%5D%5Borderable%5D": "true",
  "columns%5B7%5D%5Bsearch%5D%5Bvalue%5D": null,
  "columns%5B7%5D%5Bsearch%5D%5Bregex%5D": "false",
  "columns%5B8%5D%5Bdata%5D": "col9.label",
  "columns%5B8%5D%5Bname%5D": null,
  "columns%5B8%5D%5Bsearchable%5D": "true",
  "columns%5B8%5D%5Borderable%5D": "true",
  "columns%5B8%5D%5Bsearch%5D%5Bvalue%5D": null,
  "columns%5B8%5D%5Bsearch%5D%5Bregex%5D": "false",
  "columns%5B9%5D%5Bdata%5D": "col10.label",
  "columns%5B9%5D%5Bname%5D": null,
  "columns%5B9%5D%5Bsearchable%5D": "true",
  "columns%5B9%5D%5Borderable%5D": "true",
  "columns%5B9%5D%5Bsearch%5D%5Bvalue%5D": null,
  "columns%5B9%5D%5Bsearch%5D%5Bregex%5D": "false",
  "columns%5B10%5D%5Bdata%5D": "col11.label",
  "columns%5B10%5D%5Bname%5D": null,
  "columns%5B10%5D%5Bsearchable%5D": "true",
  "columns%5B10%5D%5Borderable%5D": "true",
  "columns%5B10%5D%5Bsearch%5D%5Bvalue%5D": null,
  "columns%5B10%5D%5Bsearch%5D%5Bregex%5D": "false",
  "columns%5B11%5D%5Bdata%5D": "col12.label",
  "columns%5B11%5D%5Bname%5D": null,
  "columns%5B11%5D%5Bsearchable%5D": "true",
  "columns%5B11%5D%5Borderable%5D": "true",
  "columns%5B11%5D%5Bsearch%5D%5Bvalue%5D": null,
  "columns%5B11%5D%5Bsearch%5D%5Bregex%5D": "false",
  "columns%5B12%5D%5Bdata%5D": "col13.label",
  "columns%5B12%5D%5Bname%5D": null,
  "columns%5B12%5D%5Bsearchable%5D": "true",
  "columns%5B12%5D%5Borderable%5D": "true",
  "columns%5B12%5D%5Bsearch%5D%5Bvalue%5D": null,
  "columns%5B12%5D%5Bsearch%5D%5Bregex%5D": "false",
  "columns%5B13%5D%5Bdata%5D": "col14.label",
  "columns%5B13%5D%5Bname%5D": null,
  "columns%5B13%5D%5Bsearchable%5D": "true",
  "columns%5B13%5D%5Borderable%5D": "true",
  "columns%5B13%5D%5Bsearch%5D%5Bvalue%5D": null,
  "columns%5B13%5D%5Bsearch%5D%5Bregex%5D": "false",
  "columns%5B14%5D%5Bdata%5D": "col15.label",
  "columns%5B14%5D%5Bname%5D": null,
  "columns%5B14%5D%5Bsearchable%5D": "true",
  "columns%5B14%5D%5Borderable%5D": "true",
  "columns%5B14%5D%5Bsearch%5D%5Bvalue%5D": null,
  "columns%5B14%5D%5Bsearch%5D%5Bregex%5D": "false",
  "columns%5B15%5D%5Bdata%5D": "col16.label",
  "columns%5B15%5D%5Bname%5D": null,
  "columns%5B15%5D%5Bsearchable%5D": "true",
  "columns%5B15%5D%5Borderable%5D": "true",
  "columns%5B15%5D%5Bsearch%5D%5Bvalue%5D": null,
  "columns%5B15%5D%5Bsearch%5D%5Bregex%5D": "false",
  "columns%5B16%5D%5Bdata%5D": "col17.label",
  "columns%5B16%5D%5Bname%5D": null,
  "columns%5B16%5D%5Bsearchable%5D": "true",
  "columns%5B16%5D%5Borderable%5D": "true",
  "columns%5B16%5D%5Bsearch%5D%5Bvalue%5D": null,
  "columns%5B16%5D%5Bsearch%5D%5Bregex%5D": "false",
  "columns%5B17%5D%5Bdata%5D": "col18.label",
  "columns%5B17%5D%5Bname%5D": null,
  "columns%5B17%5D%5Bsearchable%5D": "true",
  "columns%5B17%5D%5Borderable%5D": "true",
  "columns%5B17%5D%5Bsearch%5D%5Bvalue%5D": null,
  "columns%5B17%5D%5Bsearch%5D%5Bregex%5D": "false",
  "order%5B0%5D%5Bcolumn%5D": "0",
  "order%5B0%5D%5Bdir%5D": "asc",
  'q_mi_label_application': q,
  'q_appl_label': null,
  'q_prescription': null,
  'q_no_uniq': null,
  'q_appl_address': null,
  'q_no': null,
  'q_status': null,
  'q_appl_address_post': null,
  'q_prod_address_post': null,
  'q_okp': null,
  'q_prod_address': null,
  'q_address_production': null,
  'dt_ru_end_from': null,
  'dt_ru_end_to': null,
  'dt_ru_from': null,
  'dt_ru_to': null,
  'q_interchangeability_med_products': null,
  'q_prod_label': null,
  'id_sclass': null,
  'q_in_accordance_nomen': null,
})

export const getRegRuInfo = (t: string) => (
    regRuAxios.post('/ajax/services/misearch', data(t) ))
      .then((response) => {
        console.log(`Response: ${JSON.stringify(response.data)}`);
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      })