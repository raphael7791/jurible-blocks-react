import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import './style.scss';
import './editor.scss';

const cssStyles = `
.jurible-infobox {
    display: flex;
    flex-direction: column;
    padding: 20px 24px;
    gap: 8px;
    border-radius: 12px;
    width: 100%;
    box-sizing: border-box;
}
.jurible-infobox-header {
    display: flex;
    align-items: center;
    gap: 8px;
}
.jurible-infobox-icon {
    font-size: 14px;
}
.jurible-infobox-title {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
}
.jurible-infobox-content {
    margin: 0;
    font-size: 16px;
    line-height: 1.6;
    color: #4A4A4A;
}
.jurible-infobox-retenir {
    background: rgba(245, 158, 11, 0.1);
}
.jurible-infobox-retenir .jurible-infobox-title {
    color: #F59E0B;
}
.jurible-infobox-attention {
    background: rgba(239, 68, 68, 0.1);
}
.jurible-infobox-attention .jurible-infobox-title {
    color: #EF4444;
}
.jurible-infobox-exemple {
    background: linear-gradient(100.94deg, rgba(176, 0, 29, 0.08) 0%, rgba(124, 58, 237, 0.08) 100%);
}
.jurible-infobox-exemple .jurible-infobox-title {
    color: #7C3AED;
}
.jurible-infobox-important {
    background: #EFF6FF;
}
.jurible-infobox-important .jurible-infobox-title {
    color: #3B82F6;
}
.jurible-infobox-astuce {
    background: #ECFDF5;
}
.jurible-infobox-astuce .jurible-infobox-title {
    color: #10B981;
}
.jurible-infobox-definition {
    background: #F3F4F6;
}
.jurible-infobox-definition .jurible-infobox-title {
    color: #4A4A4A;
}
.jurible-infobox-conditions {
    background: #F3F4F6;
}
.jurible-infobox-conditions .jurible-infobox-title {
    color: #4A4A4A;
}
.jurible-infobox .jurible-infobox-content {
    margin-bottom: 0 !important;
}
`;

function injectStyles() {
    // Injecter dans le document actuel
    if (!document.getElementById('jurible-infobox-styles')) {
        const style = document.createElement('style');
        style.id = 'jurible-infobox-styles';
        style.textContent = cssStyles;
        document.head.appendChild(style);
    }
    
    // Injecter dans toutes les iframes editor-canvas
    const iframes = document.querySelectorAll('iframe[name="editor-canvas"]');
    iframes.forEach(iframe => {
        try {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            if (iframeDoc && !iframeDoc.getElementById('jurible-infobox-styles')) {
                const style = iframeDoc.createElement('style');
                style.id = 'jurible-infobox-styles';
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
        // Réinjecter après un délai pour les iframes chargées plus tard
        setTimeout(injectStyles, 1000);
        setTimeout(injectStyles, 3000);
        
        registerBlockType(metadata.name, {
            ...metadata,
            edit: Edit,
            save,
        });
        console.log('JURIBLE INFOBOX REGISTERED!');
    } else {
        setTimeout(registerWhenReady, 50);
    }
}

registerWhenReady();