import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Bastia Umbra",
  canonical: links.servizi["pulizia-fognature"]["bastia-umbra"],
});
export default withBaseProps({
  title: "Pulizia fognature Bastia Umbra",
  locationNames: { label: "Bastia Umbra", href: "bastia-umbra" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
