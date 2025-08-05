import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Castel Giorgio",
  canonical: links.servizi["frantoio-mobile-inerti"]["castel-giorgio"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Castel Giorgio",
  locationNames: { label: "Castel Giorgio", href: "castel-giorgio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
