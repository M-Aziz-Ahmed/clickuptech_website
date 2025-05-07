module.exports = {
  images: {
    domains: ['images.unsplash.com'], // Add trusted image domains here
  },

  async rewrites() {
    return [
      {
        source: "/services",
        destination: "/softwarehouse/services",
      },
      {
        source: "/hire-developers",
        destination: "/softwarehouse/hire-developers",
      },
      {
        source: "/portfolio",
        destination: "/softwarehouse/pages/portfolio",
      },
      {
        source: "/about",
        destination: "/softwarehouse/about",
      },
      // Institute
      {
        source: "/courses",
        destination: "/institude/courses",
      },
    ];
  },
  
};
