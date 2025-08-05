import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Castiglion Fiorentino",
  canonical: links.servizi["noleggio-bagni-chimici"]["castiglion-fiorentino"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Castiglion Fiorentino",
  locationNames: { label: "Castiglion Fiorentino", href: "castiglion-fiorentino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
