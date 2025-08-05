import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Trevi",
  canonical: links.servizi["frantoio-mobile-inerti"]["trevi"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Trevi",
  locationNames: { label: "Trevi", href: "trevi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
