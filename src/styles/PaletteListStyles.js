import sizes from './mediaQueries';
import bg from './bg.svg';

const styles = {
    '@global': {
        '.fade-exit': {
            opacity: 1
        },
        '.fade-exit-active': {
            opacity: 0,
            transition: 'opacity 500ms ease-out'
        }
    },
    root: {
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        /* Background by svgbackgrounds.com */
        backgroundColor: '#000333',
        backgroundImage: `url(${bg})`,
        overflow: 'scroll'
    },
    container: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap',
        [sizes.down('lg')]: {
            width: '70%'
        }
    },
    nav: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        color: 'white',
        alignItems: 'center',
        '& a': {
            color: 'white'
        }
    },
    heading: {
        fontSize: '2rem'
    },
    palettes: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 31.8%)',
        gridGap: '1.5rem',
        [sizes.down('md')]: {
            gridTemplateColumns: 'repeat(2, 50%)',
        },
        [sizes.down('xs')]: {
            gridTemplateColumns: 'repeat(1, 100%)',
            gridGap: '1rem'
        }
    }
}

export default styles;