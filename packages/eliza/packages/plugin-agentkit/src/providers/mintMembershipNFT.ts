import { z } from "zod";
import { ActionProvider, WalletProvider, Network, CreateAction } from "@";

const customSignMessage = customActionProvider<EvmWalletProvider>({
    // wallet types specify which providers can use this action. It can be as generic as WalletProvider or as specific as CdpWalletProvider
    name: "sign_message",
    description:
        "Sign arbitrary messages using EIP-191 Signed Message Standard hashing",
    schema: z.object({
        message: z.string().describe("The message to sign"),
    }),
    invoke: async (walletProvider, args: any) => {
        const { message } = args;
        const signature = await walletProvider.signMessage(message);
        return `The payload signature ${signature}`;
    },
});

export const SignMessageSchema = z.object({
    message: z.string().describe("The message to sign. e.g. `hello world`"),
});

class MyActionProvider extends ActionProvider<WalletProvider> {
    constructor() {
        super("my-action-provider", []);
    }

    @CreateAction({
        name: "my-action",
        description: "My action description",
        schema: MyActionSchema,
    })
    async myAction(args: z.infer<typeof MyActionSchema>): Promise<string> {
        return args.myField;
    }

    supportsNetwork = (network: Network) => true;
}

export const myActionProvider = () => new MyActionProvider();
