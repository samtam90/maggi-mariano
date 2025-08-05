import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Sarsina",
  canonical: links.servizi["centrifugazione-fanghi"]["sarsina"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Sarsina",
  locationNames: { label: "Sarsina", href: "sarsina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
