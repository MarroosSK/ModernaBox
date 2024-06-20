"use client";

import { addImage } from "@/actions/add-image";
import { useEdgeStore } from "@/lib/edgestore";
import { Loader2, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { SingleImageDropzone } from "./single-image-dropzone";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function SingleImageDropzoneUsage({ setShowDropZone }: any) {
  const router = useRouter();
  const [file, setFile] = useState<File>();
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [isUploading, setIsUploading] = useState(false);
  const { edgestore } = useEdgeStore();
  const [keywords, setKeywords] = useState<string[]>([]);
  const [currentKeyword, setCurrentKeyword] = useState("");

  const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentKeyword(event.target.value);
  };

  const handleAddKeyword = () => {
    if (
      currentKeyword &&
      !keywords.includes(currentKeyword) &&
      keywords.length < 3
    ) {
      setKeywords([...keywords, currentKeyword]);
      setCurrentKeyword("");
    }
  };

  const handleRemoveKeyword = (keyword: string) => {
    setKeywords(keywords.filter((k) => k !== keyword));
  };

  const canUpload = file && keywords.length >= 1 && keywords.length <= 3;

  return (
    <div>
      <SingleImageDropzone
        width={250}
        height={220}
        value={file}
        onChange={(file) => {
          setFile(file);
        }}
      />
      <div className="mt-4">
        {file && (
          <div className="flex flex-col gap-y-2">
            <div className="flex gap-2">
              <Input
                placeholder="Minimum of 1 keyword"
                value={currentKeyword}
                onChange={handleKeywordChange}
              />
              <Button
                onClick={handleAddKeyword}
                disabled={!currentKeyword || keywords.length >= 3}
              >
                Add
              </Button>
            </div>
          </div>
        )}
        <div className="flex flex-wrap gap-2 mt-2">
          {keywords.map((keyword) => (
            <div
              key={keyword}
              className="flex items-center bg-gray-200 px-2 py-1 rounded"
            >
              {keyword}
              <button
                onClick={() => handleRemoveKeyword(keyword)}
                className="ml-1"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
      {canUpload && (
        <Button
          className="w-full bg-blue-500 mt-4"
          onClick={async () => {
            try {
              if (file && !isUploading) {
                setIsUploading(true);
                const res = await edgestore.publicFiles.upload({
                  file,
                  onProgressChange: (progress) => {
                    setUploadProgress(progress);
                    // console.log(progress);
                    toast(
                      <div className="flex items-center gap-2 text-black">
                        <Loader2 className="animate-spin" />{" "}
                        <span className="text-lg">Uploading...</span>
                      </div>,
                      {
                        duration: 100000,
                        id: "upload-begin",
                      }
                    );
                  },
                });
                await addImage(res.url, keywords);
                toast.dismiss("upload-begin");
                toast("Upload complete!");
                setIsUploading(false);
                setShowDropZone(false);
                router.push("/images");
              }
            } catch (error) {
              toast.dismiss("upload-begin");
              toast.error("Upload failed");
            } finally {
              setIsUploading(false);
            }
          }}
          type="submit"
          disabled={isUploading}
        >
          Upload
        </Button>
      )}
      {/* {showUpload && (
        <div className="mt-4">
          <Line
            percent={uploadProgress}
            strokeWidth={4}
            strokeColor="#2196F3"
          />
        </div>
      )} */}
    </div>
  );
}
