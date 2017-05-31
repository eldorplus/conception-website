import GitHub from '../github';
import Facebook from '../facebook';
import LinkedIn from '../linkedin';

export default {
    path: '',
    label: 'Liens',
    name: 'links',
    type: 'dropdown',
    children: [ GitHub, Facebook, LinkedIn ],
    meta: {
        requiresGuest: true,
        showProgressBar: true
    }
}
