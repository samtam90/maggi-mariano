import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Predappio",
  canonical: links.servizi["centrifugazione-fanghi"]["predappio"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Predappio",
  locationNames: { label: "Predappio", href: "predappio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
