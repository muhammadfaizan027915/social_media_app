/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.pexels.com",
                port: "",
                pathname: "/photos/**",
            },
        ],
    },
    async redirects() {
        return [
            {
                source: "/",
                destination: "/signIn",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
