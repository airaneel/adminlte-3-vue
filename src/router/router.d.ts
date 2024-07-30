import 'vue-router'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

declare module 'vue-router' {
    interface RouteMeta {
        title?: string
        ruName?: string
        requiresAuth?: boolean
        requiresUnauth?: boolean
        icon?: IconDefinition | string
        isActive?: boolean
    }
}