import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Napoli",
  canonical: links.servizi["frantoio-mobile-inerti"]["napoli"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Napoli",
  locationNames: { label: "Napoli", href: "napoli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["napoli"],
      name: "Napoli",
  }),
});
