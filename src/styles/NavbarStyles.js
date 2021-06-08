import sizes from './mediaQueries';

const styles = {
    Navbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '6vh',
    },
    logo: {
        marginRight: '1rem',
        padding: '0 0.8rem',
        fontSize: '1.1rem',
        backgroundColor: '#eceff1',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        '& a': {
            textDecoration: 'none',
            color: 'black'
        },
        [sizes.down('xs')]: {
            /* display: 'none' */
        }
    },
    slider: {
        width: '21rem',
        margin: '0 0.7rem',
        display: 'inline-block',
        '& .rc-slider-rail': {
            height: '0.5rem'
        },
        '& .rc-slider-track': {
            backgroundColor: 'transparent'
        },
        '& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover': {
            backgroundColor: 'green',
            outline: 'none',
            border: '2px solid green',
            boxShadow: 'none',
            width: '0.8rem',
            height: '0.8rem',
            marginLeft: '-7px',
            marginTop: '-3px'
        },
        [sizes.down('lg')]: {
            width: '12rem'
        },
        [sizes.down('md')]: {
            width: '11rem'
        },
        [sizes.down('sm')]: {
            width: '9rem'
        },
    },
    selectContainer: {
        marginLeft: 'auto',
        marginRight: '1rem'
    }
}

export default styles;