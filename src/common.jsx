import React from 'react';

/**
 * Render static page.
 * @param {string} html Static react components html.
 * @param {object} Initial application state.
 */
export const renderPage = (html, appState) => {
    return `
        <!doctype html>
        <html>
            <body>
                <div id="root">
                  <div>${html}</div>
                </div>
                <script src="/public/bundle.vendor.js"></script>
                <script src="/public/bundle.app.js"></script>
            </body>
        </html>
    `
};
