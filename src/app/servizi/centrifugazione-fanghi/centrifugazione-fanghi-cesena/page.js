import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Cesena",
  canonical: links.servizi["centrifugazione-fanghi"]["cesena"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Cesena",
  locationNames: { label: "Cesena", href: "cesena" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
