const {
  Connection,
  Keypair,
  PublicKey,
  SystemProgram,
  Transaction,
  sendAndConfirmTransaction,
} = require('@solana/web3.js');

async function transferSol() {
  try {
    const rpcUrl = 'https://api.devnet.solana.com';

    const connection = new Connection(rpcUrl, 'confirmed');

    const fromAccount = Keypair.generate();

    const fromAccountInfo = await connection.getAccountInfo(
      fromAccount.publicKey,
    );
    console.log(
      `Gönderen Hesap Bakiyesi: ${fromAccountInfo?.lamports} lamports`,
    );

    const toAccount = new PublicKey('ALICI_HESAP_ADRESI');
    const lamports = 1000000;

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: fromAccount.publicKey,
        toPubkey: toAccount,
        lamports,
      }),
    );

    const signature = await sendAndConfirmTransaction(connection, transaction, [
      fromAccount,
    ]);

    console.log(`İşlem Başarılı! İşlem İmzası: ${signature}`);
  } catch (error) {
    console.log(error);
  }
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return 'https://solscan.io/tx/47DVBrxue5ZxKMNmhQYCnB2seN3v3MRHx2ZY1bnAo2y861eab439ULYzpRKif6UD8P5WJxRcWMEkfLy8xt1NqJen';
}

export default transferSol();
