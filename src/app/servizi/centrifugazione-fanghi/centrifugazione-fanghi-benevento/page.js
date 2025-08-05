import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Benevento",
  canonical: links.servizi["centrifugazione-fanghi"]["benevento"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Benevento",
  locationNames: { label: "Benevento", href: "benevento" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["benevento"],
      name: "Benevento",
  }),
});
