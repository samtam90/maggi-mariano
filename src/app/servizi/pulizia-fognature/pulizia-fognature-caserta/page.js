import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Caserta",
  canonical: links.servizi["pulizia-fognature"]["caserta"],
});
export default withBaseProps({
  title: "Pulizia fognature Caserta",
  locationNames: { label: "Caserta", href: "caserta" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["caserta"],
      name: "Caserta",
  }),
});
