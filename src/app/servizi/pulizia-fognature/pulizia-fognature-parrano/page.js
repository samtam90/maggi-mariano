import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Parrano",
  canonical: links.servizi["pulizia-fognature"]["parrano"],
});
export default withBaseProps({
  title: "Pulizia fognature Parrano",
  locationNames: { label: "Parrano", href: "parrano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
