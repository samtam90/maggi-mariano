import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Medio Campidano",
  canonical: links.servizi["frantoio-mobile-inerti"]["medio-campidano"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Medio Campidano",
  locationNames: { label: "Medio Campidano", href: "medio-campidano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["medio-campidano"],
      name: "Medio Campidano",
  }),
});
