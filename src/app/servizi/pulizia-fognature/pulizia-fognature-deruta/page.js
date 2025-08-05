import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Deruta",
  canonical: links.servizi["pulizia-fognature"]["deruta"],
});
export default withBaseProps({
  title: "Pulizia fognature Deruta",
  locationNames: { label: "Deruta", href: "deruta" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
