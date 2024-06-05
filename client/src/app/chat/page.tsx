'use server'
import {Textarea} from '@/components/ui/textarea'

type ChatType = {
    sender: string
    message: string
}

const chat: ChatType[] = [
    {
        sender: 'Ivan',
        message: 'Hello, how can I help you today?'
    },
    {
        sender: 'You',
        message: 'I need help with my code.'
    }
]

export default async function ChatPage() {
    return (
        <main className='page'>
            <form
                // onSubmit={handleSubmit}
                className='flex flex-col gap-4'
                acceptCharset='utf-8'
                // action='/api/chat'
            >
                <h1
                    className='text-4xl font-bold'
                >
                    Chat with Ivan.AI
                </h1>
                {/* chat box section */}
                <section
                    className='flex flex-col gap-4 border-2 border-gray-200 p-4 rounded-lg h-96 overflow-y-auto'
                >
                    {chat.map((message, index) => {
                        return (
                            <div
                                key={index}
                                className='flex flex-col gap-2'
                            >
                                <h2
                                    className='font-bold'
                                >
                                    {message.sender}
                                </h2>
                                <p
                                    className='bg-gray-700 p-2 rounded-lg'>
                                    {message.message}
                                </p>
                            </div>
                        )

                    })}
                </section>
                <section
                    className='flex flex-col gap-4'
                >
                    <Textarea
                        name='message'
                        placeholder='Type your message here...'
                    />
                    <button
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                        type='submit'
                    >
                        Send
                    </button>
                </section>
            </form>
        </main>
    )
}