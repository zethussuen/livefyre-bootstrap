var express = require('express');
var lessMiddleware = require('less-middleware');
var pubDir = __dirname + '/..';
var lfBootstrapFonts = __dirname + '/../lib/livefyre-bootstrap/src/fonts';

var app = express();

app.use(express.logger());

app.use(lessMiddleware({
    src: '/src/styles',
    dest: '/dist/styles',
    compress: false,
    force: true,
    root: pubDir,
    paths: ['lib/']
}));
app.use('/dev/fonts', express.static(lfBootstrapFonts));
app.use('/', express.static(pubDir));

app.listen(8080);