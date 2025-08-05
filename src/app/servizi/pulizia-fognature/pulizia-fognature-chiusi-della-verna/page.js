import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Chiusi della Verna",
  canonical: links.servizi["pulizia-fognature"]["chiusi-della-verna"],
});
export default withBaseProps({
  title: "Pulizia fognature Chiusi della Verna",
  locationNames: { label: "Chiusi della Verna", href: "chiusi-della-verna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
