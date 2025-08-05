import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Baschi",
  canonical: links.servizi["frantoio-mobile-inerti"]["baschi"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Baschi",
  locationNames: { label: "Baschi", href: "baschi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
