import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Galeata",
  canonical: links.servizi["disidratazione-fanghi"]["galeata"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Galeata",
  locationNames: { label: "Galeata", href: "galeata" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
