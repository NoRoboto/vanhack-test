import React from 'react';
import { ActivityIndicator } from 'react-native';

import getJobList, { IJobItemProp } from '~/api/getJobList';
import { Layout } from '~/components/Layout';
import { ViewHeader } from '~/components/TabHeader';
import { JobCard } from '~/components/JobCard';
import AnimatedList from '~/components/AnimatedList';

import COPY from '~/data/copy';

export const Home: React.FC = () => {
  const getJobListQuery = getJobList();
  const filterQueryData = getJobListQuery.data?.result?.items
  const total = filterQueryData?.length || 0;
  const renderItem = ({ item, index }: { item: IJobItemProp, index: number }) => {
    return <JobCard item={item} index={index} total={total} />;
  }

  return (
    <Layout.ViewWrapper>
      <ViewHeader 
        title={COPY.jobListing.title}
        subtitle1={COPY.jobListing.subtitle1}
        subtitle2={COPY.jobListing.subtitle2}
        number={total}
      />
      <Layout.Body>
        {getJobListQuery.isFetching && <ActivityIndicator color='red' size='large' />}
        {!getJobListQuery.isFetching && <AnimatedList data={filterQueryData} renderItem={renderItem} />}
      </Layout.Body>
    </Layout.ViewWrapper>
  );
}
