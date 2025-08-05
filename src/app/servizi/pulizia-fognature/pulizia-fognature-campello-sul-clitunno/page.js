import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Campello sul Clitunno",
  canonical: links.servizi["pulizia-fognature"]["campello-sul-clitunno"],
});
export default withBaseProps({
  title: "Pulizia fognature Campello sul Clitunno",
  locationNames: { label: "Campello sul Clitunno", href: "campello-sul-clitunno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
