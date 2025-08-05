import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Sogliano al Rubicone",
  canonical: links.servizi["centrifugazione-fanghi"]["sogliano-al-rubicone"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Sogliano al Rubicone",
  locationNames: { label: "Sogliano al Rubicone", href: "sogliano-al-rubicone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
