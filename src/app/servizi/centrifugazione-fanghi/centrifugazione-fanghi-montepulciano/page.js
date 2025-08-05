import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Montepulciano",
  canonical: links.servizi["centrifugazione-fanghi"]["montepulciano"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Montepulciano",
  locationNames: { label: "Montepulciano", href: "montepulciano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
