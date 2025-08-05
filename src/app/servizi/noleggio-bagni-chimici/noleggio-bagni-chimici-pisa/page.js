import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Pisa",
  canonical: links.servizi["noleggio-bagni-chimici"]["pisa"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Pisa",
  locationNames: { label: "Pisa", href: "pisa" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["pisa"],
      name: "Pisa",
  }),
});
