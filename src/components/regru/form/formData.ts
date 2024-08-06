
import { FieldGroups, FieldType } from "@/types/fiields";


const fields: FieldType[] = [
	{	
		group: FieldGroups.main_info,
		label: 'Статус',
		type: 'select',
		props: { name: 'ru_status', type: 'text'},
		options: [
            { value: 'active', text: 'Активный' },
            { value: 'inactive', text: 'Неактивный' },
        ],
	},
	{
		group: FieldGroups.main_info,
		label: '№ РУ',
		type: 'input',
		props: { name: 'ru_number', type: 'text' },
	},
	{	group: FieldGroups.codes_info,
		label: 'Код вида МИ',
		type: 'input',
		props: { name: 'device_type', type: 'text' },
	},
	{
		group: FieldGroups.date_info,
		label: 'Дата регистрации',
		type: 'input',
		props: { name: 'reg_date', type: 'text', ref: 'date' },
	},
	{
		group: FieldGroups.date_info,
		label: 'Действует до',
		type: 'input',
		props: { name: 'exp_date', type: 'text', ref: 'date' },
	},
	{	group: FieldGroups.codes_info,
		label: 'Код ОКП/ОКПД2',
		type: 'input',
		props: { name: 'okp_okpd2', type: 'text' },
	},
	{
		group: FieldGroups.man_info,
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
		group: FieldGroups.rep_info,
		label: 'Заявитель',
		type: 'input',
		props: { name: 'applicant_name', type: 'text' },
	},
	{
		group: FieldGroups.rep_info,
		label: 'Место нахождения заявителя',
		type: 'input',
		props: { name: 'applicant_location', type: 'text' },
	},
	{
		group: FieldGroups.rep_info,
		label: 'Юр. адрес заявителя',
		type: 'input',
		props: { name: 'manufacturer_rep_location', type: 'text' },
	},
	{
		group: FieldGroups.rep_info,
		label: 'Представитель',
		type: 'input',
		props: { name: 'manufacturer_rep_name', type: 'text' },
	},
	{
		group: FieldGroups.rep_info,
		label: 'Адрес представителя',
		type: 'input',
		props: { name: 'manufacturer_rep_location', type: 'text' },
	},
	{
		group: FieldGroups.rep_info,
		label: 'Юр. адрес представителя',
		type: 'input',
		props: { name: 'manufacturer_rep_legal_address', type: 'text' },
	},
	{
		group: FieldGroups.man_info,
		label: 'Производитель',
		type: 'input',
		props: { name: 'manufacturer_name', type: 'text' },
	},
	{
		group: FieldGroups.man_info,
		label: 'Адрес производителя',
		type: 'input',
		props: { name: 'manufacturer_location', type: 'text' },
	},
	{
		group: FieldGroups.man_info,
		label: 'Юр. адрес производителя',
		type: 'input',
		props: { name: 'manufacturer_address', type: 'text' },
	},
	{
		label: 'Назначение МИ',
		type: 'input',
		props: { name: 'prescription', type: 'text' },
	},
]

export default fields;