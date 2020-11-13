var CONFIG = {
  // your website's title
  document_title: "ECMAScript 6入门",

  // index page
  index: "docs/README.md",

  // sidebar file
  sidebar_file: "docs/sidebar.md",

  // where the docs are actually stored on github - so you can edit
  base_url: "https://github.com/ruanyf/es6tutorial/edit/gh-pages",

  // where we want to search something from eht doc based on github.com
  search_url:"https://github.com/cosmos-sunshine/python-tools/search?utf8=✓&q=" 
};

// **************************
// DON'T EDIT FOLLOWING CODES
// **************************

addConfig(ditto, CONFIG);

function addConfig(obj, conf) {
  Object.keys(conf).forEach(function (key) {
    obj[key] = conf[key];
  });
}

ditto.run();
