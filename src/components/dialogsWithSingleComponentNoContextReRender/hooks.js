import React, { useState, useContext } from 'react';

import { AppContextNoReRender } from 'context/appContextNoReRender';
import { useEffectSkipFirstRender } from 'hooks';

import TextField from '@material-ui/core/TextField';

export function useDialogStaticText(onDialogOkCallback) {
  const appContext = useContext(AppContextNoReRender);

  const openDialog = () => appContext.openAppDialog(dialogContext);
  const closeDialog = () => appContext.closeAppDialog();
  const onDialogOk = () => {
    onDialogOkCallback('Static text dialog okay');
    closeDialog();
  };

  const dialogContext = {
    title: 'Dialog with single component - No Context Re-render',
    content: 'Static text works correctly.',
    onOk: onDialogOk,
    onClose: closeDialog,
  };

  return { open: openDialog };
}

export function useDialogDynamicText(onDialogOkCallback) {
  const appContext = useContext(AppContextNoReRender);
  const [text, setText] = useState();

  useEffectSkipFirstRender(() => {
    appContext.updateAppDialog(dialogContext);
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
    title: 'Dialog with single component - No Context Re-render',
    content: `Dynamic text works correctly: "${text}"`,
    onOk: onDialogOk,
    onClose: closeDialog,
  };

  return { open: openDialog };
}

export function useDialogForm(onDialogOkCallback) {
  const appContext = useContext(AppContextNoReRender);
  const [text, setText] = useState('');

  useEffectSkipFirstRender(() => {
    appContext.updateAppDialog(dialogContext);
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
    title: 'Dialog with single component - No Context Re-render',
    content: 'Forms work correctly.',
    contentBlock: textField,
    onOk: onDialogOk,
    onClose: closeDialog,
  };

  return { open: openDialog };
}
