import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Reggio Calabria",
  canonical: links.servizi["frantoio-mobile-inerti"]["reggio-calabria"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Reggio Calabria",
  locationNames: { label: "Reggio Calabria", href: "reggio-calabria" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["reggio-calabria"],
      name: "Reggio Calabria",
  }),
});
