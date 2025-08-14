import { FileText } from "lucide-react";
import { UserMessage } from "./user-message";

const UNCLE_IROH_AVATAR_IMG_LINK_PLACEHOLDER: string = "https://preview.redd.it/i-dont-remember-if-it-was-ever-mentioned-but-how-did-iroh-v0-tnt0gpu0xhy81.jpg?width=640&crop=smart&auto=webp&s=a97415b1f36a10f31bfb66a0b85d7da124b3a583"; // prettier-ignore

export function ChatConversationContainer() {
    return (
        <div className="py-2 bg-neutral-950 h-screen w-[384px] fixed">
            <section className="flex flex-col gap-12 h-full bg-neutral-900 rounded-lg border border-neutral-800 pl-6 pr-4 py-6 text-white">
                <UserMessage
                    message="Create flashcards based on this content."
                    imgSrc={UNCLE_IROH_AVATAR_IMG_LINK_PLACEHOLDER}
                    imgAlt="Profile picture" // TODO: Implement with user's name later
                    contentSources={[{ label: "Text", icon: <FileText /> }]}
                />
            </section>
        </div>
    );
}
