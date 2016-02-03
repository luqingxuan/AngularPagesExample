var server = 'http://localhost:3000/';

module.exports = {
    server: server,
    resources: {
        test: server + 'test{/id}'
    }
};