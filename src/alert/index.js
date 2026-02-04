import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import './style.scss';
import './editor.scss';

const cssStyles = `
/* ==================== ALERT BASE ==================== */
.jurible-alert {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 16px;
    border-radius: 12px;
    position: relative;
    transition: opacity 0.15s ease, transform 0.15s ease;
}

.jurible-alert-icon {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 700;
    font-style: normal;
}

.jurible-alert-content {
    flex: 1;
    min-width: 0;
}

.jurible-alert-title {
    font-size: 14px;
    font-weight: 700;
    margin: 0 0 8px 0;
}

.jurible-alert-description {
    font-size: 14px;
    line-height: 1.5;
    margin: 0;
}

.jurible-alert-actions {
    display: flex;
    gap: 16px;
    margin-top: 16px;
}

.jurible-alert-close {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.15s ease;
    background: none;
    border: none;
    padding: 0;
}

.jurible-alert-close:hover {
    opacity: 1;
}

/* Alert Buttons */
.jurible-alert-btn {
    padding: 8px 16px;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    font-weight: 500;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    transition: all 0.15s ease;
    text-decoration: none;
    display: inline-block;
}

.jurible-alert-btn--primary {
    color: white;
}

.jurible-alert-btn--secondary {
    background: transparent;
    border: 1px solid;
}

/* ==================== INFO ALERT ==================== */
.jurible-alert--info {
    background: #EFF6FF;
}

.jurible-alert--info .jurible-alert-icon {
    color: #3B82F6;
}

.jurible-alert--info .jurible-alert-title {
    color: #3B82F6;
}

.jurible-alert--info .jurible-alert-description {
    color: #1E40AF;
}

.jurible-alert--info .jurible-alert-close {
    color: #3B82F6;
}

.jurible-alert--info .jurible-alert-btn--primary {
    background: #3B82F6;
}

.jurible-alert--info .jurible-alert-btn--primary:hover {
    background: #2563EB;
}

.jurible-alert--info .jurible-alert-btn--secondary {
    color: #3B82F6;
    border-color: #3B82F6;
}

.jurible-alert--info .jurible-alert-btn--secondary:hover {
    background: rgba(59, 130, 246, 0.1);
}

/* ==================== SUCCESS ALERT ==================== */
.jurible-alert--success {
    background: #ECFDF5;
}

.jurible-alert--success .jurible-alert-icon {
    color: #10B981;
}

.jurible-alert--success .jurible-alert-title {
    color: #10B981;
}

.jurible-alert--success .jurible-alert-description {
    color: #065F46;
}

.jurible-alert--success .jurible-alert-close {
    color: #10B981;
}

.jurible-alert--success .jurible-alert-btn--primary {
    background: #10B981;
}

.jurible-alert--success .jurible-alert-btn--primary:hover {
    background: #059669;
}

.jurible-alert--success .jurible-alert-btn--secondary {
    color: #10B981;
    border-color: #10B981;
}

.jurible-alert--success .jurible-alert-btn--secondary:hover {
    background: rgba(16, 185, 129, 0.1);
}

/* ==================== WARNING ALERT ==================== */
.jurible-alert--warning {
    background: #FFFBEB;
}

.jurible-alert--warning .jurible-alert-icon {
    color: #F59E0B;
}

.jurible-alert--warning .jurible-alert-title {
    color: #F59E0B;
}

.jurible-alert--warning .jurible-alert-description {
    color: #92400E;
}

.jurible-alert--warning .jurible-alert-close {
    color: #F59E0B;
}

.jurible-alert--warning .jurible-alert-btn--primary {
    background: #F59E0B;
}

.jurible-alert--warning .jurible-alert-btn--primary:hover {
    background: #D97706;
}

.jurible-alert--warning .jurible-alert-btn--secondary {
    color: #F59E0B;
    border-color: #F59E0B;
}

.jurible-alert--warning .jurible-alert-btn--secondary:hover {
    background: rgba(245, 158, 11, 0.1);
}

/* ==================== ERROR ALERT ==================== */
.jurible-alert--error {
    background: #FEF2F2;
}

.jurible-alert--error .jurible-alert-icon {
    color: #EF4444;
}

.jurible-alert--error .jurible-alert-title {
    color: #EF4444;
}

.jurible-alert--error .jurible-alert-description {
    color: #991B1B;
}

.jurible-alert--error .jurible-alert-close {
    color: #EF4444;
}

.jurible-alert--error .jurible-alert-btn--primary {
    background: #EF4444;
}

.jurible-alert--error .jurible-alert-btn--primary:hover {
    background: #DC2626;
}

.jurible-alert--error .jurible-alert-btn--secondary {
    color: #EF4444;
    border-color: #EF4444;
}

.jurible-alert--error .jurible-alert-btn--secondary:hover {
    background: rgba(239, 68, 68, 0.1);
}

/* ==================== ACCENT ALERT ==================== */
.jurible-alert--accent {
    background: #F5F3FF;
}

.jurible-alert--accent .jurible-alert-icon {
    color: #7C3AED;
}

.jurible-alert--accent .jurible-alert-title {
    color: #7C3AED;
}

.jurible-alert--accent .jurible-alert-description {
    color: #5B21B6;
}

.jurible-alert--accent .jurible-alert-close {
    color: #7C3AED;
}

.jurible-alert--accent .jurible-alert-btn--primary {
    background: #7C3AED;
}

.jurible-alert--accent .jurible-alert-btn--primary:hover {
    background: #6D28D9;
}

.jurible-alert--accent .jurible-alert-btn--secondary {
    color: #7C3AED;
    border-color: #7C3AED;
}

.jurible-alert--accent .jurible-alert-btn--secondary:hover {
    background: rgba(124, 58, 237, 0.1);
}

/* ==================== INLINE ALERT (compact) ==================== */
.jurible-alert--inline {
    padding: 16px;
    align-items: center;
}

.jurible-alert--inline .jurible-alert-icon {
    margin-top: 0;
}

.jurible-alert--inline .jurible-alert-title {
    margin-bottom: 0;
    font-size: 14px;
}
`;

function injectStyles() {
    // Injecter dans le document actuel
    if (!document.getElementById('jurible-alert-styles')) {
        const style = document.createElement('style');
        style.id = 'jurible-alert-styles';
        style.textContent = cssStyles;
        document.head.appendChild(style);
    }

    // Injecter dans toutes les iframes editor-canvas
    const iframes = document.querySelectorAll('iframe[name="editor-canvas"]');
    iframes.forEach(iframe => {
        try {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            if (iframeDoc && !iframeDoc.getElementById('jurible-alert-styles')) {
                const style = iframeDoc.createElement('style');
                style.id = 'jurible-alert-styles';
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
        console.log('JURIBLE ALERT REGISTERED!');
    } else {
        setTimeout(registerWhenReady, 50);
    }
}

registerWhenReady();
