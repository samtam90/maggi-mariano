import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Premilcuore",
  canonical: links.servizi["centrifugazione-fanghi"]["premilcuore"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Premilcuore",
  locationNames: { label: "Premilcuore", href: "premilcuore" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
