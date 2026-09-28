'use client';

import { useRouter } from "next/navigation";
import { ConversationType } from "@/app/inbox/page";
import CustomButton from "../forms/CustomButton";


interface ConversationProps{
    conversation: ConversationType;
    userId: string;
}


const Conversation: React.FC<ConversationProps> = ({
    conversation,
    userId
}) =>{

    const router = useRouter();
    const otherUser = conversation.users.find((user) => user.id != userId)

    return (
        <div className="px-6 py-4 border border-gray-300 rounded-xl cursor-pointer space-y-4">
            <p className="mb-6 text-xl">{otherUser?.name}</p>

            <p 
                onClick={()=> router.push(`/inbox/${conversation.id}`)}
                className="text-primary">
                Go to conversation
            </p>
        </div>
    );
}

export default Conversation;