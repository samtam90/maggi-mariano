import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Verghereto",
  canonical: links.servizi["centrifugazione-fanghi"]["verghereto"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Verghereto",
  locationNames: { label: "Verghereto", href: "verghereto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
