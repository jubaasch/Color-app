import { drawerWidth } from '../constants';

const styles = theme => ({
    root: {
        display: "flex",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth,
        display: 'flex',
        alignItems: 'center'
    },
    drawerHeader: {
        width: '100%',
        display: "flex",
        alignItems: "center",
        padding: "0 8px",
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
    },
    content: {
        flexGrow: 1,
        height: "calc(100vh - 64px)",
        padding: 0,
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: -drawerWidth
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    },
    container: {
        width: '70%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    buttons: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    button: {
        width: '48%',
        fontSize: '0.7rem'
    },
    drawerTitle: {
        fontSize: '1.5rem'
    }
});

export default styles;