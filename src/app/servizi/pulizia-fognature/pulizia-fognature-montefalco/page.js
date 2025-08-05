import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Montefalco",
  canonical: links.servizi["pulizia-fognature"]["montefalco"],
});
export default withBaseProps({
  title: "Pulizia fognature Montefalco",
  locationNames: { label: "Montefalco", href: "montefalco" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
