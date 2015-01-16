// allows to debug this environment by adding all the source files
// to cmdi maker instead of build files.
// repo should be available as http source for this to work
// and the correct url_prefix must be given below.
// in cmdi maker, call addFile(<this_file>)
var url_prefix = "http://localhost:88/";

var source_scripts = [
	"src/js/eldp_main.js",
	"src/js/eldp_LanguagePacks.js",
	"src/js/eldp_generator.js",
	"src/js/eldp_forms.js",
	"src/js/eldp_resources.js",
	"src/js/eldp_actors.js",
	"src/js/eldp_actor_languages.js",	
	"src/js/eldp_sessions.js",
	"src/js/eldp_sessions_rendering.js",
	"src/js/eldp_output.js",
	"src/js/eldp_repair.js"
];

var source_stylesheet = "src/css/layout-eldp.css";

addFiles(source_scripts, url_prefix);
addFiles(source_stylesheet, url_prefix);
