module.exports = {
    use_sessions: true,
    mysql: require('../../config').mysql,
    token: {
        token_algorithm: 'SHA512',
        digest: 'HEX',
        secret: "changemetosomethingbettrethanthis@}A~~@@S@D?X|"
    }
}