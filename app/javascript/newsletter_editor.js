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

  // ===== REAL ESTATE CRM BLOCKS =====
  
  // Property Card Block
  blockManager.add('property-card', {
    id: 'property-card',
    label: 'Property Card',
    content: `
      <div class="property-card" style="border: 1px solid #ddd; border-radius: 8px; overflow: hidden; max-width: 300px; margin: 10px;">
        <div class="property-image" style="height: 200px; background: linear-gradient(45deg, #f0f0f0, #e0e0e0); display: flex; align-items: center; justify-content: center; color: #666;">
          Property Image
        </div>
        <div class="property-details" style="padding: 15px;">
          <div class="property-price" style="font-size: 24px; font-weight: bold; color: #2c5aa0; margin-bottom: 8px;">
            $450,000
          </div>
          <div class="property-address" style="color: #333; margin-bottom: 8px;">
            123 Main Street, Austin, TX 78701
          </div>
          <div class="property-specs" style="display: flex; gap: 15px; color: #666; font-size: 14px;">
            <span>3 bed</span>
            <span>2 bath</span>
            <span>1,200 sqft</span>
          </div>
          <button class="property-cta" style="width: 100%; padding: 10px; background: #2c5aa0; color: white; border: none; border-radius: 4px; margin-top: 10px; cursor: pointer;">
            View Details
          </button>
        </div>
      </div>
    `,
    category: 'Real Estate',
  });

  // Agent Profile Block
  blockManager.add('agent-profile', {
    id: 'agent-profile',
    label: 'Agent Profile',
    content: `
      <div class="agent-profile" style="border: 1px solid #ddd; border-radius: 8px; padding: 20px; max-width: 300px; margin: 10px; text-align: center;">
        <div class="agent-photo" style="width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(45deg, #f0f0f0, #e0e0e0); margin: 0 auto 15px; display: flex; align-items: center; justify-content: center; color: #666;">
          Photo
        </div>
        <div class="agent-name" style="font-size: 20px; font-weight: bold; color: #333; margin-bottom: 5px;">
          Sarah Johnson
        </div>
        <div class="agent-title" style="color: #2c5aa0; margin-bottom: 10px;">
          Senior Real Estate Agent
        </div>
        <div class="agent-contact" style="color: #666; font-size: 14px; margin-bottom: 15px;">
          📞 (555) 123-4567<br>
          ✉️ sarah@realestate.com
        </div>
        <button class="agent-cta" style="padding: 8px 16px; background: #2c5aa0; color: white; border: none; border-radius: 4px; cursor: pointer;">
          Contact Agent
        </button>
      </div>
    `,
    category: 'Real Estate',
  });

  // Property Details Block
  blockManager.add('property-details', {
    id: 'property-details',
    label: 'Property Details',
    content: `
      <div class="property-details" style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 10px;">
        <h3 style="color: #333; margin-bottom: 15px;">Property Details</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
          <div style="text-align: center;">
            <div style="font-size: 24px; font-weight: bold; color: #2c5aa0;">3</div>
            <div style="color: #666; font-size: 14px;">Bedrooms</div>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 24px; font-weight: bold; color: #2c5aa0;">2</div>
            <div style="color: #666; font-size: 14px;">Bathrooms</div>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 24px; font-weight: bold; color: #2c5aa0;">1,200</div>
            <div style="color: #666; font-size: 14px;">Sq Ft</div>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 24px; font-weight: bold; color: #2c5aa0;">0.25</div>
            <div style="color: #666; font-size: 14px;">Acres</div>
          </div>
        </div>
      </div>
    `,
    category: 'Real Estate',
  });

  // ===== MJML EMAIL BLOCKS =====
  
  // MJML Property Card (Email Compatible)
  blockManager.add('mjml-property-card', {
    id: 'mjml-property-card',
    label: 'MJML Property Card',
    content: `
      <mj-section background-color="#ffffff" padding="20px">
        <mj-column>
          <mj-image src="https://placehold.co/300x200/2c5aa0/ffffff?text=Property+Image" alt="Property" border-radius="8px" />
          <mj-text font-size="24px" font-weight="bold" color="#2c5aa0" padding="10px 0 5px 0">
            $450,000
          </mj-text>
          <mj-text font-size="16px" color="#333333" padding="0 0 10px 0">
            123 Main Street, Austin, TX 78701
          </mj-text>
          <mj-text font-size="14px" color="#666666" padding="0 0 15px 0">
            3 bed • 2 bath • 1,200 sqft
          </mj-text>
          <mj-button background-color="#2c5aa0" color="#ffffff" border-radius="4px" href="#" padding="10px 20px">
            View Details
          </mj-button>
        </mj-column>
      </mj-section>
    `,
    category: 'MJML Email',
  });

  // MJML Agent Profile (Email Compatible)
  blockManager.add('mjml-agent-profile', {
    id: 'mjml-agent-profile',
    label: 'MJML Agent Profile',
    content: `
      <mj-section background-color="#f8f9fa" padding="20px">
        <mj-column>
          <mj-image src="https://placehold.co/80x80/2c5aa0/ffffff?text=Photo" alt="Agent Photo" border-radius="50%" width="80px" />
          <mj-text font-size="20px" font-weight="bold" color="#333333" align="center" padding="10px 0 5px 0">
            Sarah Johnson
          </mj-text>
          <mj-text font-size="16px" color="#2c5aa0" align="center" padding="0 0 10px 0">
            Senior Real Estate Agent
          </mj-text>
          <mj-text font-size="14px" color="#666666" align="center" padding="0 0 15px 0">
            📞 (555) 123-4567<br/>
            ✉️ sarah@realestate.com
          </mj-text>
          <mj-button background-color="#2c5aa0" color="#ffffff" border-radius="4px" href="#" padding="8px 16px">
            Contact Agent
          </mj-button>
        </mj-column>
      </mj-section>
    `,
    category: 'MJML Email',
  });
  
  // Add event listeners for our buttons
  document.getElementById('save-newsletter')?.addEventListener('click', function() {
    console.log('💾 Saving newsletter...');
    const html = editor.getHtml();
    const css = editor.getCss();
    
    console.log('📄 Newsletter HTML:', html);
    console.log('🎨 Newsletter CSS:', css);
    
    // Show a nice summary
    const componentCount = editor.getComponents().length;
    console.log(`📊 Newsletter contains ${componentCount} components`);
    
    alert(`Newsletter saved! Check console for HTML/CSS.\n\nComponents: ${componentCount}\nHTML Length: ${html.length} chars\nCSS Length: ${css.length} chars`);
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
