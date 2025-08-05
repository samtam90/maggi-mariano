import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Montepulciano",
  canonical: links.servizi["disidratazione-fanghi"]["montepulciano"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Montepulciano",
  locationNames: { label: "Montepulciano", href: "montepulciano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
