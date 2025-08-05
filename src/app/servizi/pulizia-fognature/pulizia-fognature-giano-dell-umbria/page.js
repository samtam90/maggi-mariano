import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Giano dell'Umbria",
  canonical: links.servizi["pulizia-fognature"]["giano-dell-umbria"],
});
export default withBaseProps({
  title: "Pulizia fognature Giano dell'Umbria",
  locationNames: { label: "Giano dell'Umbria", href: "giano-dell-umbria" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
