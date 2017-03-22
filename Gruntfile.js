module.exports = function (grunt) {
grunt.initConfig({
	clean:{
		dist: ["dist/"]
	},
	jshint: {
		dist: ['gruntfile.js','portal/*.js','portal/js/*.js']
	},
	concat:{
		dist: {
			src: ["portal/js/*.js"],
			dest: "dist/js/scripts.js"
		}
	},
	uglify: {
		dist: {
			src: ["dist/js/scripts.js"],
			dest: "dist/js/scripts.min.js"
		}
	},
	copy: {
		dist: {
			cwd:'portal',
			src:["**/*.css","**/*.html","lib/*.js",
			"**/*.episode","**/*.images","**/*.ui-components"],
			dest: "dist/",
			expand:true
		}
	},
	
});
grunt.loadNpmTasks("grunt-contrib-clean");
grunt.loadNpmTasks("grunt-contrib-jshint");
grunt.loadNpmTasks("grunt-contrib-concat");
grunt.loadNpmTasks("grunt-contrib-uglify");
grunt.loadNpmTasks("grunt-contrib-copy");
grunt.loadNpmTasks("grunt-contrib-connect");
grunt.registerTask("default",["clean","jshint","concat","uglify","copy"]);
};