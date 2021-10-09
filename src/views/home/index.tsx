import React from 'react';
import { FlatList, StyleSheet, Text, ActivityIndicator, View } from 'react-native';

import getJobList, { IJobItemProp } from '~/api/getJobList';
import { Layout } from '~/components/Layout';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { JobListHeader } from '~/components/JobListHeader';

export const Home: React.FC = () => {
  const getJobListQuery = getJobList();
  const renderItem = ({ item }: { item: IJobItemProp }) => {
    return <Text>{item.companyName || ''}</Text>;
  }

  return (
    <Layout.ViewWrapper>
      <JobListHeader />
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
