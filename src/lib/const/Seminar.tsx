import { ReactNode } from 'react';

type CategoryType = '' | '';

type Speaker = {
  name: string;
  icon: string;
  affiliation: string;
};

type SeminarEvent = {
  id: number;
  name: string;
  dateTime: Date;
  thumbnail: string;
  location: string;
  description: string;
  fee: number;
  speakers: Speaker[];
  categories: CategoryType[];
  applicationLink: string;
  details: string | ReactNode;
};

export const SeminarData: SeminarEvent[] = [];
