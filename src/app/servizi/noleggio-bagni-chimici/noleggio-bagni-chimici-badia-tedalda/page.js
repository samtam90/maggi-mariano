import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Badia Tedalda",
  canonical: links.servizi["noleggio-bagni-chimici"]["badia-tedalda"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Badia Tedalda",
  locationNames: { label: "Badia Tedalda", href: "badia-tedalda" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
