import { IconDefinition, IconName } from "@fortawesome/fontawesome-svg-core"

export interface MenuItem {
    name: string
    path?: string
    icon?: IconDefinition | IconName
    children?: MenuItem[]
}