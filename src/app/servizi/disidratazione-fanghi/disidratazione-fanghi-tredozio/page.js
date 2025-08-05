import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Tredozio",
  canonical: links.servizi["disidratazione-fanghi"]["tredozio"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Tredozio",
  locationNames: { label: "Tredozio", href: "tredozio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
