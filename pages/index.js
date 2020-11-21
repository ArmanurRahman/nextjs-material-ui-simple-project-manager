import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

const ProjectManager = () => {
    const theme = useTheme();
    const classes = useStyles();
    return (
        <Grid container direction='column'>
            <Grid item>
                <Typography variant='h2'>Projects</Typography>
            </Grid>
        </Grid>
    );
};

export default ProjectManager;
