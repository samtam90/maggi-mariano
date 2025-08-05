import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Forlì-Cesena",
  canonical: links.servizi["centrifugazione-fanghi"]["forli-cesena"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Forlì-Cesena",
  locationNames: { label: "Forlì-Cesena", href: "forli-cesena" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì-Cesena",
  }),
});
