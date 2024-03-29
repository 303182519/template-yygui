'use strict';

exports.description = 'Create a YYGUI module.';

exports.notes = '';

exports.warnOn = '*';

exports.template = function(grunt, init, done) {



  init.process({type: 'cmd'}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('family','yygui'),
    init.prompt('author'),
    init.prompt('version', '1.0.0'),
    init.prompt('description'),
    init.prompt('repository'),
    init.prompt('homepage'),
    init.prompt('licenses', 'MIT')
  ], function(err, props) {

    var files = init.filesToCopy(props);

    props.varName = props.name.replace(/\-(\w)/g, function(all, letter){
      return letter.toUpperCase();
    });

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // All done!
    done();
  });
};