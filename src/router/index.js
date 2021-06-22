import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import User from '../views/user/User.vue'
import UserAdd from '../views/user/FormAdd.vue'
import UserEdt from '../views/user/FormEdit.vue'
import Task from '../views/task/Task.vue'
import TaskAdd from '../views/task/FormAdd.vue'
import TaskEdit from '../views/task/FormEdit.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/usuario',
    name: 'User',
    component: User
  },
  
  {
    path: '/usuario-adicionar', 
    component: UserAdd
  },
  
  {
    path: '/usuario-editar/:id', 
    name: 'userEdit',
    component: UserEdt,
    props: true
  },
  {
    path: '/tarefa',
    name: 'Task',
    component: Task
  },
  {
    path: '/tarefa-adicionar', 
    component: TaskAdd
  },
  
  {
    path: '/tarefa-editar/:id', 
    name: 'taskEdit',
    component: TaskEdit,
    props: true
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
