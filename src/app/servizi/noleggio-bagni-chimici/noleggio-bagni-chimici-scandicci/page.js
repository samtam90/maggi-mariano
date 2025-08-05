import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Scandicci",
  canonical: links.servizi["noleggio-bagni-chimici"]["scandicci"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Scandicci",
  locationNames: { label: "Scandicci", href: "scandicci" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
