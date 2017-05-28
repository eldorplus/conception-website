import github from '../github'

export default {
    path: '',
    label: 'Liens',
    name: 'links',
    type: 'dropdown',
    children: [ github ],
    meta: {
        requiresGuest: true,
        showProgressBar: true
    }
}
