import React, { useRef, useEffect, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Box } from '@material-ui/core';
import { ChevronLeft as ChevronLeftIcon } from 'react-feather';
import { apiGetProduct, apiPatchProduct } from '../../api/index';

export default function Edit() {
  const editorRef = useRef(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const [description, setDescription] = useState(null);

  const editDescription = (value) => {
    setDescription(value);
  };

  const saveDescription = () => {
    if (editorRef.current) {
      console.log('hi', editorRef.current.getContent());
      apiPatchProduct(id, editorRef.current.getContent());
    }
  };

  const setEditor = (evt, editor) => {
    editorRef.current = editor;
  };

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await apiGetProduct(id);
      setDescription(data.product.description);
    };
    getProduct();
  }, [id]);

  return (
    <Box m={2}>
      <Button onClick={() => navigate(-1)}>
        <ChevronLeftIcon />
        Back
      </Button>
      <Editor
        apiKey="ewoqfpgkax26caflruzusm0gj5578i6a214kgoyowpeqsj1f"
        initialValue={description}
        onInit={(evt, editor) => setEditor(evt, editor)}
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
            '\'undo redo | formatselect | \' \'bold italic backcolor | alignleft aligncenter \' \'alignright alignjustify | bullist numlist outdent indent | \' \'removeformat | help\'',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <Button color="primary" variant="contained" onClick={() => saveDescription()}>Save</Button>
    </Box>
  );
}
