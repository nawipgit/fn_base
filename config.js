const os = require('os');
const Ifaces = os.networkInterfaces();

module.exports = {
    ip: () => {
        let ip = '';
        Object.keys(Ifaces).forEach(function (ifname) {
            Ifaces[ifname].forEach(function (iface) {
                if ('IPv4' !== iface.family || iface.internal !== false) {
                    return;
                } else {
                    ip = iface.address;
                }
            });
        });
        return ip;
    },
    port: 3000,
    keys: ['BOl6unUY1ErQIPVRcvzEsrlNpHjKvx9vW1YuIq1eOXkpIPlJAjSk8RBHcRpvKemFSqTSNrekXQvB3AmqnzipZ2GRHs78eutNYsYlVDejpxefwrzC1P6siAVZbRIV5wAa', '4WSBvr3UcAejFYjk8ZXEvNRyJxk3R7IMooMS6EIhyyNpW2PpG1qmPsTkW5MFh9TFhtEzSxPNAViPIhreJOg4yJ3aFiNVrlaayU2NdoPQCrXO6T612OpEetPjyz5C3PSo'],
    session: {
        key: "u:sess",
        maxAge: 3600 * 1000 * 1,
        autoCommit: true,
        overwrite: true,
        httpOnly: true,
        signed: true,
        rolling: false,
        renew: false,
        sameSite: null,
    },
    cors: {
        origin: "*",
        allowMethods: ["POST", "GET"],
        allowHeaders: ["Content-Type", "Accept"]
    },
    bodyparser: {
        enableTypes: ['json', 'form', 'text', 'xml', 'csv'],
        formLimit: "100mb",
        jsonLimit: "100mb",
        xmlLimit: "100mb",
        textLimit: "100mb",
        onerror: (err, ctx) => {
            console.log(err);
            ctx.throw('error', 422);
        }
    },
    json: {
        pretty: false,
        param: 'pretty'
    },
    static: './frontend'
}