import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import './style.scss';
import './editor.scss';

const cssStyles = `
.jurible-bouton {
    display: inline-block;
    text-decoration: none;
    border-radius: 8px;
    padding: 12px 24px;
    font-weight: 600;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    transition: all 0.3s ease;
    cursor: pointer;
    text-align: center;
}

.jurible-bouton-primary {
    background: #B0001D;
    color: #FFFFFF;
    border: none;
    box-shadow: 0 2px 8px rgba(176, 0, 29, 0.25);
}

.jurible-bouton-primary:hover {
    background: #DC2626;
    box-shadow: 0 4px 12px rgba(176, 0, 29, 0.35);
    transform: translateY(-2px);
    color: #FFFFFF;
}

.jurible-bouton-gradient {
    background: linear-gradient(135deg, #B0001D 0%, #7C3AED 100%);
    color: #FFFFFF;
    border: none;
    box-shadow: 0 2px 8px rgba(176, 0, 29, 0.25);
}

.jurible-bouton-gradient:hover {
    box-shadow: 0 4px 12px rgba(124, 58, 237, 0.35);
    transform: translateY(-2px);
    color: #FFFFFF;
}

.jurible-bouton-secondary {
    background: #FFFFFF;
    color: #1A1A1A;
    border: 1px solid #E5E7EB;
}

.jurible-bouton-secondary:hover {
    border-color: #B0001D;
    color: #B0001D;
}
`;

function injectStyles() {
    if (!document.getElementById('jurible-bouton-styles')) {
        const style = document.createElement('style');
        style.id = 'jurible-bouton-styles';
        style.textContent = cssStyles;
        document.head.appendChild(style);
    }
    
    const iframes = document.querySelectorAll('iframe[name="editor-canvas"]');
    iframes.forEach(iframe => {
        try {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            if (iframeDoc && !iframeDoc.getElementById('jurible-bouton-styles')) {
                const style = iframeDoc.createElement('style');
                style.id = 'jurible-bouton-styles';
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
        console.log('JURIBLE BOUTON REGISTERED!');
    } else {
        setTimeout(registerWhenReady, 50);
    }
}

registerWhenReady();