# React application with single application dialog with Context API

This is a demo showing how to use a single component for all the dialogs of the application using Context API.

Context API doesn't react to the changes of the dialog component, so they must be specifically handled.

The demo shows three options to handle dialogs in the application, explained below.

## Dialog template

Use a template to create a dialog component, and create a component every time a dialog is displayed in the application. In this way, if the application uses 20 dialogs, 20 components are created and rendered.

## Single application dialog with Context API - Error

Use a single component for all the dialogs in the application, and change its content with Context API every time a dialog is displayed in the application.

If it's done the same way that with the previous option with templates, but only adapting it to Context API, it doesn't work. Context API doesn't react to changes of the content.

## Single application dialog with Context API - Fixed

Same as with the previous option, use a single component for all the dialogs in the application, and change its content with Context API every time a dialog is displayed in the application.

But this time a render is specifically triggered when the content of the dialog changes. This works correctly.
