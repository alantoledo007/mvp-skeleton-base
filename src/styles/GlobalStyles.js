import { createGlobalStyle } from 'styled-components';
import InterBlack from '@/assets/fonts/Inter/Inter-Black.ttf';
import InterBold from '@/assets/fonts/Inter/Inter-Bold.ttf';
import InterExtraBold from '@/assets/fonts/Inter/Inter-ExtraBold.ttf';
import InterExtraLight from '@/assets/fonts/Inter/Inter-ExtraLight.ttf';
import InterLight from '@/assets/fonts/Inter/Inter-Light.ttf';
import InterMedium from '@/assets/fonts/Inter/Inter-Medium.ttf';
import InterRegular from '@/assets/fonts/Inter/Inter-Regular.ttf';
import InterSemiBold from '@/assets/fonts/Inter/Inter-SemiBold.ttf';
import InterThin from '@/assets/fonts/Inter/Inter-Thin.ttf';

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: InterBlack;
        src: local('InterBlack'), url(${InterBlack}) format('truetype');
    }
    @font-face {
        font-family: InterBold;
        src: local('InterBold'), url(${InterBold}) format('truetype');
    }
    @font-face {
        font-family: InterExtraBold;
        src: local('InterExtraBold'), url(${InterExtraBold}) format('truetype');
    }
    @font-face {
        font-family: InterExtraLight;
        src: local('InterExtraLight'), url(${InterExtraLight}) format('truetype');
    }
    @font-face {
        font-family: InterLight;
        src: local('InterLight'), url(${InterLight}) format('truetype');
    }
    @font-face {
        font-family: InterMedium;
        src: local('InterMedium'), url(${InterMedium}) format('truetype');
    }
    @font-face {
        font-family: InterRegular;
        src: local('InterRegular'), url(${InterRegular}) format('truetype');
    }
    @font-face {
        font-family: InterSemiBold;
        src: local('InterSemiBold'), url(${InterSemiBold}) format('truetype');
    }
    @font-face {
        font-family: InterThin;
        src: local('InterThin'), url(${InterThin}) format('truetype');
    }
    * {
        box-sizing: border-box;
        padding:0;
        margin:0;
    }

    body {
        background-color: #f1f1f1;
        font-family: InterRegular, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-size: 1rem;
    }

    a {
        color: inherit;
        text-decoration: none;
        font-family: InterSemiBold;
        :hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }

    .route-wrapper {
        position: relative;
    }

    .route-wrapper > div {
        position: absolute;
    }

    textarea:focus, input:focus{
        outline: none;
    }
`;

export default GlobalStyles;
