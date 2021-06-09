import sizes from './mediaQueries';
import chroma from 'chroma-js';

const styles = {
    root: {
        width: '20%',
        height: '25%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-4px',
        '&:hover svg': {
            color: 'rgba(255,255,255,0.9)',
            transform: 'scale(1.5)'
        },
        [sizes.down('lg')]: {
            width: '25%',
            height: '20%'
        },
        [sizes.down('md')]: {
            width: '50%',
            height: '10%'
        },
        [sizes.down('sm')]: {
            width: '100%',
            height: '5%'
        }
    },
    boxContent: {
        position: 'absolute',
        padding: '10px',
        width: '100%',
        left: '0px',
        bottom: '0px',
        color: props => chroma(props.color).luminance() <= 0.07 ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '0.8rem',
        display: 'flex',
        justifyContent: 'space-between',
        [sizes.down('sm')]: {
            bottom: '1rem'
        },
        '& svg': {
            color: props => chroma(props.color).luminance() <= 0.07 ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)'
        }
    },
    deleteIcon: {
        fontSize: '1rem',
        color: 'rgba(0,0,0,0.5)',
        transition: 'all 0.3s ease-in-out'
    }
};

export default styles;