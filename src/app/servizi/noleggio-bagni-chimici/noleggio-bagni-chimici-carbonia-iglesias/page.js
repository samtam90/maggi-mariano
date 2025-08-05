import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Carbonia Iglesias",
  canonical: links.servizi["noleggio-bagni-chimici"]["carbonia-iglesias"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Carbonia Iglesias",
  locationNames: { label: "Carbonia Iglesias", href: "carbonia-iglesias" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["carbonia-iglesias"],
      name: "Carbonia Iglesias",
  }),
});
