import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function TextEditor() {
  // const editorRef = useRef(null);
  const [description, setDescription] = useState(null);

  const editDescription = (value) => {
    setDescription(value);
  };

  // const saveDescription = () => {
  //   if (editorRef.current) {
  //     apiPatchProduct(id, editorRef.current.getContent());
  //   }
  // };

  return (
    <Editor
      apiKey="ewoqfpgkax26caflruzusm0gj5578i6a214kgoyowpeqsj1f"
      initialValue={description}
      onChange={(e) => editDescription(e.target.value)}
      init={{
        height: 500,
        menubar: true,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount'
        ],
        toolbar:
        'undo redo | formatselect | '
        + 'bold italic backcolor | alignleft aligncenter '
        + 'alignright alignjustify | bullist numlist outdent indent | '
        + 'removeformat | help',
        content_style:
        'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
      }}
    />
  );
}
