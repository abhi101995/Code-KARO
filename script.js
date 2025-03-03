document.addEventListener('DOMContentLoaded', () => {
    const htmlEditor = document.getElementById('htmlEditor');
    const cssEditor = document.getElementById('cssEditor');
    const jsEditor = document.getElementById('jsEditor');
    const outputFrame = document.getElementById('outputFrame');

    function updateOutput() {
        const htmlContent = htmlEditor.value;
        const cssContent = `<style>${cssEditor.value}</style>`;
        const jsContent = `<script>${jsEditor.value}<\/script>`;

        const output = outputFrame.contentDocument || outputFrame.contentWindow.document;
        output.open();
        output.write(htmlContent + cssContent + jsContent);
        output.close();
    }

    htmlEditor.addEventListener('input', updateOutput);
    cssEditor.addEventListener('input', updateOutput);
    jsEditor.addEventListener('input', updateOutput);
});