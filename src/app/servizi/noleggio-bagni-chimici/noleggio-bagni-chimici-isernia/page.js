import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Isernia",
  canonical: links.servizi["noleggio-bagni-chimici"]["isernia"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Isernia",
  locationNames: { label: "Isernia", href: "isernia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["isernia"],
      name: "Isernia",
  }),
});
