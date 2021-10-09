import { useQuery, UseQueryResult } from 'react-query';
import CONSTANTS from '~/constants';

const fetchJobsUrl = `${CONSTANTS.API.BASE}${CONSTANTS.API.JOB_LIST}`;

export interface IJobItemProp {
  id: string;
  cretedAt: string;
  numberOfPositions: number;
  companyName: string;
  title: string;
  area: string;
  description: string;
  skills: string;
  slug: string;
  totalHires: number;
  flagCode: string;
  location: string;
  relocate: string;
  salaryFrom: number;
  salaryTo: number;
  currency: string;
  jobType: string;
  canApply: boolean;
}

interface responseJobList {
  result: {
    items: IJobItemProp[]
  }
}

export const getJobList = (): Promise<void> =>
  fetch(`${fetchJobsUrl}${CONSTANTS.DEFAULT_API_PARAMS.JOB_LIST}`, {
    method: 'GET',
  }).then(res => {
    return res.json();
  });

const useUserProfileQuery = (): UseQueryResult<responseJobList, unknown> =>
  useQuery('getJobList', getJobList);

export default useUserProfileQuery;