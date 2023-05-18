import {
    createTheme,
    ThemeProvider
} from "@mui/material";

const colorTheme = createTheme({
    palette: {
        primary: {
            main: '#FFFFFF'
        },
        secondary: {
            main: '#213A8F'
        }
    }
});

const auberguetsTheme = createTheme(colorTheme, {});

export default function AuberguetsTheme(props) {
    return (
        <ThemeProvider theme={auberguetsTheme}>
            {props.children}
        </ThemeProvider>
    );
}