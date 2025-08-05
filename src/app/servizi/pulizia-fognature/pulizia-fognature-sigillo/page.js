import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Sigillo",
  canonical: links.servizi["pulizia-fognature"]["sigillo"],
});
export default withBaseProps({
  title: "Pulizia fognature Sigillo",
  locationNames: { label: "Sigillo", href: "sigillo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
