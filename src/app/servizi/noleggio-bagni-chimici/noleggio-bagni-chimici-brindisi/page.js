import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Brindisi",
  canonical: links.servizi["noleggio-bagni-chimici"]["brindisi"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Brindisi",
  locationNames: { label: "Brindisi", href: "brindisi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["brindisi"],
      name: "Brindisi",
  }),
});
