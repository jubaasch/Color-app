import { drawerWidth } from '../constants';
import sizes from './mediaQueries';

const styles = theme => ({
    root: {
        display: 'flex'
    },
    hide: {
        display: "none"
    },
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20
    },
    navBtns: {
        marginRight: '1rem',
        [sizes.down('xs')]: {
            marginRight: '0.2rem'
        }
    },
    button: {
        margin: '0 0.5rem',
        [sizes.down('md')]: {
            marginRight: '0.3rem',
            padding: '0.2rem 0.6rem',
            fontSize: '0.8rem'
        },
        [sizes.down('sm')]: {
            marginRight: '0.2rem',
            padding: '0.15rem 0.6rem',
            fontSize: '0.7rem'
        },
        [sizes.down('xs')]: {
            marginRight: '0.1rem',
            marginBottom: '0.1rem',
            padding: '0.1rem 0.5rem',
            fontSize: '0.7rem'
        }
    },
    btnLink: {
        textDecoration: 'none'
    },
    title: {
        [sizes.down('sm')]: {
            display: 'none'
        }
    }
});

export default styles;