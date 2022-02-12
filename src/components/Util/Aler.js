import React, {useState} from "react";
import {Alert, Stack} from '@mui/material';

function Aler(props) {
  const { className, type, style } = props;
  const [message, setMessage] = useState(props.message)
  const [close, setClose] = useState(false);

  return (
    <>
      {!close && message && (
        <Stack className={className} sx={{ width: "100%" }} spacing={2}>
          <Alert
            onClose={() => {
              setClose(true);
              setMessage('')
            }}
            sx={{ mb: 2 }}
            severity={type === "error" ? "error" : "success"}
            style={{...style, position: "fixed", alignSelf: "center" }}
            variant="filled"

          >
            <strong>{message}</strong>
          </Alert>
        </Stack>
      )}
    </>
  );
}

export default Aler;