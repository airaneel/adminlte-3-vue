export interface FieldType {
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

export interface QueryType  {
    [key: string]: any;
}

