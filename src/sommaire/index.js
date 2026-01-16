import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import './style.scss';
import './editor.scss';

const cssStyles = `
.jurible-sommaire {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    background: #F9FAFB;
    border: 1px solid #E5E7EB;
    border-radius: 12px;
    margin-bottom: 24px;
    padding-top: clamp(20px, 4vw, 24px);
    padding-right: clamp(20px, 4vw, 24px);
    padding-bottom: clamp(12px, 3vw, 16px);
    padding-left: clamp(20px, 4vw, 24px);
}
.jurible-sommaire-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    gap: 8px;
}
.jurible-sommaire-icon {
    font-size: 16px;
}
.jurible-sommaire-title {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: #1B1B1B;
}
.jurible-sommaire-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 !important;
    margin: 0 !important;
    gap: 0;
    list-style: none !important;
    width: 100%;
}
.jurible-sommaire-list li {
    display: flex !important;
    align-items: center !important;
    width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
}
.jurible-sommaire-list li + li {
    border-top: 1px solid #E5E7EB !important;
    margin-top: 9px !important;
    padding-top: 9px !important;
}
.jurible-sommaire-list a {
    color: #4A4A4A !important;
    text-decoration: none !important;
    font-family: 'Poppins', sans-serif !important;
    font-size: 14px !important;
    margin-bottom: 0 !important;
}
.jurible-sommaire-list a:hover {
    color: #B0001D !important;
}
.jurible-sommaire-info {
    color: #9CA3AF;
    font-size: 13px;
    margin: 0;
}
`;

function injectStyles() {
    if (!document.getElementById('jurible-sommaire-styles')) {
        const style = document.createElement('style');
        style.id = 'jurible-sommaire-styles';
        style.textContent = cssStyles;
        document.head.appendChild(style);
    }
    
    const iframes = document.querySelectorAll('iframe[name="editor-canvas"]');
    iframes.forEach(iframe => {
        try {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            if (iframeDoc && !iframeDoc.getElementById('jurible-sommaire-styles')) {
                const style = iframeDoc.createElement('style');
                style.id = 'jurible-sommaire-styles';
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
        console.log('JURIBLE SOMMAIRE REGISTERED!');
    } else {
        setTimeout(registerWhenReady, 50);
    }
}

registerWhenReady();