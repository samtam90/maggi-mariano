import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Torgiano",
  canonical: links.servizi["disidratazione-fanghi"]["torgiano"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Torgiano",
  locationNames: { label: "Torgiano", href: "torgiano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
