import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Trevi",
  canonical: links.servizi["pulizia-fognature"]["trevi"],
});
export default withBaseProps({
  title: "Pulizia fognature Trevi",
  locationNames: { label: "Trevi", href: "trevi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
