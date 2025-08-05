import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Rieti",
  canonical: links.servizi["noleggio-bagni-chimici"]["rieti"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Rieti",
  locationNames: { label: "Rieti", href: "rieti" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["rieti"],
      name: "Rieti",
  }),
});
