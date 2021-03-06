import React from 'react';

import { useAppSelector } from '~/store/hooks';
import AnimatedList from '~/components/AnimatedList';
import { JobCard } from '~/components/JobCard';
import { Layout } from '~/components/Layout';
import { ViewHeader } from '~/components/TabHeader';
import { IJobItemProp } from '~/api/getJobList';
import { EmptyPlaceholder } from '~/components/EmptyPlaceholder';

import COPY from '~/data/copy';

export const Favourites: React.FC = () => {
  const bookmarkList = useAppSelector(state => state.userPreferences.bookmarkList);
  const total = bookmarkList.length || 0;
  const renderItem = ({ item, index }: { item: IJobItemProp, index: number }) => {
    return <JobCard item={item} index={index} />;
  }

  return  (
    <Layout.ViewWrapper>
      <ViewHeader 
        number={total}
        title={COPY.favList.title}
        subtitle1={COPY.favList.subtitle1}
        subtitle2={COPY.favList.subtitle2}
      />
      <Layout.Body>
        { total > 0 && <AnimatedList data={bookmarkList} renderItem={renderItem} /> }
        { total === 0 && <EmptyPlaceholder /> }
      </Layout.Body>
    </Layout.ViewWrapper>
  )
}