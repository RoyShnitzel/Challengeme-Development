import React from "react";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import PublicIcon from '@material-ui/icons/Public';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles((theme) => ({
    country: {
        marginTop: "60px",
        marginBottom: "10px",
        width: "320px",
    },
    city: {
        // marginTop: "80px",
        marginBottom: "20px",
        width: "320px",
    },
    birthDate: {
        // marginTop: "80px",
        marginBottom: "10px",
        width: "320px",
        appearance: "none",
        fontFamily: "Helvetica, arial, sans-serif",
        border:"transparent",
        borderBottom:"1.5px solid gray",
        "&:focus":{
            outline: "none",
        }

    },
    phoneNumber: {
        // marginTop: "80px",
        // marginBottom: "20px",
        width: "320px",
    },
}));
function PersonalDetails({ values, handleChange, prevStep, nextStep }) {
    const classes = useStyles();

    return (
        <div className="containerPersonalDetails">
            <FormControl className={classes.country}>
                <InputLabel style={{ color: "grey" }}>Country</InputLabel>
                <Input
                    type="text"
                    value={values.country}
                    required
                    onChange={handleChange("country")}
                    endAdornment={
                        <InputAdornment
                            style={{ opacity: "0.7" }}
                            position="end"
                        >
                            <PublicIcon />
                        </InputAdornment>
                    }
                />
            </FormControl>
            <FormControl className={classes.city}>
                <InputLabel style={{ color: "grey" }}>City</InputLabel>
                <Input
                    type="text"
                    value={values.city}
                    required
                    onChange={handleChange("city")}
                    endAdornment={
                        <InputAdornment
                            style={{ opacity: "0.7" }}
                            position="end"
                        >
                            <LocationCityIcon />
                        </InputAdornment>
                    }
                />
            </FormControl>
            <label>Enter Birth Date :</label>
            <input
            className={classes.birthDate}
                type="date"
                value={values.birthDate}
                onChange={handleChange("birthDate")}
            />

            <FormControl className={classes.phoneNumber}>
                <InputLabel style={{ color: "grey" }}>Phone Number</InputLabel>
                <Input
                    type="text"
                    value={values.phoneNumber}
                    required
                    onChange={handleChange("phoneNumber")}
                    endAdornment={
                        <InputAdornment
                            style={{ opacity: "0.7" }}
                            position="end"
                        >
                            <PhoneIcon />
                        </InputAdornment>
                    }
                />
            </FormControl>
        </div>
    );
}
export default PersonalDetails;
