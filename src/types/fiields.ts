

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
	[key: string]: QueryType | undefined ;
}
