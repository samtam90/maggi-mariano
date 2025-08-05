import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Cesenatico",
  canonical: links.servizi["centrifugazione-fanghi"]["cesenatico"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Cesenatico",
  locationNames: { label: "Cesenatico", href: "cesenatico" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
