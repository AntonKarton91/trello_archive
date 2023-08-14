import React, {useEffect, useRef, useState} from 'react';
import {Paper, TextField} from "@mui/material";
import styles from "./styles.module.css"

const MainFieldComponent = ({}): React.ReactElement => {
    const [searchString, setSearchString] = useState("")
    const searchStringRef = useRef<HTMLInputElement>(null)


    return (
        <div>
            <Paper className={styles.title} elevation={6}>Архив Trello</Paper>
            <Paper className={styles.main_window} elevation={6}>
                <TextField
                    autoFocus
                    label="Введите номер или название карточки"
                    variant="outlined" size={"small"} fullWidth />
                <Paper className={styles.list_container}>

                </Paper>
            </Paper>
        </div>
    );
};

export default MainFieldComponent;