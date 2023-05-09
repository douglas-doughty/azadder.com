module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy({'font/sourceserifpro-regular.woff2':'sourceserifpro-regular.woff2'});
	eleventyConfig.addPassthroughCopy({'font/sourceserifpro-regular.woff': 'sourceserifpro-regular.woff'});
	eleventyConfig.addPassthroughCopy({'font/sourcesanspro-regular.woff2': 'sourcesanspro-regular.woff2'});
	eleventyConfig.addPassthroughCopy({'font/sourcesanspro-regular.woff': 'sourcesanspro-regular.woff'});
};