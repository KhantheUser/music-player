export interface Background {
    id:number;
    backgroundSrc : string;
    backMenuColor:string;
    navbarColor:string;
    playerColorBack:string;
    playerColorText:string;
    textNavbarColor:string;
    hoverNavbarColor:string,
    textMainColor:string;
    textSecondColor:string
    
}
const backgroundTheme: Background[] = [
    {
        id:1,
        backgroundSrc:'linear-gradient(to right,rgba(23,15,35,0.7),rgba(142,28,135,0.5)), url(https://tophinhanhdep.com/wp-content/uploads/2021/10/Alan-Walker-Wallpapers.jpg)',
        navbarColor:'linear-gradient(#191125ab,#20192c)',
        backMenuColor:'rgba(35,27,46,0.8)',
        playerColorBack:'#130c1c',
        playerColorText:'#fff',
        textNavbarColor:'#9b4de0',
        hoverNavbarColor:'#2f2739',
        textMainColor:'#f1f1f1',
        textSecondColor:'#909dbd'

    },
    {
        id:2,
        backgroundSrc:'url(https://coolhdwall.com/storage/2212/blackpink--jennie--hd-wallpaper-1920x1080-724.jpg)',
        navbarColor:'linear-gradient(#191125ab,#20192c)',
        backMenuColor:'rgba(0,0,0,0.5)',
        playerColorBack:'rgb(187,185,196)',
        playerColorText:'#32323d',
        textNavbarColor:'#9b4de0',
        hoverNavbarColor:'rgb(168,166,176)',
        textMainColor:'#32323d',
        textSecondColor:'#696969'

    }
  ];