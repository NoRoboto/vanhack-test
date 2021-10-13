export default {
  onboarding: {
    button: `Continue`
  },
  jobListing: {
    title: 'Job Listing',
    subtitle1: 'Found',
    subtitle2: 'results',
  },
  favList: {
    title: 'Bookmarks',
    subtitle1: 'Saved',
    subtitle2: 'Jobs',
  },
  myApplicationList: {
    title: 'My Jobs',
    subtitle1: 'Saved',
    subtitle2: 'Jobs',
  },
  share: {
    buildMessage: (position: string, description: string, salary: string, location: string) => `
    At VanHack we have the best opportunities 😊: \nPosition 👔: ${position} \nDescription 💬: ${description} \nSalary 💲: ${salary} \nLocation🗺️: ${location}
    Do you want to know more details ?, use Vanhack app!.
    `,
    title: 'VanHack Opportunity'
  },
  emptyList: 'UPS, nothing to show !, add items to show them. 💾',
  cameraTitle: 'Video Recording is needed: \n\n',
  cameraText: 'Before applying it is necessary to take a video telling us why you are the best candidate, Be creative and polite. 😎'
}