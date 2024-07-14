// utils/useTreeView.ts
import { reactive, onMounted } from 'vue'
import Treeview from '@/utils/adminScript/treeview'

export function useTreeView(config: { animationSpeed: number, accordion: boolean }) {
  const TreeViewPlugin = reactive({
    element: null as HTMLElement | null,
    treeview: null as Treeview | null,
  })

  const initializeTreeview = () => {
    TreeViewPlugin.element = document.getElementById('treeview')
    if (TreeViewPlugin.element) {
      TreeViewPlugin.treeview = new Treeview(TreeViewPlugin.element, config)
      console.log('Treeview instance created')
    }
  }

  onMounted(initializeTreeview)

  return TreeViewPlugin
}
