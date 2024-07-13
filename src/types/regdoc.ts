export interface Regdoc {
	rzn_id: string;
	ru_number: string;
	reg_date: Date | null;
	exp_date: Date | null;
	ru_body: string | null;
	manufacturer_rep_name: string | null;
	manufacturer_rep_location: string | null;
	manufacturer_rep_legal_address: string | null;
	manufacturer_name: string | null;
	manufacturer_location: string | null;
	manufacturer_legal_address: string | null;
	okp_okpd2: string | null;
	risk_class: string;
	device_purpose: string | null;
	device_type: string; // Assuming 'code' from 'kodvida' is a string
	production_address: string | null;
  }