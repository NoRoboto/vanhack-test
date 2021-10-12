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
    At VanHack we have the best opportunities 😊: \n
    Position 👔: ${position} \n
    Description 💬: ${description} \n
    Salary 💲: ${salary} \n
    Location🗺️: ${location}

    Do you want to know more details ?, use Vanhack app!.
    `,
    title: 'VanHack Opportunity'
  },
  emptyList: 'UPS, nothing to show !, add items to show them. 💾'
}