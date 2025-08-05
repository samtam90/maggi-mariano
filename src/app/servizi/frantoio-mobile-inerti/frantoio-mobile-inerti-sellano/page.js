import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Sellano",
  canonical: links.servizi["frantoio-mobile-inerti"]["sellano"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Sellano",
  locationNames: { label: "Sellano", href: "sellano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
