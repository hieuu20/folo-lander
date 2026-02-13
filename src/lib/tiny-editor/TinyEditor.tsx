import { useCallback, useRef, useState } from 'react';
import BundledEditor from './BundledEditor';
import { Editor } from 'tinymce';
import { tinyPlugins } from './utils';
// import { appAxios } from '@/client/configs';

interface Props {
    initialValue?: string
    onChange: (value: string) => void
    h?: number
}

export function TinyEditor({ initialValue, onChange, h }: Props) {
    const editorRef = useRef<Editor | null>(null);
    const [_initialValue] = useState(initialValue);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onUploadImage = useCallback(async (blobInfo: any) => {
        try {
            const formData = new FormData();
            formData.append('file', blobInfo.blob(), blobInfo.filename());
            const response = await fetch('/api/admin/upload', {
                method: 'POST',
                body: formData,
            });

            const resData = await response.json();
            return resData.data;
        } catch (error) {
            console.log({ error });
            return '';
        }
    }, []);

    return (
        <>
            <BundledEditor
                onInit={(_evt, editor) => (editorRef.current = editor || null)}
                initialValue={_initialValue}
                onChange={(_evt, editor) => {
                    onChange(editor.getContent() || '');
                }}
                init={{
                    height: h,
                    width: "100%",
                    menubar: 'file edit view insert format tools table help',
                    resize: true,
                    images_upload_url: 'https://res.cloudinary.com/',
                    automatic_uploads: true,
                    images_upload_handler: onUploadImage,
                    image_caption: true,
                    extended_valid_elements:
                        'svg[*],g[*],path[*],circle[*],rect[*],line[*],polygon[*],polyline[*],ellipse[*]',
                    valid_children:
                        '+body[svg],+svg[g|path|circle|rect|line|polygon|polyline|ellipse]',
                    plugins: tinyPlugins,
                    toolbar:
                        'undo redo | accordion accordionremove | ' +
                        'blocks fontfamily fontsize | ' +
                        'bold italic underline strikethrough blockquote | ' +
                        'align numlist bullist | link image | table media | ' +
                        'lineheight outdent indent | ' +
                        'forecolor backcolor removeformat | ' +
                        'charmap emoticons | code fullscreen preview | save print | ' +
                        'pagebreak anchor codesample | ltr rtl',
                    content_style:
                        'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                    autosave_ask_before_unload: true,
                }}
            />
        </>
    );
}
