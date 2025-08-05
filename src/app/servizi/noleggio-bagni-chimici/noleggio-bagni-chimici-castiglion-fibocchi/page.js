import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Castiglion Fibocchi",
  canonical: links.servizi["noleggio-bagni-chimici"]["castiglion-fibocchi"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Castiglion Fibocchi",
  locationNames: { label: "Castiglion Fibocchi", href: "castiglion-fibocchi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
