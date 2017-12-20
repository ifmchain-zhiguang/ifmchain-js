var vote = {
    type: "object",
    properties: {
        secret: {
            type: "string",
            minLength: 1
        },
        secondSecret: {
            type: "string"
        },
        publicKey: {
            type: "string",
            format: "publicKey"
        },
        multisigAccountPublicKey: {
            type: "string",
            format: "publicKey"
        },
        fee: {
            type: 'string',
            format: 'ibtCurrency'
        },
        asset: {
            type: "object",
            format: "votesAsset"
        }
    },
    required: ["secret", "fee", "asset"]
}

module.exports = vote;