import { UserSession } from "@/user-session";
import axios, { AxiosResponse } from "axios";
import { ChangeEvent, JSX, useRef, useState } from "react";

interface InputFileProps {
  value: string
  onValueChange(value: string): void
  loading?: boolean
  setLoading?(loading: boolean): void
  trigger: JSX.Element
  accept?: string
  progress?: number
  setProgress?(progress: number): void
}

export function InputFile(props: InputFileProps) {
  const file_ref = useRef<HTMLInputElement>(null);
  const [temp_file, setTempFile] = useState<{
    b64: string
    file: File
  }>();

  function onInputImageChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = function () {
      const base64String = reader.result;
      setTempFile({
        file,
        b64: base64String as string
      });
    };
    reader.readAsDataURL(file);
    uploadPhoto(file);
  }

  async function uploadPhoto(file: File) {
    try {
      props.setLoading?.(true);

      props.setProgress?.(0);
      const formData = new FormData();
      formData.append('file', file);
      const response: AxiosResponse<string> = await axios.post('/upload', formData, {
        onUploadProgress: progressEvent => props.setProgress?.(Math.round((progressEvent.progress ?? 0) * 100)),
        baseURL: import.meta.env.VITE_BASE_URL ?? `${window.location.origin}/api`,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: UserSession.getToken()
        }
      });
      props.onValueChange(response.data);
    } catch (err: any) {
      // 
    } finally {
      props.setLoading?.(false);
    }
  }

  return (
    <>
      <input
        ref={file_ref} 
        onChange={onInputImageChange}
        type={'file'}
        accept={props.accept}
        hidden />
      <div 
        className={`flex`}
        onClick={() => file_ref.current?.click()}>
        { props.trigger }
      </div>
    </>
  );
}
