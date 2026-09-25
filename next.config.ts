import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/complete-toilet-renovatie', destination: '/complete-badkamer-renovatie#toiletrenovatie', permanent: true },
      { source: '/tegelwerk/vloer-tegelen', destination: '/tegelwerk#vloertegels', permanent: true },
      { source: '/tegelwerk/wand-tegelen', destination: '/tegelwerk#wandtegels', permanent: true },
      { source: '/tegelwerk/keuken-tegelen', destination: '/tegelwerk#keuken', permanent: true },
      { source: '/tegelwerk/balkon-tegelen', destination: '/tegelwerk#balkon', permanent: true },
      { source: '/tegelwerk/badkamer-tegelen', destination: '/tegelwerk#badkamer', permanent: true },
      { source: '/specialisaties/grootformaat-tegels', destination: '/specialisaties#grootformaat', permanent: true },
      { source: '/specialisaties/mozaiek-zetten', destination: '/specialisaties#mozaiek', permanent: true },
      { source: '/specialisaties/natuursteen', destination: '/specialisaties#natuursteen', permanent: true },
      { source: '/specialisaties/keramisch-parket', destination: '/specialisaties#keramisch-parket', permanent: true },
      { source: '/kennisbank/waterdichting-badkamer-kimband', destination: '/kennisbank#waterdichting', permanent: true },
      { source: '/kennisbank/tegel-lippage-voorkomen', destination: '/kennisbank#lippage', permanent: true },
      { source: '/kennisbank/onzichtbaar-luik-badkamer', destination: '/kennisbank#inspectieluik', permanent: true },
      { source: '/kennisbank/epoxyvoeg-vs-cementvoeg', destination: '/kennisbank#epoxy-vs-cement', permanent: true },
    ];
  }
};

export default nextConfig;
