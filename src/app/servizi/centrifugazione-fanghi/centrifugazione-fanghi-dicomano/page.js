import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Dicomano",
  canonical: links.servizi["centrifugazione-fanghi"]["dicomano"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Dicomano",
  locationNames: { label: "Dicomano", href: "dicomano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
