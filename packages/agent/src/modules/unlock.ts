import { WalletClient, zeroAddress } from "viem";
import { PublicLockV15 } from "@unlock-protocol/contracts";

export async function purchaseLock(
  client: WalletClient,
  lockAddress: `0x${string}`,
  recipientAddress: `0x${string}`
) {
  const tx = await client.writeContract({
    address: lockAddress,
    abi: PublicLockV15.abi,
    functionName: "purchase",
    arguments: [
      [1],
      [recipientAddress],
      [recipientAddress],
      [zeroAddress],
      [[]],
    ],
  });

  return tx;
}
