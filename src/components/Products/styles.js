import {makeStyles} from '@mui/styles';

export default makeStyles((theme) => ({
    heading1: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '35px',
        lineHeight: '42px',
        color: 'rgba(255, 255, 255, 0.87)',
        textShadow: '0px 4px 4px rgb(0 0 0 / 25%)',
    },
    heading2: {
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '25px',
        lineHeight: '30px',
        color: 'rgba(255, 255, 255, 0.5)',
        textShadow: '0px 4px 4px rgb(0 0 0 / 25%)',
        marginBlock: '30px',
    },
    heading3 : {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '23px',
        color: '#FFFFFF',
        marginBlock: "20px"
    },
    head: {
        paddingInline: '55px'
    },
    categoryContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBlock: "20px 65px",
    },
    nextArrow: {
        marginInline: '5px',
        paddingInline: '10px',
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'end',
    },
    break: {
        border: 'none',
        height: '1.2px',
        background: '#A5A5A5',
        borderRadius: '5px',
        marginBlock: "15px",
    },
    cProducts: {
        background: '#131313',
        borderRadius: '15px',
        color: 'aliceblue',
        padding: '20px',  
        flexWrap: 'nowrap',
        overflow: 'auto',
    },
    product: {
        background: '#232323',
        borderRadius: '4.68775px',
        padding: '10px',
        // width: "max-content"
    },
    pDetails: {
        position: "relative",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pName: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '15px',
        lineHeight: '18px',
        color: '#FFFFFF',
        marginBlock: "20px"
    },
    pBrand: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '13px',
        lineHeight: '16px',
        color: "rgba(255, 255, 255, 0.6)",
        marginBlock: "20px"
    },
    signDolor: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '19px',
        color: 'rgba(255, 255, 255, 0.8)',
        marginRight: "5px"
    },
    pPrice: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '13px',
        lineHeight: '16px',

        color: '#FFFFFF',
    },
    date1: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '11px',
        lineHeight: '13px',

        color: 'rgba(255, 255, 255, 0.6)',
    },
    date2: {
        fontWeight: '500',
        fontSize: '13px',
        lineHeight: '16px',
    },
    pImage: {
        borderRadius: '5px',
        width: '70px',
        height: '70px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    pLocation: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '13px',
        lineHeight: '16px',
        color: 'rgba(255, 255, 255, 0.6)',
        marginBlock: '10px',
    },
}))