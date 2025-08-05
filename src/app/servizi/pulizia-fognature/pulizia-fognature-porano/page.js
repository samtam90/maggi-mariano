import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Porano",
  canonical: links.servizi["pulizia-fognature"]["porano"],
});
export default withBaseProps({
  title: "Pulizia fognature Porano",
  locationNames: { label: "Porano", href: "porano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
