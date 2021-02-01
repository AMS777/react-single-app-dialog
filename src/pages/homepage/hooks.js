import React, { useState } from 'react';

import DialogTemplate from 'components/dialogTemplate';

export function useDialogTemplateStaticText() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const dialogContext = {
    title: 'Dialog with template',
    content: 'Static text works correctly.',
    isOpen: isDialogOpen,
    onOk: closeDialog,
    onClose: closeDialog,
  };

  const Dialog = <DialogTemplate dialogContext={dialogContext} />;

  return { Dialog, open: openDialog };
}
