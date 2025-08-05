import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Macerata",
  canonical: links.servizi["noleggio-bagni-chimici"]["macerata"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Macerata",
  locationNames: { label: "Macerata", href: "macerata" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["macerata"],
      name: "Macerata",
  }),
});
