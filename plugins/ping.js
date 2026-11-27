export default {
  name: "ping",
  description: "Controlla la velocità del bot",

  async execute(sock, msg) {
    const start = Date.now();

    await sock.sendMessage(msg.key.remoteJid, {
      text: `👑 MORTEX OVERLORD\n\n⚡ Pong!\n🚀 Sistema operativo.`
    }, { quoted: msg });
  }
};
