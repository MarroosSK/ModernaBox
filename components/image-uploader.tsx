import { SingleImageDropzoneUsage } from "@/components/single-image-upload";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ImageUploader() {
  return (
    <div className="space-y-16 pb-8">
      <div className="space-y-6">
        <h1 className="text-3xl md:text-5xl font-medium text-center">
          Post your <span className="text-blue-500">images</span> here
        </h1>
        <p className="text-muted-foreground text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
          Online image storage & tool to modify images.
        </p>
      </div>

      <div className="flex items-center justify-center mx-auto">
        <SingleImageDropzoneUsage />
      </div>
      <div className="text-center text-xs text-muted-foreground">
        By uploading images to our site you agree to the
        <Button
          asChild
          variant="link"
          className="-ml-3 text-center text-xs text-blue-500"
        >
          <Link href={"/terms"}>Terms of use.</Link>
        </Button>
      </div>
    </div>
  );
}
