import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import './editor.scss';
import Edit from './edit';
import save from './save';
import metadata from './block.json';

const editorStyles = `
.assessment-editor {
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    border-radius: 12px;
    padding: 20px;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.05);
}
.assessment-editor-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid #F3F4F6;
}
.assessment-icon {
    font-size: 24px;
}
.assessment-title {
    font-size: 16px;
    font-weight: 600;
    color: #1A1A1A;
    margin: 0;
}
.assessment-editor-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.assessment-field {
    display: flex;
    flex-direction: column;
    gap: 6px;
}
.assessment-field label {
    font-size: 13px;
    font-weight: 600;
    color: #4A4A4A;
}
.assessment-field select {
    padding: 10px 12px;
    border: 1px solid #E5E7EB;
    border-radius: 8px;
    font-size: 14px;
    background: #FFFFFF;
    cursor: pointer;
    transition: border-color 0.2s;
}
.assessment-field select:focus {
    outline: none;
    border-color: #7C3AED;
    box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.1);
}
.assessment-info {
    background: linear-gradient(94.73deg, rgba(176, 0, 29, 0.08) 0%, rgba(124, 58, 237, 0.08) 100%);
    color: #7C3AED;
    padding: 15px;
    border-radius: 8px;
    font-size: 14px;
    border: 1px solid rgba(124, 58, 237, 0.2);
}
.assessment-info strong {
    display: block;
    margin-bottom: 5px;
}
.assessment-info p {
    margin: 0;
    font-size: 12px;
    color: #6B7280;
}
.assessment-warning {
    background: #FEF3C7;
    color: #B45309;
    padding: 12px 15px;
    border-radius: 8px;
    font-size: 13px;
}
.assessment-editor-placeholder {
    text-align: center;
    padding: 40px 20px;
    color: #6B7280;
    font-size: 14px;
}
`;

function injectStyles() {
    if (!document.getElementById('jurible-assessment-editor-styles')) {
        const style = document.createElement('style');
        style.id = 'jurible-assessment-editor-styles';
        style.textContent = editorStyles;
        document.head.appendChild(style);
    }
    
    const iframes = document.querySelectorAll('iframe[name="editor-canvas"]');
    iframes.forEach(iframe => {
        try {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            if (iframeDoc && !iframeDoc.getElementById('jurible-assessment-editor-styles')) {
                const style = iframeDoc.createElement('style');
                style.id = 'jurible-assessment-editor-styles';
                style.textContent = editorStyles;
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
        console.log('JURIBLE ASSESSMENT BLOCK REGISTERED!');
    } else {
        setTimeout(registerWhenReady, 50);
    }
}

registerWhenReady();