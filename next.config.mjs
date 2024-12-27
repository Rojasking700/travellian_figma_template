/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    quietDeps: true, // Add this line
    silenceDeprecations: ["legacy-js-api"], 
     sassOptions: {
      implementation: 'sass-embedded',
    },
  },
};

export default nextConfig;
