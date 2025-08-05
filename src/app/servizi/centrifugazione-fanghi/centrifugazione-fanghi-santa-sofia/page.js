import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Santa Sofia",
  canonical: links.servizi["centrifugazione-fanghi"]["santa-sofia"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Santa Sofia",
  locationNames: { label: "Santa Sofia", href: "santa-sofia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
