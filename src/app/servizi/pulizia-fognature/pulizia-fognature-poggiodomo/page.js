import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Poggiodomo",
  canonical: links.servizi["pulizia-fognature"]["poggiodomo"],
});
export default withBaseProps({
  title: "Pulizia fognature Poggiodomo",
  locationNames: { label: "Poggiodomo", href: "poggiodomo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
