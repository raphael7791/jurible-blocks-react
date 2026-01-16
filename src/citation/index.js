import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import './style.scss';
import './editor.scss';

const cssStyles = `
.jurible-citation {
    background: transparent !important;
    border-left: 4px solid #9CA3AF !important;
    padding-left: 20px !important;
    margin: 24px 0 !important;
}

.jurible-citation .jurible-citation-text {
    color: #4A4A4A !important;
    font-style: italic !important;
    font-size: 16px !important;
    line-height: 1.6 !important;
    margin-bottom: 8px !important;
}

.jurible-citation .jurible-citation-source {
    color: #9CA3AF !important;
    font-style: normal !important;
    font-size: 14px !important;
    display: block !important;
    margin-top: 8px !important;
}

.jurible-citation .jurible-citation-source::before {
    content: "— " !important;
}
`;

function injectStyles() {
    if (!document.getElementById('jurible-citation-styles')) {
        const style = document.createElement('style');
        style.id = 'jurible-citation-styles';
        style.textContent = cssStyles;
        document.head.appendChild(style);
    }
    
    const iframes = document.querySelectorAll('iframe[name="editor-canvas"]');
    iframes.forEach(iframe => {
        try {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            if (iframeDoc && !iframeDoc.getElementById('jurible-citation-styles')) {
                const style = iframeDoc.createElement('style');
                style.id = 'jurible-citation-styles';
                style.textContent = cssStyles;
                iframeDoc.head.appendChild(style);
            }
        } catch (e) {
            console.log('Cannot access iframe:', e);
        }
    });
}

function registerWhenReady() {
    if (typeof wp !== 'undefined' && wp.blocks && wp.blocks.registerBlockType) {
        injectStyles();
        setTimeout(injectStyles, 1000);
        setTimeout(injectStyles, 3000);
        
        registerBlockType(metadata.name, {
            ...metadata,
            edit: Edit,
            save,
        });
        console.log('JURIBLE CITATION REGISTERED!');
    } else {
        setTimeout(registerWhenReady, 50);
    }
}

registerWhenReady();