
import ConversationDetail from "@/app/components/inbox/ConversationDetail";
import { getAccessToken, getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import { UserType } from "../page";


export type MessageType = {
    id: string, 
    name: string;
    body: string;
    conversationId: string;
    sent_to: UserType;
    created_by: UserType;   
}


const ConversationDetailPage = async ({params}:{params: Promise<{id:string}>}) =>{

    const { id } = await params;

    const userId = await getUserId();

    const token = await getAccessToken();


    if (!userId) {
        return (
            <main className="max-w-[1500px] max-auto px-6 py-12">
                <p>
                    You need to be authenticated...
                </p>
            </main>
        );
    } 

    const response = await apiService.get(`/api/chat/${id}/`);

    const conversation = response.conversation;
    const messages = response.messages;

    return (
       <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <h1 className="my-6 text-2xl">
                <ConversationDetail 
                    userId={userId}
                    token={token}
                    conversation={conversation}
                    messages={messages}
                />
            </h1>
       </main>
    );
}

export default ConversationDetailPage;