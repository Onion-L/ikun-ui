import type { Theme } from '@unocss/preset-uno';
import type { UserShortcuts } from 'unocss';

export const commonShortcuts: UserShortcuts<Theme> = {
	pr: 'relative',
	pa: 'absolute',
	pf: 'fixed',
	'p-c': 'pa top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
	'f-c': 'flex justify-center items-center',
	'f-c-c': 'f-c flex-col',
	fc: 'flex justify-center',
	fi: 'flex items-center',
	fcc: 'flex justify-center items-center',
	fs: 'flex justify-start',
	fsc: 'flex justify-start items-center',
	fse: 'flex justify-start items-end',
	fe: 'flex justify-end',
	fec: 'flex justify-end items-center',
	fb: 'flex justify-between',
	fbc: 'flex justify-between items-center',
	fa: 'flex justify-around',
	fac: 'flex justify-around items-center',
	fw: 'flex flex-wrap',
	fwr: 'flex flex-wrap-reverse',
	infi: 'inline-flex items-center',
	infsc: 'inline-flex justify-start items-center',
	infcc: 'inline-flex justify-center items-center',
	'bdt-1': 'border-t-1 border-l-0 border-b-0 border-r-0',
	'bdl-1': 'border-l-1 border-t-0 border-b-0 border-r-0',
	'bdb-1': 'border-l-0 border-t-0 border-b-1 border-r-0',
	'bdlb-1': 'border-l-1 border-t-0 border-b-1 border-r-0',
	'bdtb-1': 'border-l-0 border-t-1 border-b-1 border-r-0',
	'bdtr-1': 'border-l-0 border-t-1 border-b-0 border-r-1',
	'n-bdb-1': 'border-l-1 border-t-1 border-b-0 border-r-1',
	'n-bdt-1': 'border-l-1 border-t-0 border-b-1 border-r-1',
	'n-bdl-1': 'border-l-0 border-t-1 border-b-1 border-r-1'
};
