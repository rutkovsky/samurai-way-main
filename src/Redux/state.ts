export type PostType = {
    id: number,
    postMessage: string,
    likesCount: number
}

export type DialogsType = {
    id: number,
    name: string
}

export type MessagesType = {
    id: number,
    message: string
}

export type ProfilePageType = {
    postData: PostType[]
}

export type DialogsPageType = {
    dialogsData: DialogsType[],
    messagesData: MessagesType[]
}

type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
}

export let state = {
    profilePage: {
        postData: [
            {id: 1, postMessage: 'Hi, how are you?', likesCount: 12},
            {id: 2, postMessage: 'Hello!', likesCount: 4},
            {id: 3, postMessage: 'It is my first post!', likesCount: 1}
        ]
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Ruslan'},
            {id: 2, name: 'Katya'},
            {id: 3, name: 'Nina'},
            {id: 4, name: 'Yaroslav'},
            {id: 5, name: 'Balu'}
        ],
        messagesData: [
            {id: 1, message: 'Hi!'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'ok)'},
            {id: 4, message: 'Let\'s go!'},
            {id: 5, message: 'Waff'}
        ]
    }
}