<template>
  <div class="container-fuid">
    {{ Query }}
    <div class="card card-success card-outline">
      <div class="card-body">
        <form @submit.prevent="handleSubmit">
          <div class="row">
            <Field v-for="(field, index) in fields" :key="index" :index="index" :field="field" v-model="Query[field.props.name]" />
          </div>
          <div class="d-grid">
            <button type="submit" class="btn btn-success">Поиск</button>
          </div>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-12" v-for="item, index in items" :key="index">
        <div class="card card-primary card-outline"">
          <div class="card-header">
            <h3 class="card-title">РУ № {{ item.ru_number }}</h3>
          </div>
          <div class="card-body">
            <p class="card-text">ОКПД: {{ item.okp_okpd2 }}</p>
            <p class="card-text">Дата публикации: {{ item.reg_date }}</p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary">Подробнее</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import Field from './field.vue'; // компонент Field
import axios from 'axios';
import { Regdoc } from '@/types/regdoc';
import { useToast } from 'vue-toastification'
import { FieldType, QueryType } from './types';



const fields: FieldType[] = [
  {
    label: 'Описание МИ содержит',
    type: 'input',
    props: { name: 'ru_body', type: 'text' },
  },
  {
    label: '№ РУ',
    type: 'input',
    props: { name: 'ru_number', type: 'text' },
  },
  {
    label: 'Код вида МИ',
    type: 'input',
    props: { name: 'device_type', type: 'text' },
  },
  {
    label: 'Код ОКП/ОКПД2',
    type: 'input',
    props: { name: 'okp_okpd2', type: 'text' },
  },
  {
    label: 'Дата регистрации',
    type: 'input',
    props: { name: 'reg_date', type: 'text', ref: 'startDate' },
  },
  {
    label: 'Действует до',
    type: 'input',
    props: { name: 'exp_date', type: 'text', ref: 'endDate' },
  },

  {
    label: 'Адрес производства (изготовления)',
    type: 'input',
    props: { name: 'production_address', type: 'text' },
  },
  {
    label: 'Уник. номер реестровой записи',
    type: 'input',
    props: { name: 'unique_record_number', type: 'text' },
  },
  {
    label: 'Заявитель',
    type: 'input',
    props: { name: 'applicant_name', type: 'text' },
  },
  {
    label: 'Место нахождения заявителя',
    type: 'input',
    props: { name: 'applicant_location', type: 'text' },
  },
  {
    label: 'Юр. адрес заявителя',
    type: 'input',
    props: { name: 'manufacturer_rep_location', type: 'text' },
  },
  {
    label: 'Представитель',
    type: 'input',
    props: { name: 'manufacturer_rep_name', type: 'text' },
  },
  {
    label: 'Адрес представителя',
    type: 'input',
    props: { name: 'manufacturer_rep_location', type: 'text' },
  },
  {
    label: 'Юр. адрес представителя',
    type: 'input',
    props: { name: 'manufacturer_rep_legal_address', type: 'text' },
  },
  {
    label: 'Производитель',
    type: 'input',
    props: { name: 'manufacturer_name', type: 'text' },
  },
  {
    label: 'Адрес производителя',
    type: 'input',
    props: { name: 'manufacturer_location', type: 'text' },
  },
  {
    label: 'Юр. адрес производителя',
    type: 'input',
    props: { name: 'manufacturer_address', type: 'text' },
  },
  {
    label: 'Назначение МИ',
    type: 'input',
    props: { name: 'prescription', type: 'text' },
  },
];

const Query = reactive<QueryType>({});

const updateModelValue = ({ value, fieldName }: { value: string; fieldName: string }) => {
  Query[fieldName] = value;
};



const items = ref<Regdoc[]>()

const handleSubmit = async () => {
  // Фильтрация пустых значений
  const filteredQuery = Object.fromEntries(
    Object.entries(Query).filter(([key, value]) => value !== '')
  );

  const queryString = new URLSearchParams(filteredQuery).toString();
  console.log('Form submitted with:', queryString);

  try {
    let response = await axios.get(`http://localhost:8000/api/regdocs/?${queryString}`);
    items.value = response.data.results;
    useToast().success('Запрос успешно выполнен!');

    console.log('API Response:', items.value);
    // Обработка данных ответа здесь
  } catch (error) {
    useToast().error('Ошибка при выполнении запроса к API!');

    console.error('Ошибка при запросе API:', error);
  }
};
</script>

<style scoped>
.input-group-text {
  min-width: 150px;
}
</style>
