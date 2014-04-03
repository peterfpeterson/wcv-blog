Requirements:
 * nanoc
 * adsf
 * kramdown

To look at it
 * `nanoc compile` or `bundle exec nanoc compile`
 * `nanoc view`
 * point a browser at http://localhost:3000/

Mavericks with Xcode 5.1
------------------------
`sudo ARCHFLAGS=-Wno-error=unused-command-line-argument-hard-error-in-future bundle install`

This is because of an issue with 
[LLVM treating unrecognized command-line options as errors](https://stackoverflow.com/questions/22352838/ruby-gem-install-json-fails-on-mavericks-and-xcode-5-1-unknown-argument-mul)