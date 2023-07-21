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
            main: '#4c78a7'
        }
    }
});

const auberguetsTheme = createTheme(colorTheme, {
    components: {
        MuiBottomNavigation: {
            styleOverrides: {
                // Personnalisez les styles du BottomNavigationAction
                root: {
                    // Ajoutez ici vos styles personnalisés
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: '100%',
                    backgroundColor: '#4c78a7',
                    zIndex: 100,
                    height: '80px'
                },
            }
        },
        MuiBottomNavigationAction: {
            styleOverrides: {
                root: {
                    paddingBottom: 1,
                },
                label: {
                    fontSize: '0.85rem',
                }
            }
        },
    }
});

export default function AuberguetsTheme(props) {
    return (
        <ThemeProvider theme={auberguetsTheme}>
            {props.children}
        </ThemeProvider>
    );
}