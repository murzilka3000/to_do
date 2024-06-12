import Profile from "../components/screens/profile/Profile"

export type routesType = {
    component: any,
    path: string
}

export const routes: routesType[] = [
    {
        component: Profile,
        path: '/'
    }
]