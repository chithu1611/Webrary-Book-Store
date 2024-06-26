const rootStyles = window.getComputedStyle(document.documentElement)

if (rootStyles.getPropertyValue('--book-cover-width-large') != null && rootStyles.getPropertyValue('--book-cover-width-large') !== ''){
    ready();
}else{
    document.getElementById('main-css').addEventListener('load',ready)
}

function ready(){
    const coverWidth = parseFloat(rootStyles.getPropertyValue('--book-cover-width-large'));
    const coverAspect = parseFloat(rootStyles.getPropertyValue('--book-cover-aspect-ratio'));
    const coverHeight = coverWidth / coverAspect;



    FilePond.registerPlugin(
        FilePondPluginFileEncode,
        FilePondPluginImageResize,
        FilePondPluginImagePreview,
    )
    
    FilePond.setOptions({
        stylePanelAspectRatio: 1 / coverAspect,
        imageResizeTargetWidth: coverWidth,
        imageResizeTargetHeight: coverHeight
    })
    
    
    FilePond.parse(document.body)
}
