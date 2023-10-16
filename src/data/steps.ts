export const steps = [
  {
    stepNumber: 1,
    stepTitle: 'Personal info',
    stepSubTitle: 'Please provide your name, email address, and phone number',
    inputs: [
      { type: 'text', label: 'Name', placeHolder: 'e.g. Stephen King' },
      {
        type: 'email',
        label: 'Email Address',
        placeHolder: 'e.g. stephenking@lorem.com',
      },
      {
        type: 'text',
        label: 'Phone Number',
        placeHolder: 'e.g. +1 234 567 890',
      },
    ],
  },
];
