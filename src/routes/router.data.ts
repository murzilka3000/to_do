import Inbox from "../components/screens/inbox/Inbox"
import Messages from "../components/screens/messages/Messages"
import Profile from "../components/screens/profile/Profile"
import Search from "../components/screens/search/Search"
import Today from "../components/screens/today/Today"

export type routesType = {
    component: any,
    path: string
}

export const routes: routesType[] = [
    {
        component: Profile,
        path: '/'
    },
    {
        component: Inbox,
        path: '/inbox'
    },
    {
        component: Today,
        path: '/today'
    },
    {
        component: Messages,
        path: '/messages'
    },
    {
        component: Search,
        path: '/search'
    },
]