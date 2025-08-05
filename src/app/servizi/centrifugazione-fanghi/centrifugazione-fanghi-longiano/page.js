import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Longiano",
  canonical: links.servizi["centrifugazione-fanghi"]["longiano"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Longiano",
  locationNames: { label: "Longiano", href: "longiano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
