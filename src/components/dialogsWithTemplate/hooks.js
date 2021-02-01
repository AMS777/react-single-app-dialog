import React, { useState } from 'react';

import DialogTemplate from 'components/dialogTemplate';

import TextField from '@material-ui/core/TextField';

export function useDialogTemplateStaticText(onDialogOkCallback) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);
  const onDialogOk = () => {
    onDialogOkCallback('Static text dialog okay');
    closeDialog();
  };

  const dialogContext = {
    title: 'Dialog with template',
    content: 'Static text works correctly.',
    isOpen: isDialogOpen,
    onOk: onDialogOk,
    onClose: closeDialog,
  };

  const Dialog = <DialogTemplate dialogContext={dialogContext} />;

  return { Dialog, open: openDialog };
}

export function useDialogTemplateDynamicText(onDialogOkCallback) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [text, setText] = useState();

  const openDialog = newText => {
    setText(newText);
    setIsDialogOpen(true);
  };
  const closeDialog = () => setIsDialogOpen(false);
  const onDialogOk = () => {
    onDialogOkCallback('Dynamic text dialog okay');
    closeDialog();
  };

  const dialogContext = {
    title: 'Dialog with template',
    content: `Dynamic text works correctly: "${text}"`,
    isOpen: isDialogOpen,
    onOk: onDialogOk,
    onClose: closeDialog,
  };

  const Dialog = <DialogTemplate dialogContext={dialogContext} />;

  return { Dialog, open: openDialog };
}

export function useDialogTemplateForm(onDialogOkCallback) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [text, setText] = useState('');

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);
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
    title: 'Dialog with template',
    content: 'Forms work correctly.',
    contentBlock: textField,
    isOpen: isDialogOpen,
    onOk: onDialogOk,
    onClose: closeDialog,
  };

  const Dialog = <DialogTemplate dialogContext={dialogContext} />;

  return { Dialog, open: openDialog };
}
