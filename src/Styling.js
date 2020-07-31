import {makeStyles} from '@material-ui/core';
import Image from './res/bg.jpg';
import Image2 from './res/user.jpg';

const drawerWidth = 220;
const useStyles = makeStyles((theme)=>({
    root:{
        display: 'flex'
    },
    appBar:{
        [theme.breakpoints.up('md')]:{
            width: `calc(100% - ${drawerWidth}px)`
        },
        backgroundColor: "white"
    },
    menuButton:{
        [theme.breakpoints.up('md')]:{
            display: 'none'
        }
    },
    toolbar: theme.mixins.toolbar,
    IconColor:{
        color: "white"
    },
    drawer:{
        [theme.breakpoints.up('md')]:{
            width: drawerWidth,
            flexShrink: 0
        }
    },
    drawerPaper:{
        width: drawerWidth,
        background: 'rgb(0, 0, 0)'
    },
    divider:{
        backgroundColor: 'white'
    },
    mainHeader:{
        backgroundColor: "rgb(49, 49, 49)",
        padding: theme.spacing(2)   ,
        color: 'white'
    },
    listHeader: {
        padding: theme.spacing(3),
        color: 'white' 
    },
    content:{
        flexGrow: 1,
        padding: theme.spacing(0)
    },
    containers: {
        // background: "rgb(22, 55, 70)",
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(12),
        position: 'relative',
        background: `url('${Image}') no-repeat center center`,
        backgroundSize: 'cover'
    },
    overlay:{
        position: 'absolute',
        left: '0',
        top: '0',
        width: '100%!important',
        height: '100%',
        opacity: '0.4',
        backgroundColor: 'black'
    },
    title:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
        zIndex: '1'
    },
    mainTitle:{
        [theme.breakpoints.down('sm')] : {
            fontSize: '25px'
        }
    }, 
    cardIcon:{
        marginLeft: theme.spacing(3)
    },
    cardMain:{
        padding: theme.spacing(3)
    },
    cardHeader:{
        color: 'white',
        backgroundColor: 'rgb(100, 73, 115)'
    },
    cardHeader2:{
        color: 'white',
        backgroundColor: 'rgb(128, 188, 49)'
    },
    cardHeader3:{
        color: 'white',
        backgroundColor: 'rgb(165, 62, 18)'
    },
    cardHeader4:{
        color: 'white',
        backgroundColor: 'rgb(187, 144, 16)'
    },
    listIcon:{
        color: 'white',
        fontSize: '19px'
    },
    listText:{
        color: 'white',
        '&:hover' : {
            textDecoration: 'none',
            color: 'white'
        }
    },
    inputHolder:{
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
    },
    selectField:{
        width: '100%!important'
    },
    header:{
        paddingTop: theme.spacing(2)
    },
    headTitle:{
       [ theme.breakpoints.up('md')]:{
            marginLeft: theme.spacing(1),
        },
        marginLeft: theme.spacing(0),
        borderLeft: '5px solid blue'
    },
    submitBtn:{
        backgroundColor: 'rgb(128, 188, 49)',
        color: 'white',
        height: '3rem',
        '&:hover':{
            backgroundColor: 'rgb(113, 174,33)' 
        }
    },
    tableHolder:{
        [theme.breakpoints.up('md')]:{
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
        },
        paddingTop: theme.spacing(5),
    },
    paperHeading:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        backgroundColor: 'rgb(100, 73, 115)',
        color: 'white'
    },
    paperHeading2:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        color: 'white',
        backgroundColor: 'rgb(187, 144, 16)'
    },
    paperHeading3:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        color: 'white',
        backgroundColor: 'rgb(165, 62, 18)'
    },
    subHeading:{
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(6)
    },
    tableContainer:{
        maxHeight: 440
    },
    tableHead:{
        color: 'white',
        fontWeight: '700',
        backgroundColor: 'rgb(128, 188, 49)'
    },
    statCardHead:{
        backgroundColor: 'rgb(100, 73, 115)',
        color: 'white'        
    },
    correctCounter:{
        display: 'flex',
        justifyContent: 'center',
        fontSize: '19px'
    },
    formGrid:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center!important'
    },
    formField:{
        flexGrow: 1,
        marginLeft: theme.spacing(2),
        borderColor: 'green !important'
    },
    formHolder:{
        display: 'flex',
        justifyContent: 'center'
    },
    circleAvatar:{
        background: `url('${Image2}') no-repeat center center`,
        backgroundSize: 'contain',
        position: 'absolute',
        zIndex: 1,
        top: '70px'
    },
    formPaper:{
        position: 'relative',
        padding: theme.spacing(2),
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        margin: theme.spacing(10),
    },
    formButton:{
        backgroundColor: 'rgb(128, 188, 49)',
        color: 'white',
        height: '3rem',
        '&:hover':{
            backgroundColor: 'rgb(113, 174,33)'
        }
    },
    wrapper:{
        position: 'relative'
    },
    fabbtn:{
        position: 'absolute',
        top: -2,
        left: -2
    },
    fabHolder:{
        display: 'flex',
        flexDirection: 'row-reverse',
        position: 'relative',
        padding: 0
    },
    fabSub:{
        position: 'absolute',
        top: '-30px',
    }
}));

export default useStyles;