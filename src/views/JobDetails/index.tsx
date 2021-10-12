import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ScrollView, View, StyleSheet } from 'react-native';

import { Layout } from '~/components/Layout';
import { CustomText } from '~/components/Text';
import { FeedStackParams } from '~/routes/Feed';
import { CountryFlag } from '~/components/CountryFlag';
import MaterialCommunityIcons from '@expo/vector-icons/build/MaterialCommunityIcons';
import { BookmarkButton } from '~/components/Button/BookmarkButton';
import { ShareButton } from '~/components/Button/ShareButton';
import { JobApplyButton } from '~/components/Button/JobApplyButton';

import { theme } from '~/styles/theme';
import COPY from '~/data/copy';

const relocateCopy = {
  'Relocate': 'Immediate relocation',
  'RemoteRelocate': 'Start remote then relocated',
  'Remote': 'Fully remote'
}

type Relocate = 'Relocate' | 'RemoteRelocate' | 'Remote';

export const JobDetails = () => {
  const { params } = useRoute<RouteProp<FeedStackParams, 'Details'>>();
  const { item } = params;

  const textArea = (title: string | React.ReactElement, body: string) => {
    return (
      <>
        <View style={styles.separator} />
        <CustomText variant='bold'>{title}</CustomText>
        <View style={styles.separator} />
        <CustomText variant='simpleBody'>
          {body}
        </CustomText>
      </>
    );
  }

  const locationDetails = () => {
    const message = `${relocateCopy[item.relocate as Relocate ]} \nlocation: ${item.location}`
    const flagTitle = (
      <View style={styles.titleContainer}>
        <CountryFlag flagCode={item.flagCode} width={24} height={24} />
        <CustomText variant='bold'> Relocation Details</CustomText>
      </View>
    ) 
    return textArea(flagTitle, message);
  }

  const header = (title: string, icon: keyof typeof MaterialCommunityIcons.glyphMap) => {
    const shareMessage = COPY.share.buildMessage(item.title, item.description, `${item.salaryFrom} - ${item.salaryTo} (${item.currency})`, item.location);
    
    return (
      <View style={styles.titleContainer}>
        <View style={{ flex: 0.8 }}>
          <CustomText variant='bold'>{title}</CustomText>
        </View>
        <View style={{ marginLeft: 5 }}>
          {icon === 'bookmark-outline' && <BookmarkButton 
            item={item}
            color={theme.colors.primary.light}
          />
          }
          {icon !== 'bookmark-outline' && 
            <ShareButton 
              iconName={icon}
              color={theme.colors.primary.light}
              title={COPY.share.title}
              message={shareMessage}
            />
          }
        </View>
      </View>
    );
  }

  return (
    <Layout.ViewWrapper styleProps={{ backgroundColor: theme.colors.primary.light }}>
      <Layout.CenterContainer styleProps={{ marginVertical: theme.spacing[12], borderRadius: 20, backgroundColor: theme.colors.misc.white }}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, marginVertical: 5, paddingTop: 5 }} 
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
        >
          {header(item.companyName, 'bookmark-outline')}
          <View style={styles.separator} />
          {header(item.title, 'share-outline')}
          <View style={styles.separator} />
          <View style={styles.titleContainer}>
            <CustomText variant='bold'>Salary: {item.currency} {item.salaryFrom} - {item.salaryTo}</CustomText>
          </View>
          {textArea('Description', item.description)}
          {textArea('Skills', item.skills)}
          {textArea('Role', item.jobType)}
          {locationDetails()}
          <View style={styles.separator} />
        </ScrollView>
        <View style={styles.buttonContainer}>
          <JobApplyButton item={item} />
        </View>
      </Layout.CenterContainer>
    </Layout.ViewWrapper>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  separator: {
    height: 15
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: theme.spacing[12]
  }
});