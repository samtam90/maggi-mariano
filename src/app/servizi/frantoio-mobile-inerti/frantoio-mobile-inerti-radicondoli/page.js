import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Radicondoli",
  canonical: links.servizi["frantoio-mobile-inerti"]["radicondoli"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Radicondoli",
  locationNames: { label: "Radicondoli", href: "radicondoli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
