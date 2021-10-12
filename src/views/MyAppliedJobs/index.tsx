import React from 'react';

import { useAppSelector } from '~/store/hooks';
import AnimatedList from '~/components/AnimatedList';
import { JobCard } from '~/components/JobCard';
import { Layout } from '~/components/Layout';
import { ViewHeader } from '~/components/TabHeader';
import { IJobItemProp } from '~/api/getJobList';
import COPY from '~/data/copy';
import { EmptyPlaceholder } from '~/components/EmptyPlaceholder';

export const MyJobs: React.FC = () => {
  const JobList = useAppSelector(state => state.userPreferences.jobApplicationList);
  const total = JobList.length || 0;
  const renderItem = ({ item, index }: { item: IJobItemProp, index: number }) => {
    return <JobCard item={item} index={index} showBookmark={false} />;
  }

  return  (
    <Layout.ViewWrapper>
      <ViewHeader 
        number={total}
        title={COPY.myApplicationList.title}
        subtitle1={COPY.myApplicationList.subtitle1}
        subtitle2={COPY.myApplicationList.subtitle2}
      />
      <Layout.Body>
        { total > 0 && <AnimatedList data={JobList} renderItem={renderItem} /> }
        { total === 0 && <EmptyPlaceholder /> }
      </Layout.Body>
    </Layout.ViewWrapper>
  )
}