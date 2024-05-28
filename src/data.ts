import googleLogo from './assets/logo-chrome.svg'
import firefoxLogo from './assets/logo-firefox.svg'
import operaLogo from './assets/logo-opera.svg'

import illustrationFeaturesTab1 from './assets/illustration-features-tab-1.svg'
import illustrationFeaturesTab2 from './assets/illustration-features-tab-2.svg'
import illustrationFeaturesTab3 from './assets/illustration-features-tab-3.svg'

export const navLinks = [
  {
    id: 1,
    name: 'FEATURES',
  },
  {
    id: 2,
    name: 'PRICING',
  },
  {
    id: 3,
    name: 'CONTACT',
  },
]

export const questions = [
  {
    id: 1,
    question: 'What is Bookmark?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.',
  },
  {
    id: 2,
    question: 'How can I request a new browser?',
    answer:
      'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.',
  },
  {
    id: 3,
    question: 'Is there a mobile app?',
    answer:
      'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.',
  },
  {
    id: 4,
    question: 'What about other Chromium browsers?',
    answer:
      'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.',
  },
]

export const download = [
  {
    id: 1,
    logo: googleLogo,
    browser: 'Chrome',
    minVersion: 62,
  },
  {
    id: 2,
    logo: firefoxLogo,
    browser: 'Firefox',
    minVersion: 55,
  },
  {
    id: 3,
    logo: operaLogo,
    browser: 'Opera',
    minVersion: 46,
  },
]

export const tabs = [
  {
    id: 1,
    button: 'Simple Bookmarking',
    image: illustrationFeaturesTab1,
    title: 'Bookmark in one click',
    desc: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
  },
  {
    id: 2,
    button: 'Speedy Searching',
    image: illustrationFeaturesTab2,
    title: 'Intelligent search',
    desc: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
  },
  {
    id: 3,
    button: 'Easy Sharing',
    image: illustrationFeaturesTab3,
    title: 'Share your bookmarks',
    desc: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
  },
]
