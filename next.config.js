/** @type {import('next').NextConfig} */
require("dotenv").config();

module.exports = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["openweathermap.org"],
	},
};
