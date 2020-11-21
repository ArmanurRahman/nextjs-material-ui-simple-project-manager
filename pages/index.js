import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AddIcon from "@material-ui/icons/Add";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Label } from "@material-ui/icons";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    formLabel: {
        color: theme.palette.primary.main,
        fontWeight: 700,
    },
}));

const ProjectManager = () => {
    const theme = useTheme();
    const classes = useStyles();
    console.log(theme.typography.formLabel);
    console.log(classes.formLabel);
    const [websideChecked, setWebsiteChecked] = useState(false);
    const [iosChecked, setIosChecked] = useState(false);
    const [androidChecked, setAndroidChecked] = useState(false);
    const [softwareChecked, setSoftwareChecked] = useState(false);
    return (
        <Grid container direction='column'>
            <Grid item style={{ marginLeft: "5em", marginTop: "2em" }}>
                <Typography variant='h2'>Projects</Typography>
            </Grid>
            <Grid item>
                <TextField
                    variant='standard'
                    placeholder='Search Project details or create new entry'
                    style={{ width: "35em", marginLeft: "5em" }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='end'>
                                <AddIcon color='primary' />
                            </InputAdornment>
                        ),
                    }}
                />
            </Grid>
            <Grid item>
                <FormGroup style={{ marginLeft: "5em", marginTop: "2em" }} row>
                    <FormControlLabel
                        style={{ marginRight: "5em" }}
                        control={
                            <Switch
                                color='primary'
                                checked={websideChecked}
                                onChange={() =>
                                    setWebsiteChecked((prevstate) => !prevstate)
                                }
                            />
                        }
                        label='Websites'
                        labelPlacement='start'
                    />
                    <FormControlLabel
                        style={{ marginRight: "5em" }}
                        control={
                            <Switch
                                color='primary'
                                checked={iosChecked}
                                onChange={() =>
                                    setIosChecked((prevstate) => !prevstate)
                                }
                            />
                        }
                        label='iOS Apps'
                        labelPlacement='start'
                    />
                    <FormControlLabel
                        style={{ marginRight: "5em" }}
                        control={
                            <Switch
                                color='primary'
                                checked={androidChecked}
                                onChange={() =>
                                    setAndroidChecked((prevstate) => !prevstate)
                                }
                            />
                        }
                        label='Android Apps'
                        labelPlacement='start'
                    />
                    <FormControlLabel
                        style={{ marginRight: "5em" }}
                        control={
                            <Switch
                                color='primary'
                                checked={softwareChecked}
                                onChange={() =>
                                    setSoftwareChecked(
                                        (prevstate) => !prevstate
                                    )
                                }
                            />
                        }
                        label='Custom Software'
                        labelPlacement='start'
                    />
                </FormGroup>
            </Grid>
        </Grid>
    );
};

export default ProjectManager;
