import React, { useState, useContext } from 'react';

import { AppContext } from 'context/appContext';
import { useEffectSkipFirstRender } from 'hooks';

import TextField from '@material-ui/core/TextField';

export function useDialogStaticText(onDialogOkCallback) {
  const appContext = useContext(AppContext);

  const openDialog = () => appContext.openAppDialog(dialogContext);
  const closeDialog = () => appContext.closeAppDialog();
  const onDialogOk = () => {
    onDialogOkCallback('Static text dialog okay');
    closeDialog();
  };

  const dialogContext = {
    title: 'Dialog with single component',
    content: 'Static text works correctly.',
    onOk: onDialogOk,
    onClose: closeDialog,
  };

  return { open: openDialog };
}

export function useDialogDynamicText(onDialogOkCallback) {
  const appContext = useContext(AppContext);
  const [text, setText] = useState();

  useEffectSkipFirstRender(() => {
    appContext.setAppDialogContext(dialogContext);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const openDialog = newText => {
    setText(newText);
    appContext.openAppDialog(dialogContext);
  };
  const closeDialog = () => appContext.closeAppDialog();
  const onDialogOk = () => {
    onDialogOkCallback('Dynamic text dialog okay');
    closeDialog();
  };

  const dialogContext = {
    title: 'Dialog with single component',
    content: `Dynamic text doesn't work: "${text}"`,
    onOk: onDialogOk,
    onClose: closeDialog,
  };

  return { open: openDialog };
}

export function useDialogForm(onDialogOkCallback) {
  const appContext = useContext(AppContext);
  const [text, setText] = useState('');

  useEffectSkipFirstRender(() => {
    appContext.setAppDialogContext(dialogContext);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const openDialog = () => appContext.openAppDialog(dialogContext);
  const closeDialog = () => appContext.closeAppDialog();
  const onDialogOk = () => {
    onDialogOkCallback(text);
    closeDialog();
  };
  const onTextFieldChange = event => {
    setText(event.target.value);
  };

  const textField = (
    <TextField
      autoFocus
      id="name"
      label="Enter text"
      type="text"
      variant="outlined"
      fullWidth
      onChange={onTextFieldChange}
      value={text}
    />
  );

  const dialogContext = {
    title: 'Dialog with single component',
    content: "Forms don't work.",
    contentBlock: textField,
    onOk: onDialogOk,
    onClose: closeDialog,
  };

  return { open: openDialog };
}
