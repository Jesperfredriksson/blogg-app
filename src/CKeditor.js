
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';


ClassicEditor
    .create( document.querySelector( '#editor' ), {
        plugins: [ Essentials, Bold, Italic, ... ],
        toolbar: [ 'bold', 'italic', ... ]
    } )
    .then( editor => {
        console.log( 'Editor was initialized', editor );
    } )
    .catch( err => {
        console.error( err.stack );
    } );



