import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import './style.scss';
import './editor.scss';

const cssStyles = `
.jurible-lien-lecon {
    margin: 24px 0;
}
.jurible-lien-lecon-card {
    display: block;
    text-decoration: none;
    background: linear-gradient(135deg, #B0001D 0%, #7C3AED 100%);
    border-radius: 16px;
    padding: 24px;
    color: white;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.jurible-lien-lecon-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(176, 0, 29, 0.3);
}
.jurible-lien-lecon-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
}
.jurible-lien-lecon-icon {
    font-size: 16px;
}
.jurible-lien-lecon-label {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.9);
}
.jurible-lien-lecon-description {
    font-size: 18px;
    line-height: 1.5;
    margin: 0 0 16px 0;
    color: white;
}
.jurible-lien-lecon-btn {
    display: inline-block;
    background: white;
    color: #B0001D;
    padding: 10px 20px;
    border-radius: 8px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 14px;
    text-decoration: none;
    transition: background 0.2s ease;
}
.jurible-lien-lecon-btn:hover {
    background: rgba(255, 255, 255, 0.9);
}
.jurible-lien-lecon-info {
    background: rgba(255, 255, 255, 0.1);
    padding: 12px;
    border-radius: 8px;
    margin: 12px 0;
    font-size: 14px;
}
`;

function injectStyles() {
    if (!document.getElementById('jurible-lien-lecon-styles')) {
        const style = document.createElement('style');
        style.id = 'jurible-lien-lecon-styles';
        style.textContent = cssStyles;
        document.head.appendChild(style);
    }
    
    const iframes = document.querySelectorAll('iframe[name="editor-canvas"]');
    iframes.forEach(iframe => {
        try {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            if (iframeDoc && !iframeDoc.getElementById('jurible-lien-lecon-styles')) {
                const style = iframeDoc.createElement('style');
                style.id = 'jurible-lien-lecon-styles';
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
        console.log('JURIBLE LIEN LECON REGISTERED!');
    } else {
        setTimeout(registerWhenReady, 50);
    }
}

registerWhenReady();