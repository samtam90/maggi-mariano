import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Montiano",
  canonical: links.servizi["disidratazione-fanghi"]["montiano"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Montiano",
  locationNames: { label: "Montiano", href: "montiano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
