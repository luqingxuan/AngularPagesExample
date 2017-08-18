let entries = [];

entries.push({
    id: 'angular',
    contains: ['@angular/common', '@angular/core', '@angular/compiler']
});

entries.push({
    id: 'angular-platform',
    contains: ['@angular/forms', '@angular/http',
        '@angular/platform-browser', '@angular/platform-browser-dynamic',
        '@angular/router'
    ]
});

module.exports = entries;
