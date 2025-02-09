import { PrivyClient } from "@privy-io/server-auth";

export const privy = new PrivyClient(
  "cm6wpd0yz003vc2ja1wb34hhq",
  "3yBBKF7eRYGYw6vPdRhb55MJpuFaiKbBDDy44hmwca5AQ3Jgxmo4rVUZ31qb5qa986rjQwd72vLLc4Y1BWvg2QXB",
  {
    walletApi: {
      authorizationPrivateKey:
        "wallet-auth:MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgssKvGClpbSWmf8TvMEVzn1/k08bYp9p4ywF2n5grxPChRANCAAT30I72xDLwrsI4wdSKA+0nj7qRHxeJ7aWqfEVTcGSesc+5uTMcXxKMZ/8eFY970vwEJ6E2RcVFsTmXfbnkswGN",
    },
  }
);

export async function createWallet() {
  const wallet = await privy.walletApi.create({
    chainType: "ethereum",
  });

  return wallet;
}

export async function getWallet(id: string) {
  const wallet = await privy.walletApi.getWallet({ id });

  return wallet;
}
