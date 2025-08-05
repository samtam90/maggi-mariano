import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Marradi",
  canonical: links.servizi["centrifugazione-fanghi"]["marradi"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Marradi",
  locationNames: { label: "Marradi", href: "marradi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
