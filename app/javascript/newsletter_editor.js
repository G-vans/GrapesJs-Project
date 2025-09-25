// This is our GrapesJS newsletter editor
// We'll build this step by step to understand how it works

console.log('📄 Newsletter editor JavaScript file loaded!');

// Import GrapesJS using the global window object approach
// This avoids the ES6 module import issues

// Wait for the DOM to be ready OR run immediately if DOM is already ready
function initializeNewsletterEditor() {
  console.log('🚀 Initializing GrapesJS Newsletter Editor...');
  console.log('🔍 DOM is ready, checking GrapesJS...');
  
  // Check if GrapesJS is loaded
  if (typeof window.grapesjs === 'undefined') {
    console.error('❌ GrapesJS is not loaded!');
    alert('GrapesJS failed to load. Please check the console for errors.');
    return;
  }
  
  console.log('✅ GrapesJS is loaded:', window.grapesjs);
  
  // Initialize GrapesJS with basic configuration
  // Using window.grapesjs since we're loading it via script tag
  let editor;
  try {
    editor = window.grapesjs.init({
      // The container where GrapesJS will be mounted
      container: '#gjs',
      
      // Height of the editor
      height: '100%',
      
      // Use minimal configuration to start
      storageManager: false,
      plugins: [],
    });
    console.log('✅ GrapesJS editor initialized successfully:', editor);
  } catch (error) {
    console.error('❌ Failed to initialize GrapesJS:', error);
    alert('Failed to initialize GrapesJS: ' + error.message);
    return;
  }
  
  // Add some basic blocks manually (we'll learn about this)
  const blockManager = editor.BlockManager;
  
  // Add a text block
  blockManager.add('text', {
    label: 'Text',
    content: '<div data-gjs-type="text">Insert your text here</div>',
    category: 'Basic',
  });
  
  // Add an image block
  blockManager.add('image', {
    label: 'Image',
    content: {
      type: 'image',
      src: 'https://via.placeholder.com/350x250/78c5d6/fff/image1.jpg',
      style: { color: 'black' }
    },
    category: 'Basic',
  });
  
  // Add a button block
  blockManager.add('button', {
    label: 'Button',
    content: '<button class="btn btn-primary">Click me</button>',
    category: 'Basic',
  });
  
  // Add event listeners for our buttons
  document.getElementById('save-newsletter')?.addEventListener('click', function() {
    console.log('💾 Saving newsletter...');
    const html = editor.getHtml();
    const css = editor.getCss();
    console.log('HTML:', html);
    console.log('CSS:', css);
    alert('Newsletter saved! Check the console to see the generated HTML/CSS.');
  });
  
  document.getElementById('preview-newsletter')?.addEventListener('click', function() {
    console.log('👁️ Previewing newsletter...');
    const html = editor.getHtml();
    const css = editor.getCss();
    
    // Open preview in new window
    const previewWindow = window.open('', '_blank');
    previewWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Newsletter Preview</title>
          <style>${css}</style>
        </head>
        <body>${html}</body>
      </html>
    `);
    previewWindow.document.close();
  });
  
  document.getElementById('clear-editor')?.addEventListener('click', function() {
    console.log('🗑️ Clearing editor...');
    if (confirm('Are you sure you want to clear the editor?')) {
      editor.setComponents('');
      editor.setStyle('');
    }
  });
  
  console.log('✅ GrapesJS Newsletter Editor initialized successfully!');
  console.log('📝 Editor instance:', editor);
  
  // Make editor available globally for debugging
  window.newsletterEditor = editor;
}

// Run the initialization function
if (document.readyState === 'loading') {
  // DOM is still loading, wait for it
  document.addEventListener('DOMContentLoaded', initializeNewsletterEditor);
} else {
  // DOM is already ready, run immediately
  console.log('🔍 DOM is already ready, running immediately...');
  initializeNewsletterEditor();
}
