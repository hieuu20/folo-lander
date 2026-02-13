import { Editor, IAllProps } from '@tinymce/tinymce-react';

export default function BundledEditor(props: IAllProps) {
    return (
        <Editor
            tinymceScriptSrc="/tinymce/tinymce.min.js"
            licenseKey={process.env.NEXT_PUBLIC_TINY_API_KEY}
            // apiKey={process.env.NEXT_PUBLIC_TINY_API_KEY}
            {...props}
        />
    );
}
