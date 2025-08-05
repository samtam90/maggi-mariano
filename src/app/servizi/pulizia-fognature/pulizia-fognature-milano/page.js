import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Milano",
  canonical: links.servizi["pulizia-fognature"]["milano"],
});
export default withBaseProps({
  title: "Pulizia fognature Milano",
  locationNames: { label: "Milano", href: "milano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["milano"],
      name: "Milano",
  }),
});
