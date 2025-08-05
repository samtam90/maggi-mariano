import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Alessandria",
  canonical: links.servizi["frantoio-mobile-inerti"]["alessandria"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Alessandria",
  locationNames: { label: "Alessandria", href: "alessandria" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["alessandria"],
      name: "Alessandria",
  }),
});
