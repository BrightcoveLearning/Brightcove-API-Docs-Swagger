var gulp = require('gulp'),
    swaggerGenerator = require('gulp-apidoc-swagger');

gulp.task('swaggerGenerator', function(){
          swaggerGenerator.exec({
            src: "v1/src/",
            dest: "v1/doc/"
          });
});
