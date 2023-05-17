// policies data

import { IUserAccountGeneral } from 'src/@types/user';
import { PolicyType } from './PoliciedEditPostForm';

const dataList: PolicyType[] = [
  {
    id: '1',
    title: 'Code of Coduct',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, optio.',
    date: '12/11/22',
    type: 'Regulatory Policy',
    publish: true,
    metaTitle: 'policy',
    updateDate: '-',
  },
  {
    id: '2',
    title: 'Recruitment Policy',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, optio.',
    date: '13/11/22',
    type: 'Hr Policy',
    publish: false,
    metaTitle: 'policy',
    updateDate: '-',
  },
  {
    id: '3',
    title: 'Heath and Safety',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, optio.',
    date: '14/11/22',
    type: 'Safety Policy',
    publish: true,
    metaTitle: 'policy',
    updateDate: '-',
  },
  {
    id: '4',
    title: 'Termination Policy',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, optio.',
    date: '15/11/22',
    type: 'Regulatory Policy',
    publish: false,
    metaTitle: 'policy',
    updateDate: '-',
  },
  {
    id: '5',
    title: 'Harassment Policy',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, optio.',
    date: '15/11/22',
    type: 'Safety Policy',
    publish: false,
    metaTitle: 'policy',
    updateDate: '-',
  },
  {
    id: '6',
    title: 'No smoking Policy',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, optio.',
    date: '15/11/22',
    type: 'Restrictive Policy',
    publish: false,
    metaTitle: 'policy',
    updateDate: '-',
  },
  {
    id: '7',
    title: 'Leave Policy',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, optio.',
    date: '16/11/22',
    type: 'Hr policy',
    publish: true,
    metaTitle: 'policy',
    updateDate: '-',
  },
  {
    id: '8',
    title: 'Anti-discrimination Policy',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, optio.',
    date: '16/11/22',
    type: 'Regulatory Policy ',
    publish: true,
    metaTitle: 'policy',
    updateDate: '-',
  },
];

export { dataList };
