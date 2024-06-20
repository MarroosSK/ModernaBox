import useToolkitStore from "@/hooks/useToolkitStore";
import FilerobotImageEditor, {
  TABS,
  TOOLS,
} from "react-filerobot-image-editor";
import { Card } from "./ui/card";

const DotMenu = () => {
  const { setIsImgEditorShown, toolkitImage } = useToolkitStore();

  const handleSave = (editedImageObject: any) => {
    const link = document.createElement("a");
    link.href = editedImageObject.imageBase64;
    link.download = editedImageObject.fullName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card className="fixed inset-0 z-30 flex items-center justify-center overflow-hidden bg-black/90">
      <div className="fixed inset-0" />
      <FilerobotImageEditor
        source={toolkitImage?.url as string}
        onSave={(editedImageObject) => {
          handleSave(editedImageObject);
          // console.log(editedImageObject);
        }}
        onClose={() => setIsImgEditorShown(false)}
        annotationsCommon={{
          fill: "#ff0000",
        }}
        Text={{ text: "My text..." }}
        Rotate={{ angle: 90, componentType: "slider" }}
        tabsIds={[
          TABS.ADJUST,
          TABS.ANNOTATE,
          TABS.FILTERS,
          TABS.WATERMARK,
          TABS.FINETUNE,
          TABS.RESIZE,
        ]}
        defaultTabId={TABS.ANNOTATE}
        defaultToolId={TOOLS.TEXT}
        savingPixelRatio={1}
        previewPixelRatio={1}
      />
    </Card>
  );
};

export default DotMenu;
