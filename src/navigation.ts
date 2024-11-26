import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Apps',
      links: [
        {
          text: 'Angor',
          href: getPermalink('/angor'),
        },
        {
          text: 'Ariton',
          href: getPermalink('/ariton'),
        },
        {
          text: 'Notes',
          href: getPermalink('/notes'),
        },
        {
          text: 'Wallet',
          href: getPermalink('/wallet'),
        },
        { 
          text: '----', 
          disabled: true, 
        },
        {
          text: 'Blockchain',
          href: getPermalink('/node'),
        },
        {
          text: 'Indexer',
          href: getPermalink('/indexer'),
        },
        {
          text: 'Explorer',
          href: getPermalink('/explorer'),
        }
       
      ],
    },
    {
      text: 'Resources',
      links: [
        {
          text: 'Documentation',
          href: 'https://docs.blockcore.net',
        },
        {
          text: 'Blog',
          href: getBlogPermalink(),
        },
        {
          text: 'GitHub',
          href: 'https://github.com/block-core',
          target: '_blank',
        },
         {
          text: 'Discord',
          href: 'https://www.blockcore.net/discord',
          target: '_blank',
        }
         
      ],
    },
     {
      text: 'About',
      links: [
        {
          text: 'About Us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
      ],
    },
  ],
  actions: [{ text: 'GitHub', href: 'https://github.com/block-core', target: '_blank' }],
};


export const footerData = {
  links: [
    {
      title: 'Apps',
      links: [
        { text: 'Angor', href: getPermalink('/angor') },
        { text: 'Ariton', href: getPermalink('/ariton') },
        { text: 'Notes', href: getPermalink('/notes') },
        { text: 'Wallet', href: getPermalink('/wallet') },

      ],
    },
    {
      title: 'Developers',
      links: [
        { text: 'Documentation', href: 'https://docs.blockcore.net' },
        { text: 'GitHub', href: 'https://github.com/block-core' },
      ],
    },
    {
      title: 'Community',
      links: [
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Discord', href: 'https://www.blockcore.net/discord' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/blockcoredev' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/block-core' },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: 'https://www.blockcore.net/discord' },
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/blockcoredev' },
  ],
  footNote: `
      © ${new Date().getFullYear()} Blockcore. All rights reserved.
  `,
};
