import React from 'react';
import { FlatList, StyleSheet, ActivityIndicator } from 'react-native';

import getJobList, { IJobItemProp } from '~/api/getJobList';
import { Layout } from '~/components/Layout';
import { JobListHeader } from '~/components/JobListHeader';
import { JobCard } from '~/components/JobCard';

export const Home: React.FC = () => {
  const getJobListQuery = getJobList();
  const total = getJobListQuery.data?.result?.items?.length || 0;
  const renderItem = ({ item, index }: { item: IJobItemProp, index: number }) => {
    return <JobCard item={item} index={index} total={total} />;
  }

  return (
    <Layout.ViewWrapper>
      <JobListHeader jobsNumber={total} />
      <Layout.Body>
        {getJobListQuery.isFetching && <ActivityIndicator color='red' size='large' />}
        {!getJobListQuery.isFetching && <FlatList
          keyExtractor={(item) => item.id + ''}
          data={getJobListQuery.data?.result.items || []}
          renderItem={renderItem}
        />}
      </Layout.Body>
    </Layout.ViewWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  counterWrapper: {
    flexDirection: 'row',
  }
});
