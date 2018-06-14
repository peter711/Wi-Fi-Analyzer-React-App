import { injectGlobal } from 'styled-components';
import LatoFont from './assets/fonts/Lato/Lato-Regular.ttf';

injectGlobal`

    @font-face {
        font-family: Lato;
        src: url('${LatoFont}')
    }

    html,
    body {
        height: 100%;
        width: 100%;
        padding: 0px;
        margin: 0px;
        font-family: 'Lato'
    }

    #app {
        min-height: 100%;
        min-width: 100%;
    }
` 