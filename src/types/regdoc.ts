export interface Regdoc {
	id: string;
	rzn_id?: string;
	ru_status?: string;
	ru_number?: string;
	reg_date?: Date | null;
	exp_date?: Date | null;
	ru_body?: string | null;
	manufacturer_rep_name?: string | null;
	manufacturer_rep_location?: string | null;
	manufacturer_rep_legal_address?: string | null;
	manufacturer_name?: string | null;
	manufacturer_location?: string | null;
	manufacturer_legal_address?: string | null;
	okp_okpd2?: string | null;
	risk_class?: string;
	device_purpose?: string | null;
	code?: string; // Assuming 'code' from 'kodvida' is a string
	production_address?: string | null;
}

export const FieldGroups = {
	main_info: { title: 'Рег. удостоверение', order: 0 },
	codes_info: { title: 'Классификаторы', order: 1 },
	date_info: { title: 'Сроки действия', order: 2 },
	man_info: { title: 'Организация - производитель (изготовитель) МИ', order: 3 },
	rep_info: { title: 'Организация - уполномоченный представитель производителя', order: 4 },
} as const;

// Тип, представляющий ключи константы FieldGroups
type FieldGroupName = keyof typeof FieldGroups;
// Тип, представляющий структуру объектов в FieldGroups
type FieldGroupDetails = (typeof FieldGroups)[FieldGroupName];


export interface FieldType {
	group?: FieldGroupDetails; // Использование объекта из FieldGroups
	label: string;
	type: string;
	props: {
		name: string;
		type?: string;
		ref?: string | null;
	};
	placeholder?: string;
	class?: string;
	options?: { value: string; text: string }[];
}
export interface QueryType {
	[key: string]: string | boolean | number;
}
