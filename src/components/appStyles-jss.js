import { fade } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
const drawerWidth = 240;
export const styles = (theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        marginRight: theme.spacing(1),
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
        padding: theme.spacing(3)
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(2),
    },
    sort: {
        marginTop: theme.spacing(1.5),
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
    },
    cardRoot: {
        minWidth: 190,
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(2)
    },
    cardMedia: {
        height: 300,
        backgroundSize: 'contain'
    },
    cardLayout: {
        display: 'flex',
        // justifyContent: 'space-beetween',
        flexWrap: 'wrap',
        marginBottom: theme.spacing(5)
    },
    productRates: {
        display: 'flex',

    },
    displayPrice: {
        fontWeight: 'bold'
    },
    actualPrice: {
        textDecoration: 'line-through',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    },
    discount: {
        color: green[500],
        fontWeight: 'bold'
    },
    cardAction: {
        justifyContent: 'center'
    },
    cart: {
        margin: theme.spacing(3),
        padding: theme.spacing(2),
        display: 'flex',
        justifyContent: 'space-between'
    },
    cartImage: {
        height: 100,
        width: 80
    },
    cartDesc: {
        margin: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    stepper: {
        display: 'flex',
    },
    cartPricing: {
        margin: theme.spacing(3)
    },
    borderBottom: {
        borderBottomWidth: 2,
    },
    price: {
        marginLeft: 'auto'
    },
    priceBreakDown: {
        marginTop: theme.spacing(2)
    },
    total: {
        fontWeight: 'bold'
    },
    emptyScreen: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: theme.spacing(5),
        flexDirection: 'column'
    }



})