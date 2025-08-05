import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Varese",
  canonical: links.servizi["frantoio-mobile-inerti"]["varese"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Varese",
  locationNames: { label: "Varese", href: "varese" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["varese"],
      name: "Varese",
  }),
});
