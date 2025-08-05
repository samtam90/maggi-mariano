import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Medio Campidano",
  canonical: links.servizi["pulizia-fognature"]["medio-campidano"],
});
export default withBaseProps({
  title: "Pulizia fognature Medio Campidano",
  locationNames: { label: "Medio Campidano", href: "medio-campidano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["medio-campidano"],
      name: "Medio Campidano",
  }),
});
