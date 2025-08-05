import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Bastia Umbra",
  canonical: links.servizi["frantoio-mobile-inerti"]["bastia-umbra"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Bastia Umbra",
  locationNames: { label: "Bastia Umbra", href: "bastia-umbra" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
