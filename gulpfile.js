const { argv } = require('yargs');
const gulp = require('gulp');
const template = require('gulp-template');

gulp.task('createReducer', () => {
  const { name } = argv;

  if (name && name.length > 0) {
    const uppercaseName = name.toUpperCase();
    const destinationPath = `src/state/${name}`;

    gulp.src('templates/actions.js')
      .pipe(template({ name, uppercaseName }))
      .pipe(gulp.dest(destinationPath));

    gulp.src('templates/reducers.js')
      .pipe(template({ name, uppercaseName }))
      .pipe(gulp.dest(destinationPath));

    gulp.src('templates/types.js')
      .pipe(template({ name, uppercaseName }))
      .pipe(gulp.dest(destinationPath));

    return;
  }

  console.log('******************************************');
  console.log('* ERROR: You must provide a reducer name *');
  console.log('* HINT:  gulp createReducer --name login *');
  console.log('******************************************');
});
