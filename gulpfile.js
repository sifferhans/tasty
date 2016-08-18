const gulp = require('gulp');
const fs = require('fs');

fs.readdirSync(__dirname + '/gulp').forEach(function(file){
	if(file.includes('.js')){
		require('./gulp/' + file);
	}
});

gulp.task('dev',['watch:sass']);
